'use client';

import { tmdbImgUrl } from '@/constants';
import ContentsIntro from '../Contents/ContentsIntro';
import { IPropsPerson } from '@/types/interface';
import ContentsSplit from '../Contents/ContentsSplit';
import { useState } from 'react';
import { EContentsSplitType, EContentsType } from '@/types/enum';
import ContentsRelated from '../Contents/ContentsRelated';

const { MOVIE, TV } = EContentsSplitType;

const PersonBody = ({ searchResult, name, biography, data }: IPropsPerson) => {
  /** */
  const [splitType, setSplitType] = useState(MOVIE);

  /** */
  const { movie, tv } = data;
  const personInfo = searchResult[0];
  const { known_for_department, profile_path } = personInfo;
  const list = [
    { id: MOVIE, name: '영화' },
    { id: TV, name: 'TV 프로그램' },
  ];

  /** */
  const onClick = (type: EContentsSplitType) => {
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
      <ContentsSplit list={list} curType={splitType} onClick={onClick} />
      <ContentsRelated
        isTitle={false}
        type={splitType === MOVIE ? EContentsType.MOVIE : EContentsType.TV}
        results={splitType === MOVIE ? movie : tv}
      />
    </div>
  );
};

export default PersonBody;
