'use client';

import { tmdbImgUrl } from '@/constants';
import ContentsIntro from '../Contents/ContentsIntro';
import { IPropsPerson } from '@/types/interface';
import { useState } from 'react';
import { EContentsSplitType, EContentsType } from '@/types/enum';
import ContentsRelated from '../Contents/ContentsRelated';
import NavBar from '../Nav/NavBar';

const { MOVIE, TV } = EContentsSplitType;

const PersonBody = ({ searchResult, name, biography, data }: IPropsPerson) => {
  /** */
  const [splitType, setSplitType] = useState(MOVIE.toString());

  /** */
  const { movie, tv } = data;
  const personInfo = searchResult[0];
  const { known_for_department, profile_path } = personInfo;
  const list = [
    { id: MOVIE.toString(), name: '영화' },
    { id: TV.toString(), name: 'TV 프로그램' },
  ];

  /** */
  const onClick = (type: string) => {
    setSplitType(type);
  };

  return (
    <div className='text-white'>
      <ContentsIntro
        image={`${tmdbImgUrl}/${profile_path}`}
        image_size={{
          w: 200,
          h: 0,
        }}
        title={name}
        subTitle={known_for_department}
        overview={biography}
      />
      {/* <ContentsSplit list={list} curType={splitType} onClick={onClick} /> */}
      <NavBar
        className='flex justify-center mb-4'
        list={list}
        selectedId={splitType.toString()}
        onClick={onClick}
      />
      <ContentsRelated
        isTitle={false}
        type={
          splitType === MOVIE.toString()
            ? EContentsType.MOVIE
            : EContentsType.TV
        }
        results={splitType === MOVIE.toString() ? movie : tv}
      />
    </div>
  );
};

export default PersonBody;
