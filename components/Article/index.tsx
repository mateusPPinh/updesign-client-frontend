import { ArticleProps } from '@app/utils/shared-interfaces';
import get from 'lodash/get';

import { Title } from './By-Sessions/Title';
import { Subtitle } from './By-Sessions/Subtitle';
import { MainArticleContainer } from './By-Sessions/MainArticleContainer';
import { PublishInfo } from './By-Sessions/PublishInfo';
import { ArticleHTMLBody } from './By-Sessions/ArticleHTMLBody';

export default function Article(props: ArticleProps) {
  console.log('article props', props.slug);
  // Driling to all article pieces
  const articleTitle = get(props, 'title', '');
  const articleSubtitle = get(props, 'subtitle', '');
  const articleHtmlContent = get(props, 'articleBody', null);
  const articleAuthor = get(props, 'author', '');
  const articleAuthorEmail = get(props, 'email', '');
  const articleCreatedAt = get(props, 'created_at', undefined);
  const articleUpdatedAt = get(props, 'updated_at', undefined);
  const articleAuthorSocialNetworks = get(props, 'social_networks', undefined);

  return (
    <MainArticleContainer>
      <Title title={articleTitle} />
      <Subtitle subtitle={articleSubtitle} />
      <PublishInfo
        articleAuthor={articleAuthor}
        articleAuthorEmail={articleAuthorEmail}
        articleAuthorSocialNetworks={articleAuthorSocialNetworks}
        articleCreatedAt={articleCreatedAt}
        articleUpdatedAt={articleUpdatedAt}
      />
      <ArticleHTMLBody articleBody={articleHtmlContent} />
    </MainArticleContainer>
  );
}
