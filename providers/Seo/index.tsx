import Head from 'next/head';
import { ReactNode } from 'react';

interface Props {
  slugData?: any;
  children?: ReactNode;
  favico?: object;
  customPageTitle?: string;
}

const Seo = ({ children, slugData, favico, customPageTitle }: Props) => {
  if (!favico) {
    return null;
  }

  const objValues = Object.values(favico);
  const page = slugData?.[0];

  const canonicalUrlArticles =
    typeof window !== 'undefined'
      ? `${window.location.origin}/${slugData.editorial?.slug}/${slugData.slug}`
      : '';

  const canonicalUrlPageData =
    typeof window !== 'undefined'
      ? `${window.location.origin}/${page?.slug}/${page?.slug}`
      : '';

  return (
    <>
      <Head>
        {objValues.map((i, k) => (
          <link rel="shortcut icon" href={i} key={k} />
        ))}
        <title>
          {customPageTitle || page?.title || `Up Design - ${slugData.title}`}
        </title>
        <meta name="next-head-count" content="4" />
        <meta
          name="description"
          content={page?.meta_description || slugData.subtitle}
        />
        <meta name="title" content={slugData.title || ''} />
        {slugData.content && (
          <meta
            itemProp="image"
            content={slugData.content.image.desktop_image_path || ''}
          />
        )}
        <link
          rel="canonical"
          href={canonicalUrlPageData || canonicalUrlArticles}
        />
        <meta name="keywords" content={page?.meta_keywords || ''} />
      </Head>
      {children}
    </>
  );
};

export default Seo;
