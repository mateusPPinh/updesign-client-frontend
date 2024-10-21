import dynamic from 'next/dynamic';

const DynamicImageBackground = dynamic(() =>
  import('./ImageBackground').then((mod) => mod.default)
);

type PageMainImageItems = {
  image_desktop_path: string;
};
type HeaderImageProps = { items: PageMainImageItems[] };

export default function HeaderImage({ items }: HeaderImageProps) {
  console.log('props from header imagem', items);
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <DynamicImageBackground items={items} />
    </div>
  );
}
