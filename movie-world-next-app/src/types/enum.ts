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
  NONE = 'None',
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

enum EDirectionType {
  /** */
  LEFT = 'left',
  /** */
  RIGHT = 'right',
}

enum ESliderType {
  /** */
  NONE = 9999,
  /** */
  MAIN_CONTENTS = 0,
  /** */
  STAFF_MADES = 1,
  /** */
  RANK = 2,
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
  /** */
  ACTION_ADVENTURE = 10759,
  /** */
  KIDS = 10762,
  /** */
  NEWS = 10763,
  /** */
  REALITY = 10764,
  /** */
  SCI_FI_FANTASY = 10765,
  /** */
  SOAP = 10766,
  /** */
  TALK = 10767,
  /** */
  WAR_POLITICS = 10768,
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
  SEASON_INFO,
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

enum EListsType {
  /** */
  NOW_PLAYING = 'now_playing',
  /** */
  UPCOMING = 'upcoming',
  /** */
  AIRING_TODAY = 'airing_today',
  /** */
  ON_THE_AIR = 'on_the_air',
  /** */
  POPULAR = 'popular',
  /** */
  TOP_RATED = 'top_rated',
}

enum ETmdbPathType {
  /** */
  MOVIE = 'movie',
  /** */
  TV = 'tv',
  /** */
  TRENDING = 'trending',
  /** */
  DISCOVER = 'discover',
  /** */
  GENRE = 'genre',
  /** */
  SEARCH = 'search',
  /** */
  PERSON = 'person',
}

enum ISearchType {
  /** */
  MOVIE = 'movie',
  /** */
  TV = 'tv',
  /** */
  PERSON = 'perosn',
}

export {
  EWeekGb,
  EMultiMovieYn,
  EBoxOfficeType,
  ENavItemType,
  EDirectionType,
  ESliderType,
  ETrendingType,
  ETrendingDateType,
  EDiscoverType,
  EGenresType,
  EContentsSplitType,
  EContentsType,
  ESearchType,
  EListsType,
  ETmdbPathType,
  ISearchType,
};
