import dynamic from 'next/dynamic';
import { GetServerSideProps } from 'next';
import {
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
}

const SeoContainer = dynamic(() => import('@app/seo/index'));
const RenderPages = dynamic(() => import('../renders/RenderPages'));
const RenderSlots = dynamic(() => import('../renders/RenderSlots'));
const BaseStruct = dynamic(() => import('../components/Struct/BaseStruct'));

const HomePage = ({ createSlug, siteData, components }: SlugProps) => {
  if (typeof window !== 'undefined') {
    console.group('[PageSlugProps]', siteData);
  }
  return (
    <SeoContainer createSlug={createSlug}>
      <BaseStruct navigation={siteData}>
        <RenderSlots siteApiData={siteData} componentsData={components} />
        <div className="max-w-7xl w-full flex flex-col items-center justify-center mx-auto">
          <RenderPages pageDataProps={createSlug} pageblockData={siteData} />
        </div>
      </BaseStruct>
    </SeoContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slugFromURL = Array.isArray(context.params?.slug)
    ? context.params.slug[0]
    : context.params?.slug;

  try {
    const pagesData = await loadPages();
    console.log('Pages data:', pagesData);

    const currentPageData = pagesData.find(
      (page: { slug: string | undefined }) => page.slug === slugFromURL
    );

    if (!currentPageData) {
      return { notFound: true };
    }

    const siteData = currentPageData
      ? await receivePageBlocks(currentPageData.id)
      : null;
    console.log('Site data:', siteData);

    const currentPageId = currentPageData.id;

    const pageBlockForCurrentPage = siteData.find(
      (pageBlock: { pageId: unknown }) => pageBlock.pageId === currentPageId
    );
    console.log('Page block for current page:', pageBlockForCurrentPage);

    const loadSiteComponentsData = await loadComponents();
    const components = loadSiteComponentsData;
    console.log('Components data:', components);

    return {
      props: {
        createSlug: currentPageData ? [currentPageData] : [],
        siteData: pageBlockForCurrentPage || null,
        components: components || []
      }
    };
  } catch (error) {
    console.error('Error in getServerSideProps:', error);
    return { notFound: true };
  }
};


export default HomePage;
