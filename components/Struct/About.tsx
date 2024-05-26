import { ArticleProps } from '@app/utils/shared-interfaces';
import Article from '../Article';
import get from 'lodash/get';

type AboutProps = {
  pageData?: any;
  articles?: ArticleProps[];
};

export default function About({ articles, pageData }: AboutProps) {
  const articleData = get(articles, 'articles', []);
  console.log('props from about page: articleData', articleData);
  return (
    <>
      {articleData &&
        articleData.map((it: ArticleProps) => (
          <Article
            key={it.title}
            created_at={it.created_at}
            updated_at={it.updated_at}
            articleBody={it.articleBody}
            author={it.author}
            title={it.title}
            subtitle={it.subtitle}
          />
        ))}
    </>
  );
}
