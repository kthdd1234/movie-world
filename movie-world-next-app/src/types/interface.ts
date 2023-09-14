import { LegacyRef, ReactNode } from 'react';
import {
  EBoxOfficeType,
  ETrendingType,
  EDirectionType,
  EMultiMovieYn,
  ENavItemType,
  ESliderType,
  EWeekGb,
  ETrendingDateType,
  EMovieListsType,
  EGenresType,
  EDiscoverType,
  EContentsType,
  ETVListsType,
  ETmdbPathType,
} from './enum';
import Slider from 'react-slick';
import { StaticImageData } from 'next/image';
import { TLanguage, TSlider } from './type';

export interface IGetFetch {
  url: string;
  query: Record<string, any>;
  token?: string;
}

export interface IPostFetch {
  url: string;
  query: Record<string, any>;
  body: any;
}

export interface IParamsKobisBoxOffice {
  boxOfficeType: EBoxOfficeType;
  query: {
    targetDt: string;
    multiMovieYn: EMultiMovieYn;
    weekGb?: EWeekGb;
  };
}

export interface IResposeKobisBoxOffice {
  boxOfficeResult: {
    boxofficeType: string;
    showRange: string;
    yearWeekTime: string;
    weeklyKobisBoxOffice: IBoxOfficeData[];
    dailyKobisBoxOffice: IBoxOfficeData[];
  };
}

export interface IParamsKmdbDetail {
  query: string;
  releaseDts: string;
}

export interface IResposeKmdbMovieDetail {
  Query: string;
  KMAQuery: string;
  TotalCount: number;
  Data: IKmdbMovieData[];
}

export interface IMainSlider {
  id: number;
  back_drop: string;
  logo_path: string;
  desc: string;
}

export interface IStaffmadeSlider {
  id: EMovieListsType | ETVListsType;
  title: string;
  sub_title: string;
  movie_titles: string;
  image: StaticImageData;
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

export interface IParamsTmdbLists {
  contents_type: string;
  lists_type: string;
  query: {
    language: TLanguage;
    page: number;
    region: string;
  };
}

export interface IResponseTmdbLists extends ITmdbContentsList {
  dates: {
    maximum: string;
    minumum: string;
  };
}

export interface ITmdbContentsList {
  page: number;
  results: ITmdbContentsData[];
  total_pages: number;
  total_results: number;
}

export interface ITmdbContentsData {
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
}

export interface IArrowButton {
  arrowRef: LegacyRef<HTMLDivElement>;
  direction: EDirectionType;
  onClick: (direction: EDirectionType) => void;
}

export interface IParamsTmdbImages {
  contents_type: string;
  movie_id: number;
  query: {
    include_image_language: string | null;
    language: TLanguage;
  };
}

export interface IResponseTmdbImages {
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

export interface IOnSlider {
  sliderId: number;
  slider: Slider;
}

export interface IPropsRootSlider {
  children: ReactNode;
  slider: Slider | null;
}

// export interface IPropsMainSlider extends IPropsOnSlider {
//   list: { id: number; back_drop: string; logo_path: string; desc: string }[];
// }

// export interface IPropsStaffMadesSlider extends IPropsOnSlider {
//   list: {
//     id: EMovieListsType;
//     title: string;
//     sub_title: string;
//     movie_titles: string;
//     image: StaticImageData;
//   }[];
// }

// export interface IPropsRankSlider extends IPropsOnSlider {
//   list: ITrendingData[];
// }

// export interface IPropsGenreSlider extends IPropsOnSlider {
//   list: ITmdbContentsData[];
// }

export interface IPropsOnSlider {
  genre?: ESliderType;
  onSlider: (args: IOnSlider) => void;
}

export interface IParamsTmdbTrending {
  trending_type: ETrendingType;
  time_window: ETrendingDateType;
  query: {
    language: TLanguage;
  };
}

export interface IResponceTmdbTrending {
  page: number;
  results: ITrendingData[];
  total_pages: number;
  total_results: number;
}

interface ITrendingData {
  adult: boolean;
  media_type: string;
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
  original_name: string;
  name: string;
  gender: number;
  known_for_department: string;
  profile_path: string;
  known_for: ITmdbContentsData[];
}

export interface IHomeBody extends IResponceTmdbGenres {
  main: IMainSlider[];
  staffmades: IStaffmadeSlider[];
  type: EContentsType;
  rank: ITrendingData[];
  person: ITrendingData[];
  discover: ITmdbContentsData[];
}

export interface IParamsTmdbDiscover {
  discover_type: EDiscoverType;
  query: {
    include_adult: boolean;
    language: TLanguage;
    page: number;
    with_genres?: number;
    with_people?: string;
  };
}

export interface IParamsTmdbGenres {
  genres_type: EGenresType;
  query: {
    language: TLanguage;
  };
}

export interface IResponceTmdbGenres {
  genres: IGenreData[];
}

export interface IGenreData {
  id: number;
  name: string;
}

export interface ISliderState {
  [key: string]: TSlider;
}

export interface IParamsTmdbDetail {
  contents_type: string;
  id: number;
  query: {
    append_to_response: string;
    language: TLanguage;
  };
}

export interface IResponceTmdbDetail {
  name: string;
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: IGenreData[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  videos: {
    results: IVideosResult[];
  };
  credits: {
    cast: ICreditsCast[];
    crew: {
      adult: boolean;
      gender: number;
      id: number;
      known_for_department: string;
      name: string;
      original_name: string;
      popularity: number;
      profile_path: string;
      credit_id: string;
      department: string;
      job: string;
    }[];
  };
  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
    vote_average: number;
  }[];
}

interface IVideosResult {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

interface ICreditsCast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: null;
}

export interface IReviewsResult {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string | null;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

export interface IParamsTmdbReviews {
  contents_type: string;
  movie_id: number;
  query: {
    language: TLanguage;
    page: number;
  };
}

export interface IResponceTmdbReviews {
  id: number;
  page: number;
  results: {
    author: string;
    author_details: {
      name: string;
      username: string;
      avatar_path: string | null;
      rating: number;
    };
    content: string;
    created_at: string;
    id: string;
    updated_at: string;
    url: string;
  }[];
  total_pages: number;
  total_results: number;
}

export interface IPropsContentsIntro {
  image: string | StaticImageData;
  image_size: { w: number; h: number };
  title: string;
  subTitle: string;
  overview: string;
}

export interface IPropsContentsDetail {
  vote_count: number;
  vote_average: number;
  popularity: number;
  videos_results: IVideosResult[];
  cast: ICreditsCast[];
  reviews_total: number;
  reviews_result: IReviewsResult[];
}

export interface IParamsTmdbSimilar {
  contents_type: string;
  movie_id: number;
  query: {
    language: TLanguage;
    page: number;
  };
}

export interface IResponceTmdbSimilar {
  page: number;
  results: ITmdbContentsData[];
  total_pages: number;
  total_results: number;
}

export interface IPropsContentsRelated {
  type: EContentsType;
  isTitle: boolean;
  results: ITmdbContentsData[];
}

export interface IContentsBody {
  type: string;
  detail: IResponceTmdbDetail;
  reviews?: IResponceTmdbReviews;
  similar?: IResponceTmdbSimilar;
}

export interface IPropsParamsId {
  params: { id: string };
}

export interface IPropsParamsList {
  params: { list: string[] };
}

export interface IParamsTmdbSearch {
  search_type: string;
  query: {
    query: string;
    include_adult: boolean;
    language: TLanguage;
    page: number;
    region: string;
  };
}

export interface IResponceTmdbSearch {
  page: number;
  results: ISearchData[];
  total_pages: number;
  total_results: number;
}

export interface ISearchData {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  known_for: ITmdbContentsData[];
}

export interface IParamsTmdbPerson {
  person_id: number;
  query: {
    append_to_response: string;
    language: TLanguage;
  };
}

export interface IResponceTmdbPerson {
  adult: boolean;
  also_known_as: [];
  biography: string;
  birthday: string | null;
  deathday: string | null;
  gender: number;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string | null;
  popularity: number;
  profile_path: string | null;
}

export interface IPropsPerson {
  searchResult: ISearchData[];
  name: string;
  biography: string;
  data: { movie: ITmdbContentsData[]; tv: ITmdbContentsData[] };
}

export interface IPropsSmallText {
  name: string;
  isPoint: boolean;
  isUnderline: boolean;
  link: string;
  onClick: (link: string) => void;
}

export interface ISectionSliderState {
  NONE: { type: EContentsType; list: {}[] };
  main: { type: EContentsType; list: IMainSlider[] };
  staffmades: { type: EContentsType; list: IStaffmadeSlider[] };
  person: { type: EContentsType; list: ITrendingData[] };
  rank: { type: EContentsType; list: ITrendingData[] };
  ACTION: { type: EContentsType; list: ITmdbContentsData[] };
  ADVENTURE: { type: EContentsType; list: ITmdbContentsData[] };
  ANIMATION: { type: EContentsType; list: ITmdbContentsData[] };
  COMEDY: { type: EContentsType; list: ITmdbContentsData[] };
  CRIME: { type: EContentsType; list: ITmdbContentsData[] };
  DOCUMENTARY: { type: EContentsType; list: ITmdbContentsData[] };
  DRAMA: { type: EContentsType; list: ITmdbContentsData[] };
  FAMILY: { type: EContentsType; list: ITmdbContentsData[] };
  FANTASY: { type: EContentsType; list: ITmdbContentsData[] };
  HISTORY: { type: EContentsType; list: ITmdbContentsData[] };
  HORROR: { type: EContentsType; list: ITmdbContentsData[] };
  MUSIC: { type: EContentsType; list: ITmdbContentsData[] };
  MYSTERY: { type: EContentsType; list: ITmdbContentsData[] };
  ROMANCE: { type: EContentsType; list: ITmdbContentsData[] };
  SF: { type: EContentsType; list: ITmdbContentsData[] };
  THRILLER: { type: EContentsType; list: ITmdbContentsData[] };
  WAR: { type: EContentsType; list: ITmdbContentsData[] };
  KIDS: { type: EContentsType; list: ITmdbContentsData[] };
  NEWS: { type: EContentsType; list: ITmdbContentsData[] };
  REALITY: { type: EContentsType; list: ITmdbContentsData[] };
  SOAP: { type: EContentsType; list: ITmdbContentsData[] };
  TALK: { type: EContentsType; list: ITmdbContentsData[] };
  WAR_POLITICS: { type: EContentsType; list: ITmdbContentsData[] };
  WESTERN: { type: EContentsType; list: ITmdbContentsData[] };
  [propsName: string]: any;
}
