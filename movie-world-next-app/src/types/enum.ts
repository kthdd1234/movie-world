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

enum EListsType {
  /** */
  NOW_PLAYING = 'now_playing',
  /** */
  POPULAR = 'popular',
  /** */
  TOP_RATED = 'top_rated',
  /** */
  UPCOMING = 'upcoming',
  /** */
  NOLAN_MOVIES = 'nolan_movies',
}

enum EDirectionType {
  /** */
  LEFT = 'left',
  /** */
  RIGHT = 'right',
}

enum ESectionType {
  /** */
  MAIN_CONTENTS,
  /** */
  STAFF_MADES,
  /** */
  CONTENTS_TYPE,
  /** */
  TRENDING,
  /** */
  PERSON,
  /** */
  GENRE,
}

enum ETrendingType {
  /** */
  ALL = 'all',
  /** */
  MOVIE = 'movie',
  /** */
  PERSON = 'person',
  /** */
  TV = 'tv',
}

enum ETrendingDateType {
  /** */
  DAY = 'day',
  /** */
  WEEK = 'week',
}

enum EDiscoverType {
  /** */
  MOVIE = 'movie',
  /** */
  TV = 'tv',
}

enum EGenresType {
  /** */
  MOVIE = 'movie',
  /** */
  TV = 'tv',
}

export {
  EWeekGb,
  EMultiMovieYn,
  EBoxOfficeType,
  ENavItemType,
  EListsType,
  EDirectionType,
  ESectionType,
  ETrendingType,
  ETrendingDateType,
  EDiscoverType,
  EGenresType,
};
