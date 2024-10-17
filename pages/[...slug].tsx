import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import get from 'lodash/get';
import {
  loadClientAppInfo,
  loadComponents,
  loadPages,
  receivePageBlocks
} from '@app/store/api-handler';
import {
  UmbrielVectorProps,
  PageProps,
  ComponentsProps
} from '@app/utils/shared-types';

interface SlugProps {
  createSlug: PageProps[];
  siteData: UmbrielVectorProps[];
  components: ComponentsProps[];
  appInfo?: object;
}

const RenderPages = dynamic(() => import('../renders/RenderPages'));
const RenderSlots = dynamic(() => import('../renders/RenderSlots'));
const BaseStruct = dynamic(() => import('../components/Struct/BaseStruct'));
const Seo = dynamic(() => import('@app/providers/Seo'));

const DynamicPage = ({
  createSlug,
  siteData,
  components,
  appInfo
}: SlugProps) => {
  if (typeof window !== 'undefined') {
    console.group('[PageSlugProps]', siteData);
  }

  return (
    <Seo slugData={createSlug} favico={appInfo}>
      <BaseStruct navigation={siteData}>
        <RenderSlots siteApiData={siteData} componentsData={components} />
        <RenderPages pageDataProps={createSlug} pageblockData={siteData} />
      </BaseStruct>
    </Seo>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slugFromURL = Array.isArray(context.params?.slug)
    ? context.params.slug.join('/')
    : context.params?.slug || 'home';

  const pagesData = await loadPages();

  // favicons
  const loadClientInfo = await loadClientAppInfo();
  const data = get(loadClientInfo, '[0]', []);
  const loadIcons = get(data, 'favicon', {});

  const currentPageData = pagesData.find(
    (page: { slug: string | undefined }) => page.slug === slugFromURL
  );

  if (!currentPageData) {
    return { notFound: true };
  }

  const siteData = currentPageData
    ? await receivePageBlocks(currentPageData.id)
    : null;

  const currentPageId = currentPageData.id;

  const pageBlockForCurrentPage = siteData.find(
    (pageBlock: { pageId: unknown }) => pageBlock.pageId === currentPageId
  );

  const loadSiteComponentsData = await loadComponents();
  const components = loadSiteComponentsData;

  return {
    props: {
      createSlug: currentPageData ? [currentPageData] : [],
      siteData: pageBlockForCurrentPage || [],
      components: components || [],
      appInfo: loadIcons || {}
    }
  };
};

export default DynamicPage;
