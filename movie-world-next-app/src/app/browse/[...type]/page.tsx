import HomeBody from '@/components/Body/HomeBody';
import {
  mainMovieList,
  mainTVList,
  staffMadesMovieList,
  staffMadesTVList,
} from '@/constants';
import {
  EContentsType,
  EDiscoverType,
  EGenresType,
  ETrendingDateType,
  ETrendingType,
} from '@/types/enum';
import {
  fetchTmdbTrending,
  fetchTmdbGenres,
  fetchTmdbDiscover,
} from '../../api/tmdb';

const { MOVIE, TV, PERSON } = ETrendingType;
const { WEEK } = ETrendingDateType;

const Page = async ({ params }: { params: { type: string[] } }) => {
  /** params */
  const [type] = params.type;
  const isMovieType = type === 'movie';

  const { results: rank } = await fetchTmdbTrending({
    trending_type: isMovieType ? MOVIE : TV,
    time_window: WEEK,
    query: { language: 'ko' },
  });

  const { results: persons } = await fetchTmdbTrending({
    trending_type: PERSON,
    time_window: WEEK,
    query: { language: 'ko' },
  });

  const { genres } = await fetchTmdbGenres({
    genres_type: isMovieType ? EGenresType.MOVIE : EGenresType.TV,
    query: { language: 'ko' },
  });

  const fetchGenreList = genres.map((info) => {
    return fetchTmdbDiscover({
      discover_type: isMovieType ? EDiscoverType.MOVIE : EDiscoverType.TV,
      query: {
        include_adult: false,
        language: 'ko',
        page: 1,
        with_genres: info.id,
      },
    });
  });

  const discovers = await Promise.all(fetchGenreList);

  return (
    <HomeBody
      type={isMovieType ? EContentsType.MOVIE : EContentsType.TV}
      main={isMovieType ? mainMovieList : mainTVList}
      staffmades={isMovieType ? staffMadesMovieList : staffMadesTVList}
      rank={rank}
      person={persons}
      genres={genres}
      discovers={discovers}
    />
  );
};

export default Page;
