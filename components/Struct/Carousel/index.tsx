import dynamic from 'next/dynamic';

const DynamicCarouselContainer = dynamic(() => import('./CarouselContainer'));

export default function Carrousel(props: any) {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <DynamicCarouselContainer {...props} />
    </div>
  );
}
