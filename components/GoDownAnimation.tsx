import Image from 'next/image';
import arrowdown from '@app/public/assets/arrowDown.svg';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  id: string;
}

const GoDownAnimation = ({ children = 'PROJETOS', id }: Props) => {
  return (
    <a
      href={id}
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
        {children}
      </span>
    </a>
  );
};

export default GoDownAnimation;
