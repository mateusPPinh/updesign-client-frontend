import { ArticleProps } from '@app/utils/shared-interfaces';

import { Title } from './By-Sessions/Title';
import { Subtitle } from './By-Sessions/Subtitle';
import { PublishInfo } from './By-Sessions/PublishInfo';
import { ArticleHTMLBody } from './By-Sessions/ArticleHTMLBody';
import CoverImage from './By-Sessions/CoverImage';
import { colorClassMap } from '@app/styles/colorClassMap';
import Wrapper from './styles';

export default function Article(props: ArticleProps) {
  const bgColorClass =
    typeof props.pageBgColor === 'string' && colorClassMap[props.pageBgColor]
      ? colorClassMap[props.pageBgColor]
      : 'bg-background1';

  if (!props) {
    throw new Error('No data to render here');
  }

  return (
    <div className={`${bgColorClass}`}>
      <CoverImage content={props.content} />
      <Wrapper
        child={
          <>
            <Title title={props.title} />
            <Subtitle subtitle={props.subtitle} />
            <PublishInfo
              articleAuthorEmail={props.email}
              articleAuthorSocialNetworks={props.social_networks}
            />
            <ArticleHTMLBody articleBody={props.articleBody} />
          </>
        }
      ></Wrapper>
    </div>
  );
}
