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

enum EContentsType {
  /** */
  MOVIE = 'movie',
  /** */
  TV = 'tv',
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

enum ESliderType {
  /** */
  MAIN_CONTENTS = 0,
  /** */
  STAFF_MADES = 1,
  /** */
  TRENDING = 2,
  /** */
  PERSON = 3,
  /** */
  ACTION = 28,
  /** */
  ADVENTURE = 12,
  /** */
  ANIMATION = 16,
  /** */
  COMEDY = 35,
  /** */
  CRIME = 80,
  /** */
  DOCUMENTARY = 99,
  /** */
  DRAMA = 18,
  /** */
  FAMILY = 10751,
  /** */
  FANTASY = 14,
  /** */
  HISTORY = 36,
  /** */
  HORROR = 27,
  /** */
  MUSIC = 10402,
  /** */
  MYSTERY = 9648,
  /** */
  ROMANCE = 10749,
  /** */
  SF = 878,
  /** */
  TV_MOVIE = 10770,
  /** */
  THRILLER = 53,
  /** */
  WAR = 10752,
  /** */
  WESTERN = 37,
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

enum EContentsSplitType {
  /** */
  CONTENTS_INFO,
  /** */
  RELATED_CONTENTS,
  /** */
  MOVIE,
  /** */
  TV,
}

enum ESearchType {
  /** */
  COLLECTION = 'collection',
  /** */
  COMPANY = 'company',
  /** */
  KEYWORD = 'keyword',
  /** */
  MOVIE = 'movie',
  /** */
  MULTI = 'multi',
  /** */
  PERSON = 'person',
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
  ESliderType,
  ETrendingType,
  ETrendingDateType,
  EDiscoverType,
  EGenresType,
  EContentsSplitType,
  EContentsType,
  ESearchType,
};
