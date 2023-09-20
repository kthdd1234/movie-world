import { EContentsType, ENavItemType } from '@/types/enum';
import { IGenreData, ISectionSliderState } from '@/types/interface';
import { atom } from 'recoil';

const { NONE } = EContentsType;

const initSectionSlider = {
  type: NONE,
  list: [],
};

const selectedNavAtom = atom<ENavItemType>({
  key: 'selectedNavAtom',
  default: ENavItemType.NONE,
});

const sectionSliderAtom = atom<ISectionSliderState>({
  key: 'sectionSliderAtom',
  default: {
    NONE: initSectionSlider,
    main: initSectionSlider,
    staffmades: initSectionSlider,
    person: initSectionSlider,
    rank: initSectionSlider,
    ACTION: initSectionSlider,
    ADVENTURE: initSectionSlider,
    ANIMATION: initSectionSlider,
    COMEDY: initSectionSlider,
    CRIME: initSectionSlider,
    DOCUMENTARY: initSectionSlider,
    DRAMA: initSectionSlider,
    FAMILY: initSectionSlider,
    FANTASY: initSectionSlider,
    HISTORY: initSectionSlider,
    HORROR: initSectionSlider,
    MUSIC: initSectionSlider,
    MYSTERY: initSectionSlider,
    ROMANCE: initSectionSlider,
    SF: initSectionSlider,
    THRILLER: initSectionSlider,
    WAR: initSectionSlider,
    WESTERN: initSectionSlider,
    KIDS: initSectionSlider,
    NEWS: initSectionSlider,
    REALITY: initSectionSlider,
    SOAP: initSectionSlider,
    TALK: initSectionSlider,
    WAR_POLITICS: initSectionSlider,
  },
});

const genresAtom = atom<IGenreData[]>({
  key: 'genresAtom',
  default: [],
});

const searchInputAtom = atom({
  key: 'searchInputAtom',
  default: {
    isShow: false,
    keyword: '',
  },
});

export { selectedNavAtom, genresAtom, sectionSliderAtom, searchInputAtom };
