import Image from 'next/image';
import { loaderProp } from '@app/utils/loaderSrcNextImage';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function CarouselContainer(props: any) {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const carouselData = Object.values(props);
  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {carouselData.map((it: any, index) => (
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
