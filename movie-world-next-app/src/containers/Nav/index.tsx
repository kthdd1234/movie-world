'use client';

import { navContentsItems, navServiceItems } from '@/constants';
import { useEffect } from 'react';
import { ENavItemType } from '@/types/enum';
// import { useRouter } from 'next/navigation';
import { INavItem } from '@/types/interface';
import { message } from 'antd';
import { useSetRecoilState } from 'recoil';
import { selectedNavAtom } from '@/states';
import ColumnList from '@/components/Nav/ColumnList';
import { useRouter } from 'next/navigation';

const { SEARCH, EVALUATE, STORAGE } = ENavItemType;

const Nav = () => {
  /** useRouter */
  const router = useRouter();

  /** useMessage */
  const [messageApi, contextHolder] = message.useMessage();

  /**  useSetRecoilState */
  const setSelectedNavState = useSetRecoilState(selectedNavAtom);

  const onSelectedItem = (item: INavItem) => {
    const notDevelopPage = [SEARCH, EVALUATE, STORAGE];

    if (notDevelopPage.includes(item.type)) {
      messageApi.open({
        type: 'warning',
        content: '개발 준비 중입니다.',
      });
    } else {
      setSelectedNavState(item.type);
    }
  };

  useEffect(() => {
    const pathname = window.location.pathname;

    if (pathname === '/browse/movie') {
      setSelectedNavState(ENavItemType.MOVIE);
    } else if (pathname === '/browse/tv') {
      setSelectedNavState(ENavItemType.TV);
    } else {
      setSelectedNavState(ENavItemType.NONE);
    }
  }, []);

  return (
    <nav className={`fixed left-0 z-20 h-screen pt-16 w-52 bg-black2`}>
      {contextHolder}
      <ColumnList items={navContentsItems} onSelectedItem={onSelectedItem} />
      <ColumnList items={navServiceItems} onSelectedItem={onSelectedItem} />
    </nav>
  );
};

export default Nav;
