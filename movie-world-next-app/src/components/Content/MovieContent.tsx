'use client';

import { ESectionType } from '@/types/enum';
import { useState } from 'react';
import { TSlider } from '@/types/type';
import { IMovieContent, IOnSlider } from '@/types/interface';
import Section from '../Section';
import MainContentsSection from '../Section/MainContentsSection';
import StaffMadesSection from '../Section/StaffMadesSection';
import TrendingSection from '../Section/TrendingSection';
import ContentsTypeSection from '../Section/ContentsTypeSection';
import { mainMovieList, staffMadesMovieList } from '@/constants';

const MovieContent = ({ trendingList }: IMovieContent) => {
  /** mainContentsSlider */
  const [mainContentsSlider, setMainContentsSlider] = useState<TSlider>(null);

  /** staffMadesSlider */
  const [staffMadesSlider, setStaffMadesSlider] = useState<TSlider>(null);

  /** trendingSlider */
  const [trendingSlider, setTrendingSlider] = useState<TSlider>(null);

  const onSlider = ({ sectionType, slider }: IOnSlider) => {
    switch (sectionType) {
      case ESectionType.MAIN_CONTENTS:
        setMainContentsSlider(slider);
        break;

      case ESectionType.STAFF_MADES:
        setStaffMadesSlider(slider);
        break;

      case ESectionType.TRENDING:
        setTrendingSlider(slider);
        break;

      default:
        break;
    }
  };

  return (
    <div className='h-full'>
      <Section
        slider={mainContentsSlider}
        children={
          <MainContentsSection list={mainMovieList} onSlider={onSlider} />
        }
      />
      <Section
        slider={staffMadesSlider}
        children={
          <StaffMadesSection list={staffMadesMovieList} onSlider={onSlider} />
        }
      />
      <Section
        slider={trendingSlider}
        children={<TrendingSection list={trendingList} onSlider={onSlider} />}
      />
      {/* <ContentsTypeSection /> */}
    </div>
  );
};

export default MovieContent;
