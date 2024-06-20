import { ArticleProps } from '@app/utils/shared-interfaces';
import dynamic from 'next/dynamic';

const Article = dynamic(() => import('@app/components/Article'), {
  ssr: true
});

interface Props {
  articleData: ArticleProps;
}

export default function RenderSiteData({ articleData }: Props) {
  return (
    <Article
      key={articleData.slug}
      articleBody={articleData.articleBody}
      subtitle={articleData.subtitle}
      title={articleData.title}
      content={articleData.content}
      status={articleData.status}
      email={articleData.email}
      pageBgColor={articleData.pageBgColor}
      slug={articleData.slug}
      editorialId={articleData.editorialId}
      social_networks={articleData.social_networks}
    />
  );
}
