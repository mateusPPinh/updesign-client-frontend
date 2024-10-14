import Image from 'next/image';
import { loaderProp } from '@app/utils/loaderSrcNextImage';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import arrowdown from '@app/public/assets/arrowDown.svg';

type CarrouselItems = {
  image_middle_desktop_path: string;
  image_mobile_path: string;
};
type CarrouselContainerProps = { items: CarrouselItems[] };

export default function CarouselContainer({ items }: CarrouselContainerProps) {
  console.log('Carrousel Container:', items);
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {items.map((it: CarrouselItems, index) => (
          <div className="flex-none w-full h-full" key={index}>
            <Image
              src={it.image_middle_desktop_path}
              alt="Imagem pertecente aos projetos da UpDesign que montam o carousel"
              className="bg-center object-cover pointer-events-none bg-cover"
              priority={true}
              loader={loaderProp}
              width={0}
              height={0}
              style={{ width: '100%', height: 'calc(-70px + 100vh)' }}
            />
          </div>
        ))}
      </div>
      <a
        href="#projetos"
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '40px',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'transform 0.3s'
        }}
      >
        <Image
          quality="85"
          priority={true}
          src={arrowdown}
          width={40}
          height={40}
          alt="Indicador de Navegação para Menu"
          className="bounceAnimation"
        />
        <span className="font-noto text-xs text-white font-bold capitalize leading-[110%]">
          PROJETOS
        </span>
      </a>
    </div>
  );
}
