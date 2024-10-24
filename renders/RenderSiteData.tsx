import footer from '@app/utils/redundancy/footer';
import { ArticleProps } from '@app/utils/shared-interfaces';
import dynamic from 'next/dynamic';
import get from 'lodash/get';
import { colorClassMap } from '@app/styles/colorClassMap';
import menu from '@app/utils/redundancy/menu'

const Footer = dynamic(() => import('@app/components/Struct/Footer'), {
  ssr: false
});
const DynamicMenu = dynamic(() => import('@app/components/Struct/Menu'), {
  ssr: false
});
const Article = dynamic(() => import('@app/components/Article'), {
  ssr: true
});

interface Props {
  articleData: ArticleProps;
  components: Array<unknown>;
}

export default function RenderSiteData({ articleData, components }: Props) {
  const bgColorClass =
    typeof articleData.pageBgColor === 'string' &&
    colorClassMap[articleData.pageBgColor]
      ? colorClassMap[articleData.pageBgColor]
      : 'bg-background1';
  return (
    <div className={`${bgColorClass} min-h-screen`}>
      <div
        className='w-full mb-10 pb-0 overflow-hidden'
      >
        <DynamicMenu items={menu} />
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
      </div>
      <Footer items={footer} />
    </div>
  );
}
