'use client';

import { genresAtom, searchInputAtom } from '@/states';
import { IPropsSearchBody, ISearchData } from '@/types/interface';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { ESearchType } from '@/types/enum';
import GridImgList from '../List/GridImgList';
import { Divider } from 'antd';
import { searchTypeList } from '@/constants';
import ContentsSearchResult from '@/containers/Main/ContentsSearchResult';
import NavBar from '../Nav/NavBar';

const SearchBody = ({
  movieGenres,
  tvGenres,
  getSearchResults,
}: IPropsSearchBody) => {
  /** useState */
  const [searchType, setSearchType] = useState(ESearchType.MOVIE.toString());
  const [contentsResults, setContentsResults] = useState<ISearchData[]>([]);

  /** useSetRecoilState */
  const [searchInputState, setSearchInputState] =
    useRecoilState(searchInputAtom);
  const setGenresAtom = useSetRecoilState(genresAtom);

  const { keyword } = searchInputState;

  const genresList = [
    { title: '영화 장르', genres: movieGenres },
    { title: 'TV 프로그램 장르', genres: tvGenres },
  ];

  /** useEffect */
  useEffect(() => {
    setSearchInputState({ isShow: true, keyword: '' });
    setGenresAtom([...movieGenres, ...tvGenres]);

    return () => {
      setSearchInputState({ isShow: false, keyword: '' });
    };
  }, []);

  useEffect(() => {
    getSearchData(searchType);
  }, [keyword]);

  const getSearchData = async (type: string) => {
    const results = await getSearchResults({
      search_type: type,
      keyword: keyword,
    });

    setContentsResults(results);
  };

  const onClickSearchType = (type: string) => {
    setSearchType(type);
    getSearchData(type);
  };

  return (
    <div className='text-white'>
      {keyword === '' ? (
        <GridImgList genresList={genresList} />
      ) : (
        <>
          <NavBar
            className=''
            list={searchTypeList}
            selectedId={searchType}
            onClick={onClickSearchType}
          />
          <Divider style={{ marginTop: '1px' }} className='bg-divider' />
          <ContentsSearchResult results={contentsResults} />
        </>
      )}
    </div>
  );
};
export default SearchBody;
