import SearchBody from '@/components/Body/SearchBody';
import { EGenresType, ESearchType } from '@/types/enum';
import { fetchTmdbGenres, fetchTmdbSearch } from '../api/tmdb';
import { IParamsSearch } from '@/types/interface';

const { MOVIE, TV } = EGenresType;

const SearchPage = async () => {
  /** */
  const getSearchResults = async ({ search_type, keyword }: IParamsSearch) => {
    'use server';
    const { results } = await fetchTmdbSearch({
      search_type: search_type,
      query: {
        query: keyword,
        include_adult: false,
        language: 'ko',
        page: 1,
        region: '',
      },
    });

    return results;
  };

  /** */
  const [fetchMovieGenres, fetchTVGenres] = [MOVIE, TV].map((type) =>
    fetchTmdbGenres({
      genres_type: type,
      query: { language: 'ko' },
    })
  );

  /** */
  const [movieGenres, tvGenres] = await Promise.all([
    fetchMovieGenres,
    fetchTVGenres,
  ]);

  return (
    <SearchBody
      movieGenres={movieGenres.genres}
      tvGenres={tvGenres.genres}
      getSearchResults={getSearchResults}
    />
  );
};

export default SearchPage;
