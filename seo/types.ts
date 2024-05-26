import { ReactNode } from 'react';

type SEOProps = {
  id: string;
  title: string;
  description: string;
  metaDescription: string;
  metaKeywords: string;
  slug: string;
};

export type Props = {
  createSlug: SEOProps[];
  children: ReactNode;
};
