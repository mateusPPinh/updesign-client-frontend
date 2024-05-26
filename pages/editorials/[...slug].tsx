import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import startCase from 'lodash/startCase';
import dynamic from 'next/dynamic';
import { callEditorialsApiData, loadEditorials } from '@app/store/api-handler';
import get from 'lodash/get';

const RenderPages = dynamic(() => import('../../renders/RenderPages'));
const RenderSlots = dynamic(() => import('../../renders/RenderSlots'));
const BaseStruct = dynamic(() => import('../../components/Struct/BaseStruct'));

const EditorialPage = (props: any) => {
  console.log(props, 'editorialsprops');
  const { isFallback } = useRouter();
  if (isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Head>
      <title>{startCase(props.pages.title)}</title>
      <meta name="description" content={props.pages.description} />
      {/* <BaseStruct editorialsNavigationProps={props} navigation={[]}>
        <RenderSlots editorialsData={props} />
          <div className="max-w-7xl w-full flex flex-col items-center justify-center mx-auto">
            <RenderPages editorialsData={props} />
          </div>
      </BaseStruct> */}
    </Head>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = Array.isArray(context.params?.slug)
    ? context.params.slug[0]
    : context.params?.slug;

  let articlePreviewObj: object = {};
  const loadEditorialsPages = await loadEditorials();
  const pageslug = Object.values(loadEditorialsPages);
  const getCurrentPage = pageslug.find((page: any) => page.slug === slug);
  console.log('get current page', slug)
  if (!getCurrentPage) {
    return { notFound: true };
  }

  const editorialsData = getCurrentPage
    ? await callEditorialsApiData(getCurrentPage.slug)
    : null;

  const articledata = get(editorialsData, '[0]', []);
  const articlecontent = get(articledata, 'content', {});
  const articletitle = get(articledata, 'title', '');
  const articlesubtitle = get(articledata, 'subtitlte', '');
  const articleslug = get(articledata, 'slug', '');

  articlePreviewObj = {
    articlecontent,
    articlesubtitle,
    articletitle,
    articleslug
  };

  return {
    props: {
      pages: getCurrentPage || null,
      data: editorialsData || [],
      preview: articlePreviewObj || {}
    }
  };

  // if (slug.length === 2) {
  //   const response = await callEditorialsApiData(slug);
  //   console.log('é somente a pagina de editoria');

  //   if (!response || response.length === 0) {
  //     return { notFound: true };
  //   }

  //   const articles = response;
  //   const editorial = articles[0]?.editorial;

  //   return {
  //     props: {
  //       editorial: editorial,
  //       article: articles
  //     }
  //   };
  // }

  // const response = await callEditorialsApiData(slug);

  // if (!response || response.length === 0) {
  //   return { notFound: true };
  // }

  // const articles = response;
  // const editorial = articles[0]?.editorial;

  // if (!editorial) {
  //   return { notFound: true };
  // }

  // return {
  //   props: {
  //     editorial: {
  //       id: editorial.id,
  //       title: editorial.title,
  //       description: editorial.description,
  //       slug: editorial.slug,
  //       articles
  //     }
  //   }
  // };
};

export default EditorialPage;
