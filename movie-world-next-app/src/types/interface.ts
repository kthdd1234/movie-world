import { LegacyRef } from 'react';
import {
  EBoxOfficeType,
  EDirectionType,
  EMovieListsType,
  EMultiMovieYn,
  ENavItemType,
  EWeekGb,
} from './enum';

export interface IGetFetch {
  url: string;
  params: Record<string, any>;
  token?: string;
}

export interface IPostFetch {
  url: string;
  params: Record<string, any>;
  body: any;
}

export interface IParamsBoxOfficeList {
  boxOfficeType: EBoxOfficeType;
  params: {
    targetDt: string;
    multiMovieYn: EMultiMovieYn;
    weekGb?: EWeekGb;
  };
}

export interface IResposeBoxOfficeList {
  boxOfficeResult: {
    boxofficeType: string;
    showRange: string;
    yearWeekTime: string;
    weeklyBoxOfficeList: IBoxOfficeData[];
    dailyBoxOfficeList: IBoxOfficeData[];
  };
}

export interface IParamsKmdbMoveDetail {
  query: string;
  releaseDts: string;
}

export interface IResposeKmdbMovieDetail {
  Query: string;
  KMAQuery: string;
  TotalCount: number;
  Data: IKmdbMovieData[];
}

interface IKmdbMovieData {
  CollName: string;
  TotalCount: number;
  Count: number;
  Result: [
    {
      DOCID: string;
      movieId: string;
      movieSeq: string;
      title: string;
      titleEng: string;
      titleOrg: string;
      titleEtc: string;
      prodYear: string;
      directors: {
        director: [
          {
            directorNm: string;
            directorEnNm: string;
            directorId: string;
          }
        ];
      };
      actors: {
        actor: [
          {
            actorNm: string;
            actorEnNm: string;
            actorId: string;
          }
        ];
      };
      nation: string;
      company: string;
      plots: {
        plot: [
          {
            plotLang: string;
            plotText: string;
          }
        ];
      };
      runtime: string;
      rating: string;
      genre: string;
      kmdbUrl: string;
      type: string;
      use: string;
      episodes: string;
      ratedYn: string;
      repRatDate: string;
      repRlsDate: string;
      ratings: {
        rating: [
          {
            ratingMain: string;
            ratingDate: string;
            ratingNo: string;
            ratingGrade: string;
            releaseDate: string;
            runtime: string;
          }
        ];
      };
      keywords: string;
      posters: string;
      stlls: string;
      staffs: {
        staff: [
          {
            staffNm: string;
            staffEnNm: string;
            staffRoleGroup: string;
            staffRole: string;
            staffEtc: string;
            staffId: string;
          }
        ];
      };
      vods: {
        vod: [
          {
            vodClass: string;
            vodUrl: string;
          }
        ];
      };
      openThtr: string;
      stat: [
        {
          screenArea: string;
          screenCnt: string;
          salesAcc: string;
          audiAcc: string;
          statSouce: string;
          statDate: string;
        }
      ];
      screenArea: string;
      screenCnt: string;
      salesAcc: string;
      audiAcc: string;
      statSouce: string;
      statDate: string;
      themeSong: string;
      soundtrack: string;
      fLocation: string;
      Awards1: string;
      Awards2: string;
      regDate: string;
      modDate: string;
      Codes: {
        Code: [
          {
            CodeNm: string;
            CodeNo: string;
          }
        ];
      };
      CommCodes: {
        CommCode: [
          {
            CodeNm: string;
            CodeNo: string;
          }
        ];
      };
      ALIAS: string;
    }
  ];
}

interface IBoxOfficeData {
  rnum: string;
  rank: string;
  rankInten: string;
  rankOldAndNew: string;
  movieCd: string;
  movieNm: string;
  openDt: string;
  salesAmt: string;
  salesShare: string;
  salesInten: string;
  salesChange: string;
  salesAcc: string;
  audiCnt: string;
  audiInten: string;
  audiChange: string;
  audiAcc: string;
  scrnCnt: string;
  showCnt: string;
}

export interface INavItem {
  icon: JSX.Element;
  name: string;
  type: ENavItemType;
  path: string;
}

export interface INavColumnList {
  seletedItem: ENavItemType;
  items: INavItem[];
  onSelectedItem: (item: INavItem) => void;
}

export interface IParamsTmdbMovieLists {
  list_type: EMovieListsType;
  query: {
    language: string;
    page: number;
    region: string;
  };
}

export interface IResponseTmdbMovieLists {
  dates: {
    maximum: string;
    minumum: string;
  };
  page: number;
  results: {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
  total_pages: number;
  total_results: number;
}

export interface IArrowButton {
  arrowRef: LegacyRef<HTMLDivElement>;
  direction: EDirectionType;
  onClick: (direction: EDirectionType) => void;
}

export interface IParamsTmdbMovieImages {
  movie_id: number;
  query: {
    include_image_language: string | null;
    language: string;
  };
}

export interface IResponseTmdbMovieImages {
  backdrops: ITmdbMovieImage[];
  id: number;
  logos: ITmdbMovieImage[];
  posters: ITmdbMovieImage[];
}

export interface ITmdbMovieImage {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}
