import { ArticleProps } from '@app/utils/shared-interfaces';
import dynamic from 'next/dynamic';
import get from 'lodash/get';

const Article = dynamic(() => import('@app/components/Article'), {
  ssr: true
});

type ArticleLayoutProps = {
  pageData: any;
  article: ArticleProps;
};

export default function ArticleLayout({ pageData, article }: ArticleLayoutProps) {
  const articleData = get(article, 'blocksData.centerMiddle.articles', []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="prose max-w-none">
        <h1>{article.title}</h1>
        <h2>{article.subtitle}</h2>
        <div dangerouslySetInnerHTML={{ __html: article.articleBody }} />
        {article.content && article.content.image && (
          <img src={article.content.image.desktop_image_path} alt={article.title} />
        )}
      </div>
    </div>
  );
}
