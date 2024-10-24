'use client';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import Overlay from '../Overlay';
import logo from '@app/public/brand-updesign.svg';
import burgerIcon from '@app/public/assets/buger.svg';
import {
  ImageResponsiveContainer,
  BurgerMenuResponsiveContainer
} from './menu.responsive.styles';

const SideMenu = dynamic(() => import('./childrens/SideMenu'));
type MenuItem = { title: string; href: string };

type MenuBaseStructProps = {
  toggleMenu: () => void;
  isMenuOpen: boolean;
  items: MenuItem[];
};

export default function MenuBaseStruct({
  toggleMenu,
  isMenuOpen,
  items
}: MenuBaseStructProps) {
  const path = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (path === '/') {
      e.preventDefault();
    }
  };

  return (
    <>
      <ImageResponsiveContainer>
        <Link href="/" onClick={handleLogoClick}>
          <Image
            src={logo}
            quality="95"
            priority={true}
            width={0}
            height={0}
            className="xl:w-[72px] xl1:w-[72px] xl:h-[77.38px]"
            alt="Logo Up Design Brasil"
            style={{
              backgroundPosition: 'center center',
              backgroundSize: 'cover'
            }}
          />
        </Link>
      </ImageResponsiveContainer>
      <BurgerMenuResponsiveContainer>
        <button
          onClick={toggleMenu}
          className="hover:opacity-45 duration-700 h-max rounded-[3px] flex flex-row justify-center items-center w-full max-w-[100px] max-h-[56px]"
        >
          <p className="mr-2 text-[12px] text-white font-noto mt-0 font-bold">
            MENU
          </p>
          <Image
            quality="85"
            priority={true}
            src={burgerIcon}
            width={56}
            height={0}
            alt="Indicador de Navegação para Menu"
            className="text-white"
          />
        </button>
      </BurgerMenuResponsiveContainer>
      <Overlay isVisible={isMenuOpen} onClick={toggleMenu} />
      <SideMenu data={items} handleOpenMenu={toggleMenu} isOpen={isMenuOpen} />
    </>
  );
}
