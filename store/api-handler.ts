import { umbriel_api } from '@app/services/api';
import { IEditorialsPromiseReponse } from './responses';

async function receivePageBlocks(pageId: string): Promise<any> {
  const loadPageBlocksResponse = await umbriel_api.get(
    `/page-blocks/${pageId}`
  );
  return loadPageBlocksResponse.data;
}

async function loadPages() {
  const loadPagesResponse = await umbriel_api.get('/listPages');
  return (await loadPagesResponse).data;
}

async function loadSlugs() {
  const getSlugs = umbriel_api.get('/slugs');
  return (await getSlugs).data;
}

async function handleEditorials(editorialId: string) {
  const getEditorials = umbriel_api.get(`/editorials/${editorialId}`);
  return (await getEditorials).data.editorials;
}

async function loadComponents() {
  const getSiteComponents = umbriel_api.get('/components');
  return (await getSiteComponents).data;
}

async function callEditorialsApiData(slug: string) {
  console.log('string param', slug)
  return (await umbriel_api.get(`/${slug}/articles`)).data;
}

async function loadEditorials(): Promise<IEditorialsPromiseReponse> {
  const getEditorials = await umbriel_api.get('/editorials')
  return getEditorials.data.editorials;
}

export {
  receivePageBlocks,
  loadPages,
  loadSlugs,
  handleEditorials,
  loadComponents,
  callEditorialsApiData,
  loadEditorials
};
