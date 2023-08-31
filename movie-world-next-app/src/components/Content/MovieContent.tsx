'use client';

import { useState } from 'react';
import { TSlider } from '@/types/type';
import { IMovieContent, IOnSlider } from '@/types/interface';
import Section from '../Section';
import MainContentsSection from '../Section/MainContentsSection';
import StaffMadesSection from '../Section/StaffMadesSection';
import TrendingSection from '../Section/TrendingSection';
import { mainMovieList, staffMadesMovieList } from '@/constants';
import PersonSection from '../Section/PersonSection';
import GenreSection from '../Section/GenreSection';
import { ESectionType } from '@/types/enum';

const { MAIN_CONTENTS, STAFF_MADES, TRENDING, PERSON, SF } = ESectionType;

const MovieContent = ({
  trendingMovies,
  trendingPersons,
  genreMovies,
}: IMovieContent) => {
  /** sliderState */
  const [sliderState, setSliderState] = useState<{ [key: string]: TSlider }>(
    {}
  );

  const onSlider = ({ sliderId, slider }: IOnSlider) => {
    if (sliderState[sliderId] === undefined) {
      sliderState[sliderId] = slider;
      setSliderState({ ...sliderState });
    }
  };

  const sectionList = [
    {
      id: MAIN_CONTENTS,
      children: (
        <MainContentsSection list={mainMovieList} onSlider={onSlider} />
      ),
    },
    {
      id: STAFF_MADES,
      children: (
        <StaffMadesSection list={staffMadesMovieList} onSlider={onSlider} />
      ),
    },
    {
      id: TRENDING,
      children: <TrendingSection list={trendingMovies} onSlider={onSlider} />,
    },
    {
      id: PERSON,
      children: <PersonSection list={trendingPersons} onSlider={onSlider} />,
    },
    {
      id: SF,
      children: <GenreSection list={genreMovies} onSlider={onSlider} />,
    },
  ];

  return (
    <div className='h-full'>
      {sectionList.map((item, key) => (
        <Section
          key={key}
          children={item.children}
          slider={sliderState[item.id]}
        />
      ))}
    </div>
  );
};

export default MovieContent;
