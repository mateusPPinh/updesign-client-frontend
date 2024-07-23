import dynamic from 'next/dynamic';

const DynamicCarouselContainer = dynamic(() => import('./CarouselContainer'));

type CarrouselItems = { image_middle_desktop_path: string, image_mobile_path: string };
type CarrouselProps = { items: CarrouselItems[] }

export default function Carrousel({ items }: CarrouselProps) {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <DynamicCarouselContainer items={items} />
    </div>
  );
}
