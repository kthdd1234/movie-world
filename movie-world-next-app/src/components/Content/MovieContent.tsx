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
import PersonSection from '../Section/PersonSection';

const { MAIN_CONTENTS, STAFF_MADES, TRENDING, PERSON } = ESectionType;

const MovieContent = ({ trendingMovies, trendingPersons }: IMovieContent) => {
  /** mainContentsSlider */
  const [mainContentsSlider, setMainContentsSlider] = useState<TSlider>(null);

  /** staffMadesSlider */
  const [staffMadesSlider, setStaffMadesSlider] = useState<TSlider>(null);

  /** trendingSlider */
  const [trendingSlider, setTrendingSlider] = useState<TSlider>(null);

  /** personSlider */
  const [personSlider, setPersonSlider] = useState<TSlider>(null);

  const onSlider = ({ sectionType, slider }: IOnSlider) => {
    switch (sectionType) {
      case MAIN_CONTENTS:
        setMainContentsSlider(slider);
        break;

      case STAFF_MADES:
        setStaffMadesSlider(slider);
        break;

      case TRENDING:
        setTrendingSlider(slider);
        break;

      case PERSON:
        setPersonSlider(slider);
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
        children={<TrendingSection list={trendingMovies} onSlider={onSlider} />}
      />
      <Section
        slider={personSlider}
        children={<PersonSection list={trendingPersons} onSlider={onSlider} />}
      />
      {/* <ContentsTypeSection /> */}
    </div>
  );
};

export default MovieContent;