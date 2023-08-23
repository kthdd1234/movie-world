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

enum ENavItemType {
  /** */
  NONE = 'NONE',
  /** */
  MOVIE = 'MOVIE',
  /** */
  TV = 'TV',
  /** */
  SEARCH = 'SEARCH',
  /** */
  EVALUATE = 'EVALUATE',
  /** */
  STORAGE = 'STORAGE',
}

enum EMovieListsType {
  /** */
  NOW_PLAYING = '/now_playing',
  /** */
  POPULAR = '/popular',
  /** */
  TOP_RATED = '/top_rated',
  /** */
  UPCOMING = '/upcoming',
}

export {
  EWeekGb,
  EMultiMovieYn,
  EBoxOfficeType,
  ENavItemType,
  EMovieListsType,
};
