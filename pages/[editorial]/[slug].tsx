'use client';

import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useContext, useEffect } from 'react';
import DataContext from '@app/contexts/DataContext';
import Seo from '@app/providers/Seo';
import get from 'lodash/get';
import { ArticleProps } from '@app/utils/shared-interfaces';
import {
  loadClientAppInfo,
  loadClientComponents
} from '@app/store/api-handler';

const RenderSlots = dynamic(() => import('../../renders/RenderSlots'));
const PageLoading = dynamic(() => import('@app/components/PageLoading'));

interface ArticlePageProps {
  article: ArticleProps;
  appInfo: object;
  components: Array<unknown>;
}

const ArticlePage = ({ article, appInfo, components }: ArticlePageProps) => {
  const router = useRouter();
  const { articles, fetchArticles } = useContext(DataContext);

  useEffect(() => {
    if (!articles || articles.length === 0) {
      fetchArticles && fetchArticles();
    }
  }, [articles, fetchArticles]);

  if (router.isFallback) {
    return <PageLoading />;
  }

  return (
    <Seo slugData={article} favico={appInfo}>
      <RenderSlots articleProps={article} clientComponents={components} />
    </Seo>
  );
};

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_UMBRIEL_API}/list-articles`
  );
  const data = await res.json();
  const articles = data.articles;

  const paths = articles.map((article: ArticleProps) => ({
    params: { editorial: article.editorial?.slug, slug: article.slug }
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
    appInfo: object;
    components: Array<unknown>;
  };
  revalidate: number;
  notFound?: boolean;
}

export async function getStaticProps({
  params
}: Params): Promise<StaticPropsResult> {
  const { editorial, slug } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_UMBRIEL_API}/articles/${editorial}/${slug}`
  );
  const article: ArticleProps = await res.json();

  const loadClientInfo = await loadClientAppInfo();
  const loadSiteComponentsData = await loadClientComponents();
  const components = loadSiteComponentsData;
  const data = get(loadClientInfo, '[0]', []);
  const loadIcons = get(data, 'favicon', {});

  if (!article) {
    return {
      notFound: true,
      props: {
        article: {
          articleBody: '',
          editorialId: '',
          status: 'notPublished',
          subtitle: '',
          title: '',
          content: {
            image: {
              desktop_image_path: '',
              image_mobile_path: ''
            }
          },
          editorial: {
            description: '',
            slug: '',
            title: ''
          },
          email: '',
          isAward: false,
          pageBgColor: '',
          slug: '',
          social_networks: '',
          static_page_id: '',
          uploadedArticleImgs: []
        },
        appInfo: {},
        components: []
      },
      revalidate: 0
    };
  }

  return {
    props: {
      article,
      appInfo: loadIcons || {},
      components: components || []
    },
    revalidate: 3600
  };
}

export default ArticlePage;
