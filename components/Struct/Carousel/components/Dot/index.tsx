import dotCurrentImage from '@app/public/assets/image-carrousel-active.svg';
import dotNextImage from '@app/public/assets/image-carrousel-inactive.svg';
import Image from 'next/image';

type DotProps = {
  selectedIndex: number;
  totalItems: number;
  onDotClick: (index: number) => void;
};

const Dot = ({ selectedIndex, totalItems, onDotClick }: DotProps) => {
  return (
    <div className="absolute bottom-[24px] right-[24px]">
      <div className="flex flex-row items-center space-x-2">
        {Array.from({ length: totalItems }).map((_, index) => (
          <Image
            key={index}
            quality="90"
            priority={true}
            src={index === selectedIndex ? dotCurrentImage : dotNextImage}
            width={10}
            height={10}
            className="cursor-pointer"
            alt={`Indicador de movimento do carrossel - ${index === selectedIndex ? 'imagem atual' : 'próxima imagem'}`}
            onClick={() => onDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dot;
