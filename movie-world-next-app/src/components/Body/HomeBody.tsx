'use client';

import { useEffect, useState } from 'react';
import {
  IHomeBody,
  IOnSlider,
  ISliderState,
  ITmdbContentsList,
} from '@/types/interface';
import Section from '../Slider';
import MainSlider from '../Slider/MainSlider';
import StaffMadesSlider from '../Slider/StaffMadesSlider';
import RankSlider from '../Slider/RankSlider';
import PersonSlider from '../Slider/PersonSlider';
import GenreSlider from '../Slider/GenreSlider';
import { EContentsType, ENavItemType, ESliderType } from '@/types/enum';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { genresAtom, sectionSliderAtom, selectedNavAtom } from '@/states';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const { MAIN_CONTENTS, STAFF_MADES, RANK, PERSON, DRAMA } = ESliderType;

const antIcon = <LoadingOutlined style={{ fontSize: 35 }} spin />;

const HomeBody = ({
  type,
  main,
  staffmades,
  genres,
  rank,
  person,
  discovers,
}: IHomeBody) => {
  /** useRecoil */
  const setGenresState = useSetRecoilState(genresAtom);
  const setSelectedNavState = useSetRecoilState(selectedNavAtom);
  const [sectionSliderState, setSectionSliderState] =
    useRecoilState(sectionSliderAtom);

  /** useState */
  const [isShowSpin, setIsShowSpin] = useState(true);
  const [sliderState, setSliderState] = useState<ISliderState>({});

  /** useEffect */
  useEffect(() => {
    const discoverObj: {
      [key: string]: { type: EContentsType; list: [] };
    } = {};

    discovers.forEach((list, i) => {
      const obj = genres[i];
      const key = ESliderType[obj.id];
      discoverObj[key] = { type: type, list: list.results };
    });

    setGenresState(genres);
    setSectionSliderState({
      ...sectionSliderState,
      main: { type: type, list: main },
      staffmades: { type: type, list: staffmades },
      person: { type: type, list: person },
      rank: { type: type, list: rank },
      ...discoverObj,
    });
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsShowSpin(false);
    }, 1500);

    type === EContentsType.MOVIE && setSelectedNavState(ENavItemType.MOVIE);
    type === EContentsType.TV && setSelectedNavState(ENavItemType.TV);

    return () => clearTimeout(timer);
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
  ];

  genres.forEach((info) => {
    sectionList.push({
      id: info.id,
      children: <GenreSlider genre={info.id} onSlider={onSlider} />,
    });
  });

  return (
    <div className='h-full'>
      {isShowSpin ? (
        <div className='w-full h-[67vh] flex items-center justify-center'>
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <>
          {sectionList.map((item, key) => (
            <Section
              key={key}
              children={item.children}
              slider={sliderState[item.id]}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default HomeBody;
