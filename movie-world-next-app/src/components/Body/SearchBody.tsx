'use client';

import { searchInputAtom } from '@/states';
import { IPropsSearchBody } from '@/types/interface';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { ESearchType } from '@/types/enum';
import GridImgList from '../List/GridImgList';

const SearchBody = ({
  movieGenres,
  tvGenres,
  getSearchResults,
}: IPropsSearchBody) => {
  /** useSetRecoilState */
  const [searchInputState, setSearchInputState] =
    useRecoilState(searchInputAtom);
  const { keyword } = searchInputState;

  const genresList = [
    { title: '영화 장르', genres: movieGenres },
    { title: 'TV 프로그램 장르', genres: tvGenres },
  ];

  /** useEffect */
  useEffect(() => {
    setSearchInputState({ isShow: true, keyword: '' });

    return () => {
      setSearchInputState({ isShow: false, keyword: '' });
    };
  }, []);

  useEffect(() => {
    const get = async () => {
      const data = await getSearchResults({
        search_type: ESearchType.MOVIE,
        keyword: keyword,
      });

      console.log(data);
    };

    get();
  }, [keyword]);

  return (
    <div className='text-white'>
      {keyword === '' ? (
        <GridImgList genresList={genresList} />
      ) : (
        <>검색 중..</>
      )}
    </div>
  );
};
// grid grid-cols-8 gap-4
// strArray[Math.floor(Math.random() * strArray.length)];
export default SearchBody;
