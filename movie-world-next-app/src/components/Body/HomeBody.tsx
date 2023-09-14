'use client';

import { useEffect, useState } from 'react';
import { IHomeBody, IOnSlider, ISliderState } from '@/types/interface';
import Section from '../Slider';
import MainSlider from '../Slider/MainSlider';
import StaffMadesSlider from '../Slider/StaffMadesSlider';
import RankSlider from '../Slider/RankSlider';
import PersonSlider from '../Slider/PersonSlider';
import GenreSlider from '../Slider/GenreSlider';
import { ESliderType } from '@/types/enum';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { genresAtom, sectionSliderAtom } from '@/states';

const { MAIN_CONTENTS, STAFF_MADES, RANK, PERSON, DRAMA } = ESliderType;

const HomeBody = ({
  type,
  main,
  staffmades,
  genres,
  rank,
  person,
  discover,
}: IHomeBody) => {
  /** useRecoil */
  const setGenresAtom = useSetRecoilState(genresAtom);
  const [sectionSliderState, setSectionSliderState] =
    useRecoilState(sectionSliderAtom);

  /** useState */
  const [sliderState, setSliderState] = useState<ISliderState>({});

  /** useEffect */
  useEffect(() => {
    setGenresAtom(genres);
    setSectionSliderState({
      ...sectionSliderState,
      main: { type: type, list: main },
      staffmades: { type: type, list: staffmades },
      person: { type: type, list: person },
      rank: { type: type, list: rank },
      DRAMA: { type: type, list: discover },
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
      id: DRAMA,
      children: <GenreSlider genre={DRAMA} onSlider={onSlider} />,
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

export default HomeBody;
