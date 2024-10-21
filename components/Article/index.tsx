import { ArticleProps } from '@app/utils/shared-interfaces';
import { ArticleHTMLBody } from './By-Sessions/ArticleHTMLBody';
import dynamic from 'next/dynamic';

const CoverImage = dynamic(() => import('./By-Sessions/CoverImage'), {
  ssr: true
});
export default function Article(props: ArticleProps) {
  if (!props) {
    throw new Error('No data to render here');
  }

  return (
    <>
      <CoverImage content={props.content} title={props.title} />
      <ArticleHTMLBody articleBody={props.articleBody} title={props.title} />
    </>
  );
}
