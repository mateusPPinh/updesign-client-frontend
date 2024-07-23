import { ArticleProps, PageProps } from '@app/utils/shared-interfaces';
import get from 'lodash/get';
import Image from 'next/image';
import { loaderProp } from '@app/utils/loaderSrcNextImage';
import Link from 'next/link';

type HomeProps = {
  pageData: PageProps;
  articles: ArticleProps[];
};


export default function Home(props: HomeProps) {
  const articlesdata = get(props.articles, 'articles', []);
  console.log('articlesdata', articlesdata)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div id="projetos" className="flex flex-wrap -mx-2">
        {articlesdata.map((article: ArticleProps, index) => (
          <div key={index} className="w-full sm:w-1/2 px-2 mb-4">
            <div>
              <Link href={`/${article.editorial?.slug}/${article.slug}`}>
                <Image
                  src={article.content?.image.desktop_image_path ?? ''}
                  priority={true}
                  width={0}
                  height={0}
                  layout="responsive"
                  alt={article.subtitle ?? 'UpDesign'}
                  unoptimized
                  loader={loaderProp}
                  className='transform transition-transform duration-350 ease hover:scale-[1.015]'
                />
              </Link>
            </div>
            <Link href={`/${article.editorial?.slug}/${article.slug}`} className='hover:opacity-60 hover:transition-opacity'>
              <h2 className="mainPage font-noto text-2xl">{article.title}</h2>
            </Link>
            <p className="mainPage font-noto text-xs">{article.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
