'use client';

import { useEffect, useState } from 'react';
import { IMovieHomeBody, IOnSlider, ISliderState } from '@/types/interface';
import Section from '../Slider';
import MainContentsSlider from '../Slider/MainContentsSlider';
import StaffMadesSlider from '../Slider/StaffMadesSlider';
import TrendingSlider from '../Slider/TrendingSlider';
import { mainMovieList, staffMadesMovieList } from '@/constants';
import PersonSection from '../Slider/PersonSlider';
import GenreSlide from '../Slider/GenreSlider';
import { ESliderType } from '@/types/enum';
import { useSetRecoilState } from 'recoil';
import { movieGenresState } from '@/states/movie';

const { MAIN_CONTENTS, STAFF_MADES, TRENDING, PERSON, SF } = ESliderType;

const MovieHomeBody = ({
  genres,
  trendingMovies,
  trendingPersons,
  genreMovies,
}: IMovieHomeBody) => {
  /** useSetRecoilState */
  const setMovieGenresState = useSetRecoilState(movieGenresState);

  /** useState */
  const [sliderState, setSliderState] = useState<ISliderState>({});

  /** useEffect */
  useEffect(() => {
    setMovieGenresState(genres);
  }, []);

  const onSlider = ({ sliderId, slider }: IOnSlider) => {
    if (sliderState[sliderId] === undefined) {
      sliderState[sliderId] = slider;
      setSliderState({ ...sliderState });
    }
  };

  const sectionList = [
    {
      id: MAIN_CONTENTS,
      children: <MainContentsSlider list={mainMovieList} onSlider={onSlider} />,
    },
    {
      id: STAFF_MADES,
      children: (
        <StaffMadesSlider list={staffMadesMovieList} onSlider={onSlider} />
      ),
    },
    {
      id: TRENDING,
      children: <TrendingSlider list={trendingMovies} onSlider={onSlider} />,
    },
    {
      id: PERSON,
      children: <PersonSection list={trendingPersons} onSlider={onSlider} />,
    },
    {
      id: SF,
      children: <GenreSlide list={genreMovies} onSlider={onSlider} />,
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

export default MovieHomeBody;
