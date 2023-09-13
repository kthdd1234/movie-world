'use client';

import { navContentsItems, navServiceItems } from '@/constants';
import { useEffect, useState } from 'react';
import { ENavItemType } from '@/types/enum';
import { useRouter } from 'next/navigation';
import NavColumnList from './NavColumnList';
import { INavItem } from '@/types/interface';
import { message } from 'antd';

const { SEARCH, EVALUATE, STORAGE } = ENavItemType;

const Nav = () => {
  /** useMessage */
  const [messageApi, contextHolder] = message.useMessage();

  /** useRouter */
  const router = useRouter();

  /** useSatte */
  const [navItem, setNavItem] = useState(ENavItemType.NONE);

  /** useEffect */
  useEffect(() => {
    setNavItem(ENavItemType.MOVIE);
  }, []);

  const onSelectedItem = (item: INavItem) => {
    const notDevelopPage = [SEARCH, EVALUATE, STORAGE];

    if (notDevelopPage.includes(item.type)) {
      messageApi.open({
        type: 'warning',
        content: '개발 준비 중입니다.',
      });
    } else {
      router.push(`/browse/${item.path}`);
      setNavItem(item.type);
    }
  };

  return (
    <nav className={`fixed left-0 z-20 h-screen pt-16 w-52 bg-black2`}>
      {contextHolder}
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
