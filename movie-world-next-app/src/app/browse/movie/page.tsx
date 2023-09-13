import {
  ETrendingType,
  ETrendingDateType,
  EGenresType,
  EDiscoverType,
} from '@/types/enum';
import MovieHomeBody from '@/components/Body/MovieHomeBody';
import {
  fetchTmdbDiscover,
  fetchTmdbGenres,
  fetchTmdbTrending,
} from '@/api/contents';

const BrowseMovie = async () => {
  const { results: rankMovies } = await fetchTmdbTrending({
    trending_type: ETrendingType.MOVIE,
    time_window: ETrendingDateType.WEEK,
    query: { language: 'ko' },
  });

  const { results: persons } = await fetchTmdbTrending({
    trending_type: ETrendingType.PERSON,
    time_window: ETrendingDateType.WEEK,
    query: { language: 'ko' },
  });

  const { genres } = await fetchTmdbGenres({
    genres_type: EGenresType.MOVIE,
    query: { language: 'ko' },
  });

  const { results } = await fetchTmdbDiscover({
    discover_type: EDiscoverType.MOVIE,
    query: {
      include_adult: true,
      language: 'ko',
      page: 1,
      with_genres: 878,
    },
  });

  // console.log(results);

  // getKmdbMovieList();
  // getTmdbMovieLists();
  // getTmdbMovieImages();

  return (
    <MovieHomeBody
      genres={genres}
      rankMovies={rankMovies}
      persons={persons}
      genreMovies={results}
    />
  );
};

export default BrowseMovie;
