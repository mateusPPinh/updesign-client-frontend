import dynamic from 'next/dynamic';
import { useState } from 'react';
const MenuBaseStruct = dynamic(() => import('./BaseStruct'));

type MenuItem = { title: string, href: string };
type MenuProps = { items: MenuItem[] }

export default function Menu({ items }: MenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="menuBackgroundGradient px-10 flex h-32 w-[calc(100%-32px)] justify-between items-center flex-row absolute z-10">
      <MenuBaseStruct
        items={items}
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
      />
    </div>
  );
}
