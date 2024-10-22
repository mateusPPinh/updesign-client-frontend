import RenderImage from './RenderImage';

type PageMainImageItems = {
  image_desktop_path: string;
};
type PageImageProps = { items: PageMainImageItems[] };

export default function PageImage({ items }: PageImageProps) {
  return (
    <>
      <div className="w-full h-full bg-black bg-opacity-50 flex flex-col items-start justify-start fixed top-0">
        <RenderImage items={items} />
      </div>
    </>
  );
}
