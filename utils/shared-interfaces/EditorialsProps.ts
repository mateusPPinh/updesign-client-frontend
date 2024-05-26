import { ArticleProps } from './ArticleProps';

export interface EditorialProps {
  editorial: {
    id: string;
    title: string;
    description: string;
    slug: string;
    articles: ArticleProps[];
  };
}
