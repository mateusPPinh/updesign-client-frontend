import Image from 'next/image';
import { loaderProp } from '@app/utils/loaderSrcNextImage';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

type CarrouselItems = { image_middle_desktop_path: string, image_mobile_path: string };
type CarrouselContainerProps = { items: CarrouselItems[] }

export default function CarouselContainer({ items }: CarrouselContainerProps) {
  console.log("Carrousel Container:", items)
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {items.map((it: CarrouselItems, index) => (
          <div className="flex-none w-full h-full" key={index}>
            <Image
              src={it.image_middle_desktop_path}
              alt="Imagem pertecente aos projetos da UpDesign que montam o carousel"
              className="object-center object-cover pointer-events-none"
              priority={true}
              loader={loaderProp}
              width={0}
              height={0}
              style={{ width: '100%', height: 'calc(-70px + 100vh)' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
