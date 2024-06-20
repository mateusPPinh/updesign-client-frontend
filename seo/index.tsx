import { Props } from './types';

export default function SeoContainer({ createSlug, children }: Props) {
  console.log({createSlug, children})
  const page = createSlug?.[0];
  return (
    <>
      <title>{page?.title}</title>
      <meta name="description" content={page?.metaDescription} />
      <meta name="keywords" content={page?.metaKeywords} />
      {children}
    </>
  );
}
