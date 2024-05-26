import { umbriel_api } from '@app/services/api';

export async function callEditorialsApiData(slug: string) {
  return (await umbriel_api.get(`/editorials/${slug}/articles`)).data;
}
