import { ArticleProps } from '@app/utils/shared-interfaces';
import { ArticleHTMLBody } from './By-Sessions/ArticleHTMLBody';
import CoverImage from './By-Sessions/CoverImage';
import Wrapper from './styles';

export default function Article(props: ArticleProps) {
  if (!props) {
    throw new Error('No data to render here');
  }

  return (
    <>
      <CoverImage content={props.content} />
      <Wrapper
        child={<ArticleHTMLBody articleBody={props.articleBody} />}
      ></Wrapper>
    </>
  );
}
