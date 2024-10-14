import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import Overlay from '../Overlay';
import logo from '@app/public/brand-updesign.svg';
import burgerIcon from '@app/public/assets/buger.svg';

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
  console.log(isMenuOpen);
  const path = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (path === '/') {
      e.preventDefault();
    }
  };

  return (
    <>
      <Link href="/" onClick={handleLogoClick}>
        <Image
          src={logo}
          quality="95"
          priority={true}
          width={0}
          height={0}
          alt="Logo Up Design Brasil"
          style={{
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            width: '72px'
          }}
        />
      </Link>
      <button
        onClick={toggleMenu}
        className="hover:opacity-45 duration-300 h-max rounded-[3px] flex flex-row justify-center items-center w-full max-w-[100px] max-h-[56px]"
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
      <Overlay isVisible={isMenuOpen} onClick={toggleMenu} />
      <SideMenu data={items} handleOpenMenu={toggleMenu} isOpen={isMenuOpen} />
    </>
  );
}
