'use client';

import { useEffect, useState } from 'react';
import { IMovieHomeBody, IOnSlider, ISliderState } from '@/types/interface';
import Section from '../Slider';
import MainSlider from '../Slider/MainSlider';
import StaffMadesSlider from '../Slider/StaffMadesSlider';
import RankSlider from '../Slider/RankSlider';
import { mainMovieList, staffMadesMovieList } from '@/constants';
import PersonSlider from '../Slider/PersonSlider';
import GenreSlider from '../Slider/GenreSlider';
import { EContentsType, ESliderType } from '@/types/enum';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { genresAtom, sectionSliderAtom } from '@/states';

const { MOVIE } = EContentsType;
const { MAIN_CONTENTS, STAFF_MADES, RANK, PERSON, SF } = ESliderType;

const MovieHomeBody = ({
  genres,
  rankMovies,
  persons,
  genreMovies,
}: IMovieHomeBody) => {
  /** useRecoil */
  const setGenresAtom = useSetRecoilState(genresAtom);
  const [sectionSliderState, setSectionSliderState] =
    useRecoilState(sectionSliderAtom);

  /** useState */
  const [sliderState, setSliderState] = useState<ISliderState>({});

  /** useEffect */
  useEffect(() => {
    console.log('상단', genres);
    setGenresAtom(genres);
    setSectionSliderState({
      ...sectionSliderState,
      main: { type: MOVIE, list: mainMovieList },
      staffmades: { type: MOVIE, list: staffMadesMovieList },
      person: { type: MOVIE, list: persons },
      rank: { type: MOVIE, list: rankMovies },
      SF: { type: MOVIE, list: genreMovies },
    });
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
      children: <MainSlider onSlider={onSlider} />,
    },
    {
      id: STAFF_MADES,
      children: <StaffMadesSlider onSlider={onSlider} />,
    },
    {
      id: RANK,
      children: <RankSlider onSlider={onSlider} />,
    },
    {
      id: PERSON,
      children: <PersonSlider onSlider={onSlider} />,
    },
    {
      id: SF,
      children: <GenreSlider genre={SF} onSlider={onSlider} />,
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
