enum EBoxOfficeType {
  /** */
  DAILY = 'Daily',
  /** */
  WEEKLY = 'Weekly',
}

enum EWeekGb {
  /** */
  WEEKLY = 0,
  /** */
  WEEKEND = 1,
  /** */
  WEEKDAY = 2,
}

enum EMultiMovieYn {
  /** */
  DIVERSITY = 'Y',
  /** */
  COMMERCIAL = 'N',
}

enum EWebtoonServiceType {
  /** */
  NAVER = 'naver',
  /** */
  KAKAO = 'kakao',
  /** */
  KAKAOPAGE = 'kakaoPage',
}

enum EBookQueryType {
  /** */
  ITEMNEWALL = 'ItemNewAll',
  /** */
  ITEMNEWSPECIAL = 'ItemNewSpecial',
  /** */
  ITEMEDITORCHOICE = 'ItemEditorChoice',
  /** */
  BESTSELLER = 'Bestseller',
  /** */
  BLOGBEST = 'BlogBest',
}

enum EBookType {
  /** */
  LIST = 'ItemList',
  /** */
  SEARCH = 'ItemSearch',
}

export {
  EWeekGb,
  EMultiMovieYn,
  EBoxOfficeType,
  EWebtoonServiceType,
  EBookQueryType,
  EBookType,
};
