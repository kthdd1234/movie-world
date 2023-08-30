import { tmdbBaseUrl } from '@/constants';
import {
  IParamsTmdbTrending,
  IResponceTmdbTrending,
  IParamsTmdbDiscover,
  ITmdbContentsList,
  IParamsTmdbGenres,
  IResponceTmdbGenres,
} from '@/types/interface';
import { getFetch } from '..';

/** tmdbTrendingUrl */
const tmdbTrendingUrl = `${tmdbBaseUrl}/trending`;

/** tmdbDiscoverUrl */
const tmdbDiscoverUrl = `${tmdbBaseUrl}/discover`;

/** tmdbGenreUrl */
const tmdbGenreUrl = `${tmdbBaseUrl}/genre`;

/** API KEYS */
const { NEXT_PUBLIC_TMDB_ACCESS_TOKEN } = process.env;

const fetchTmdbTrending = async ({
  trending_type,
  time_window,
  query,
}: IParamsTmdbTrending) => {
  const data: IResponceTmdbTrending = await getFetch({
    url: `${tmdbTrendingUrl}/${trending_type}/${time_window}`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data;
};

const fetchTmdbGenres = async ({ genres_type, query }: IParamsTmdbGenres) => {
  const data: IResponceTmdbGenres = await getFetch({
    url: `${tmdbGenreUrl}/${genres_type}/list`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data;
};

const fetchTmdbDiscover = async ({
  discover_type,
  query,
}: IParamsTmdbDiscover) => {
  const data: ITmdbContentsList = await getFetch({
    url: `${tmdbDiscoverUrl}/${discover_type}?`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data;
};

export { fetchTmdbTrending, fetchTmdbDiscover, fetchTmdbGenres };
