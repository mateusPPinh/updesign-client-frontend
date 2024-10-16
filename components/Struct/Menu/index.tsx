'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const MenuBaseStruct = dynamic(() => import('./BaseStruct'));
import { Container } from './menu.responsive.styles';

type MenuItem = { title: string; href: string };
type MenuProps = { items: MenuItem[] };

export default function Menu({ items }: MenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <div className="menuBackgroundGradient px-10 flex h-full max-h-[120px] w-full justify-between items-center flex-row absolute z-10 top-0">
        <MenuBaseStruct
          items={items}
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
        />
      </div>
    </Container>
  );
}
