import { ArticleProps } from '@app/utils/shared-interfaces';
import get from 'lodash/get';
import Image from 'next/image';
import { loaderProp } from '@app/utils/loaderSrcNextImage';
import Link from 'next/link';

type HomeProps = {
  pageData: any;
  articles: ArticleProps[];
};

const customImageContainerStyle = {
  width: '580px',
  height: '435px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export default function Home(props: HomeProps) {
  const articlesdata = get(props.articles, 'articles', []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="flex flex-wrap -mx-2">
        {articlesdata.map((article: ArticleProps, index) => (
          <div key={index} className="w-full sm:w-1/2 px-2 mb-4">
            <div style={customImageContainerStyle}>
              <Link href={article.slug ? article.slug : '/home'}>
                <Image
                  src={article.content?.image.desktop_image_path ?? ''}
                  priority={true}
                  loader={loaderProp}
                  width={0}
                  height={0}
                  layout="responsive"
                  alt={article.subtitle ?? 'UpDesign'}
                  unoptimized
                />
              </Link>
            </div>
            <Link href={article.slug ? article.slug : '/home'}>
              <h2 className="mainPage font-noto text-2xl">{article.title}</h2>
            </Link>
            <p className="mainPage font-noto text-xs">{article.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
