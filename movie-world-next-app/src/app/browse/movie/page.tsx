import {
  ETrendingType,
  ETrendingDateType,
  EGenresType,
  EDiscoverType,
  ESliderType,
  EContentsType,
} from '@/types/enum';
import HomeBody from '@/components/Body/HomeBody';

import { mainMovieList, staffMadesMovieList } from '@/constants';
import {
  fetchTmdbTrending,
  fetchTmdbGenres,
  fetchTmdbDiscover,
} from '@/app/api/tmdb/route';

const { MOVIE, PERSON } = ETrendingType;
const { WEEK } = ETrendingDateType;

const BrowseMovie = async () => {
  const { results: rank } = await fetchTmdbTrending({
    trending_type: MOVIE,
    time_window: WEEK,
    query: { language: 'ko' },
  });

  const { results: persons } = await fetchTmdbTrending({
    trending_type: PERSON,
    time_window: WEEK,
    query: { language: 'ko' },
  });

  const { genres } = await fetchTmdbGenres({
    genres_type: EGenresType.MOVIE,
    query: { language: 'ko' },
  });

  const { results: discover } = await fetchTmdbDiscover({
    discover_type: EDiscoverType.MOVIE,
    query: {
      include_adult: false,
      language: 'ko',
      page: 1,
      with_genres: ESliderType.DRAMA,
    },
  });

  //

  return (
    <HomeBody
      type={EContentsType.MOVIE}
      main={mainMovieList}
      staffmades={staffMadesMovieList}
      genres={genres}
      rank={rank}
      person={persons}
      discover={discover}
    />
  );
};

export default BrowseMovie;
