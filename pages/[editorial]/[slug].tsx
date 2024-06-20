import { ArticleProps } from '@app/utils/shared-interfaces';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
const RenderSlots = dynamic(() => import('../../renders/RenderSlots'));
import Seo from '@app/providers/Seo';
import { loadClientAppInfo } from '@app/store/api-handler';
import get from 'lodash/get';

interface ArticlePageProps {
  article: ArticleProps;
  appInfo: object,
}

const ArticlePage = ({ article, appInfo }: ArticlePageProps) => {
  console.log(article);
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Seo slugData={article} favico={appInfo}>
      <RenderSlots articleProps={article} />
    </Seo>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_UMBRIEL_API}/list-articles`);
  const data = await res.json();
  const articles = data.articles;

  const paths = articles.map((article: ArticleProps) => ({
    params: { editorial: article.editorial?.slug, slug: article.slug },
  }));

  return { paths, fallback: true };
}
interface Params {
  params: {
    editorial: string;
    slug: string;
  };
}

interface StaticPropsResult {
  props: {
    article: ArticleProps;
    appInfo: object
  };
  revalidate: number;
  notFound?: boolean;
}

export async function getStaticProps({ params }: Params): Promise<StaticPropsResult> {
  const { editorial, slug } = params;

  console.log('Fetching article:', editorial, slug); 

  const res = await fetch(`${process.env.NEXT_PUBLIC_UMBRIEL_API}/articles/${editorial}/${slug}`);
  const article: ArticleProps = await res.json();


 // favicons
 const loadClientInfo = await loadClientAppInfo();
 const data = get(loadClientInfo, '[0]', []);
 const loadIcons = get(data, 'favicon', {});

  if (!article) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
      appInfo: loadIcons || {}
    },
    revalidate: 10,
  };
}

export default ArticlePage;