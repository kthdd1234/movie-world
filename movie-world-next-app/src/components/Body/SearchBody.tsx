'use client';

import { searchInputAtom } from '@/states';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

const SearchBody = () => {
  /** useSetRecoilState */
  const [searchInputState, setSearchInputState] =
    useRecoilState(searchInputAtom);
  const { keyword } = searchInputState;

  /** useEffect */
  useEffect(() => {
    setSearchInputState({ isShow: true, keyword: '' });

    return () => {
      setSearchInputState({ isShow: false, keyword: '' });
    };
  }, []);

  useEffect(() => {
    console.log(keyword);
  }, [keyword]);

  return <>{keyword === '' ? <></> : <></>}</>;
};

export default SearchBody;
