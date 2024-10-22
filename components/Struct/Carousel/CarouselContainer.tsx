import Image from 'next/image';
import { loaderProp } from '@app/utils/loaderSrcNextImage';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import GoDownAnimation from '@app/components/GoDownAnimation';
import Dot from './components/Dot';
import { useState, useEffect, useCallback } from 'react';
import {
  CarrouselContainerProps,
  CarrouselItems
} from '@app/utils/shared-types';

export default function CarouselContainer({ items }: CarrouselContainerProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!emblaApi) return;
      if (event.key === 'ArrowRight') emblaApi.scrollNext();
      if (event.key === 'ArrowLeft') emblaApi.scrollPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [emblaApi]);

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex flex-nowrap">
        {items.map((it: CarrouselItems, index) => (
          <div key={index} className="flex-none w-full h-full">
            <div className="flex-none w-full h-full">
              <Image
                src={it.image_middle_desktop_path}
                alt="Imagem pertencente aos projetos da UpDesign que montam o carousel"
                className="bg-center object-cover pointer-events-none bg-cover"
                priority={true}
                loader={loaderProp}
                width={0}
                height={0}
                style={{ width: '100%', height: 'calc(-70px + 100vh)' }}
              />
            </div>
          </div>
        ))}
      </div>
      <GoDownAnimation id="#projetos">PROJETOS</GoDownAnimation>
      <Dot
        selectedIndex={selectedIndex}
        totalItems={items.length}
        onDotClick={(index) => emblaApi?.scrollTo(index)}
      />
    </div>
  );
}
