import {
  EBookQueryType,
  EBookType,
  EBoxOfficeType,
  EMultiMovieYn,
  EWebtoonServiceType,
  EWeekGb,
} from './enum';

export interface IGetFetch {
  url: string;
  params: Record<string, any>;
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

export interface IParamsMoveDetails {
  query: string;
  releaseDts: string;
}

export interface IResposeMovieDetails {
  Query: string;
  KMAQuery: string;
  TotalCount: number;
  Data: IMovieDetailData[];
}

interface IMovieDetailData {
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

export interface IParamsKoreaWebtoon {
  isSearch: boolean;
  params: {
    service?: EWebtoonServiceType;
    page?: number;
    perPage?: number;
    updateDay?: string;
    keyword?: string;
  };
}

export interface IResponceKoreaWebtoon {
  totalWebtoonCount: number;
  naverWebtoonCount: number;
  kakaoWebtoonCount: number;
  kakaoPageWebtoonCount: number;
  lastUpdate: string;
  updatedWebtoonCount: number;
  createdWebtoonCount: number;
  webtoons: IWebtoonData[];
}

interface IWebtoonData {
  _id: string;
  webtoonId: number;
  title: string;
  author: string;
  url: string;
  img: string;
  service: string;
  updateDays: string[];
  fanCount: number;
  additional: {
    new: boolean;
    rest: boolean;
    up: boolean;
    adult: boolean;
    singularityList: string[];
  };
  searchKeyword: string;
}

export interface IParamsBookItemList {
  bookType: EBookType;
  params: {
    QueryType?: EBookQueryType;
    Query?: string;
    Start?: number;
    MaxResults?: number;
    CategoryId?: number;
  };
}

export interface IResponceBookItemList {
  version: string;
  logo: string;
  title: string;
  link: string;
  pubDate: string;
  totalResults: number;
  startIndex: number;
  itemsPerPage: number;
  query: string;
  searchCategoryId: number;
  searchCategoryName: string;
  item: IBookItem[];
}

interface IBookItem {
  title: string;
  link: string;
  author: string;
  pubDate: string;
  description: string;
  isbn: string;
  isbn13: string;
  itemId: number;
  priceSales: number;
  priceStandard: number;
  mallType: string;
  stockStatus: string;
  mileage: number;
  cover: string;
  categoryId: number;
  categoryName: string;
  publisher: string;
  salesPoint: number;
  adult: boolean;
  fixedPrice: boolean;
  customerReviewRank: number;
  bestDuration: string;
  bestRank: number;
  subInfo: {};
}
