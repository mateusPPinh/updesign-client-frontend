import { ArticleProps, PageProps } from '@app/utils/shared-interfaces';
import get from 'lodash/get';
import Image from 'next/image';
import Link from 'next/link';

type DefaultLayoutProps = {
  pageData: PageProps;
  articles: ArticleProps[];
};

const customImageContainerStyle = {
  width: '580px',
  height: '435px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export default function DefaultLayout({ articles, pageData }: DefaultLayoutProps) {
  const articlesdata = get(articles, 'articles', []);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
    <div className="flex flex-wrap -mx-2">
      {articlesdata.map((article: ArticleProps, index) => (
        <div key={index} className="w-full sm:w-1/2 px-2 mb-4">
          <div style={customImageContainerStyle}>
            <Link href={article.slug ? article.slug : '/'}>
              <Image
                src={article.content?.image.desktop_image_path ?? ''}
                priority={true}
                width={0}
                height={0}
                layout="responsive"
                alt={article.subtitle ?? 'UpDesign'}
                unoptimized
              />
            </Link>
          </div>
          <Link href={article.slug ? article.slug : '/'}>
            <h2 className="mainPage font-noto text-2xl">{article.title}</h2>
          </Link>
          <p className="mainPage font-noto text-xs">{article.subtitle}</p>
        </div>
      ))}
    </div>
  </div>
  )
}