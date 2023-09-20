import SearchBody from '@/components/Body/SearchBody';
import { EGenresType } from '@/types/enum';
import { fetchTmdbGenres } from '../api/tmdb';

const { MOVIE, TV } = EGenresType;

const SearchPage = async () => {
  const [fetchMovieGenres, fetchTVGenres] = [MOVIE, TV].map((type) =>
    fetchTmdbGenres({
      genres_type: type,
      query: { language: 'ko' },
    })
  );

  const [movieGenres, tvGenres] = await Promise.all([
    fetchMovieGenres,
    fetchTVGenres,
  ]);

  return <SearchBody />;
};

export default SearchPage;
