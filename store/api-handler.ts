import { umbriel_api } from '@app/services/api';
import { ArticleProps } from '@app/utils/shared-interfaces';

async function receivePageBlocks(pageId: string): Promise<any> {
  const loadPageBlocksResponse = await umbriel_api.get(
    `/page-blocks/${pageId}`
  );
  return loadPageBlocksResponse.data;
}

export async function listAllArticles() {
  const response = await umbriel_api.get('/list-articles');
  return response.data.articles;
}

async function loadPages() {
  try {
    const loadPagesResponse = await umbriel_api.get('/listPages');
    return (await loadPagesResponse).data;
  } catch (err) {
    console.log('error,',err)
  }
}

async function loadArticleByEditorialSlugAndArticleSlug(editorialSlug: string, slug: string) {
  const response = await umbriel_api.get(`/${editorialSlug}/${slug}`)
  return response.data;
}

async function loadEditorialPageBlocks(articleSlug: string) {
  const getEditorialPageBlocks = await umbriel_api.get(`/page-blocks/article/${articleSlug}`);
  return getEditorialPageBlocks.data;
}

async function loadSlugs() {
  const getSlugs = umbriel_api.get('/slugs');
  return (await getSlugs).data;
}

async function loadEditorialBySlugAndArticle(editorialSlug: string, article: ArticleProps) {
  const getEditorials = umbriel_api.get(`/editorials/${editorialSlug}/${article}`);
  return (await getEditorials).data.editorials;
}

async function loadEditorialBySlug(slug: string) {
  const response = await umbriel_api.get(`/editorials/${slug}`);
  return response.data;
}

async function loadComponents() {
  const getSiteComponents = umbriel_api.get('/components');
  return (await getSiteComponents).data;
}

async function callEditorialsApiData(slug: string) {
  const response = await umbriel_api.get(`/${slug}/articles`);
  return response.data;
}


async function loadEditorials() {
  const getEditorials = await umbriel_api.get('/editorials')
  return getEditorials.data.editorials;
}

async function loadClientAppInfo() {
  const getAppInfo = await umbriel_api.get('/app-info');
  return getAppInfo.data;
}

export {
  receivePageBlocks,
  loadPages,
  loadSlugs,
  loadEditorialBySlugAndArticle,
  loadComponents,
  callEditorialsApiData,
  loadEditorials,
  loadClientAppInfo,
  loadEditorialPageBlocks,
  loadArticleByEditorialSlugAndArticleSlug,
  loadEditorialBySlug
};
