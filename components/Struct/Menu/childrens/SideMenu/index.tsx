import Image from 'next/image';
import Link from 'next/link';

import menuFooter from '@app/mocks/menu-footer.json';

type SideMenuProps = {
  handleOpenMenu: () => void;
  isOpen: boolean;
  data: any;
};

export default function SideMenu({
  data,
  handleOpenMenu,
  isOpen,
}: SideMenuProps) {
  const menuClass = isOpen ? 'translate-x-0' : 'translate-x-full';
  // h-[calc(-136px_+_100%)] z-10
  const menuItems = Object.values(data);
  return (
    <div
      className={`fixed
      top-0
      right-0
      z-10
      max-w-sm
      w-full
      h-full
    bg-white
      transform ${menuClass}
      transition-transform
      duration-300
      ease-in-out
      flex
      items-end
      font-noto
      flex-col
      justify-between
      bg-blueDark
      px-10
      py-24
      `}
    >
      <div className="items-center flex flex-row justify-end">
        <button
          onClick={handleOpenMenu}
          className="flex flex-row items-center hover:opacity-45 duration-300 h-max bg-transparent border-none"
        >
          <p className="mr-2 uppercase text-white text-sm">Fechar</p>
          <Image
            src="/assets/close.svg"
            width={18}
            height={18}
            priority
            alt="Icone que indica o fechamento do Menu"
          />
        </button>
      </div>
      <div className="items-end flex flex-col justify-start">
        {menuItems.map((item: any) => (
          <Link href={item.href} key={item.title}>
            <h1 className="text-3xl text-white mb-10">{item.title}</h1>
          </Link>
        ))}
      </div>
      <div className="w-max items-start flex flex-row">
        {menuFooter.map((link) => (
          <div className="items-start flex flex-row ml-8 mb-0" key={link.name}>
            <Link href={link.url} target="_blank" rel="noopener noreferrer">
              <Image
                src={link.brand_path}
                width={20}
                height={20}
                alt={link.brand_alt}
                priority
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
