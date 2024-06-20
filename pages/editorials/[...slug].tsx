import { GetServerSideProps } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import {
  loadComponents,
  loadEditorials,
  receivePageBlocks
} from '@app/store/api-handler';
import get from 'lodash/get';

const RenderPages = dynamic(() => import('../../renders/RenderPages'));
const RenderSlots = dynamic(() => import('../../renders/RenderSlots'));
const BaseStruct = dynamic(() => import('../../components/Struct/BaseStruct'));
import { ComponentsProps, EditorialsProps as PageProps } from '@app/utils/shared-types';
import { UmbrielVectorProps } from '@app/utils/shared-interfaces';

interface EditorialProps {
  pages: any;
  data: UmbrielVectorProps[];
  components: ComponentsProps[];
}

const EditorialPage = ({ data, pages, components }: EditorialProps) => {
  if (typeof window !== 'undefined') {
    console.log('[PageSlugProps]', data, pages);
  }

  return (
    <>
      <Head>
        <title>{pages.title}</title>
        <meta name="next-head-count" content="4" />
      </Head>
      <BaseStruct navigation={data}>
        <RenderSlots siteApiData={data} componentsData={components} />
        <RenderPages pageDataProps={pages} pageblockData={data} />
      </BaseStruct>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = Array.isArray(context.params?.slug)
    ? context.params.slug[0]
    : context.params?.slug;

  const loadEditorialsPages = await loadEditorials();
  const getCurrentPage = loadEditorialsPages.find((page: any) => page.slug === slug);
  if (!getCurrentPage) {
    return { notFound: true };
  }

  const editorialsData = getCurrentPage
    ? await receivePageBlocks(getCurrentPage.id)
    : null;

  const loadSiteComponentsData = await loadComponents();
  const components = loadSiteComponentsData;
  return {
    props: {
      pages: getCurrentPage || null,
      data: editorialsData || [],
      components: components || [],
    }
  };
};

export default EditorialPage;
