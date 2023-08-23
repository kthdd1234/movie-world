'use client';

import { navContentsItems, navServiceItems } from '@/constants';
import { useEffect, useState } from 'react';
import { ENavItemType } from '@/types/enum';
import { useRouter } from 'next/navigation';
import NavColumnList from './NavColumnList';
import { INavItem } from '@/types/interface';

const Nav = () => {
  /** router */
  const router = useRouter();

  /** useSatte */
  const [navItem, setNavItem] = useState(ENavItemType.NONE);

  /** useEffect */
  useEffect(() => {
    setNavItem(ENavItemType.MOVIE);
  }, []);

  const onSelectedItem = (item: INavItem) => {
    router.push(item.path);
    setNavItem(item.type);
  };

  return (
    <nav className={`fixed left-0 z-20 h-screen pt-16 w-52  bg-[#141517]`}>
      <NavColumnList
        seletedItem={navItem}
        items={navContentsItems}
        onSelectedItem={onSelectedItem}
      />
      <NavColumnList
        seletedItem={navItem}
        items={navServiceItems}
        onSelectedItem={onSelectedItem}
      />
    </nav>
  );
};

export default Nav;
