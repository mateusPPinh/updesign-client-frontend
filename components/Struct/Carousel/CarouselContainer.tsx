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
    <div className="relative overflow-hidden" ref={emblaRef}>
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
      <a href="#projetos" style={{ 
          position: 'absolute', 
          bottom: '16px', 
          left: '16px', 
          color: '#fff', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          transition: 'transform 0.3s' 
        }} 
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} 
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="48" height="48" style={{ 
          filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))', 
          transition: 'filter 0.3s'
        }}>
          <path d="M6 9l6 6 6-6"/>
        </svg>
        <span style={{ 
          fontSize: '1rem', 
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
          transition: 'text-shadow 0.3s' 
        }}>PROJETOS</span>
      </a>
    </div>
  );
}
