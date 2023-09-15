import { tmdbBaseUrl } from '@/constants';
import {
  IParamsTmdbTrending,
  IResponceTmdbTrending,
  IParamsTmdbDiscover,
  ITmdbContentsList,
  IParamsTmdbGenres,
  IResponceTmdbGenres,
  IParamsTmdbSearch,
  IResponceTmdbSearch,
  IParamsTmdbPerson,
  IResponceTmdbPerson,
  IParamsTmdbDetail,
  IResponceTmdbDetail,
  IParamsTmdbLists,
  IResponseTmdbLists,
  IParamsTmdbSimilar,
  IParamsTmdbReviews,
  IResponceTmdbSimilar,
  IResponceTmdbReviews,
  IParamsTmdbImages,
  IResponseTmdbImages,
  IParamsTmdbTVSeason,
  IResponseTmdbTVSeason,
} from '@/types/interface';
import { ETmdbPathType } from '@/types/enum';
import { getFetch } from '@/app/api/route';

/** ETmdbPathType */
const { TRENDING, DISCOVER, GENRE, SEARCH, PERSON } = ETmdbPathType;

/** API KEYS */
const { NEXT_PUBLIC_TMDB_ACCESS_TOKEN } = process.env;

const fetchTmdbTrending = async ({
  trending_type,
  time_window,
  query,
}: IParamsTmdbTrending) => {
  const data: IResponceTmdbTrending = await getFetch({
    url: `${tmdbBaseUrl}/${TRENDING}/${trending_type}/${time_window}`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data;
};

const fetchTmdbGenres = async ({ genres_type, query }: IParamsTmdbGenres) => {
  const data: IResponceTmdbGenres = await getFetch({
    url: `${tmdbBaseUrl}/${GENRE}/${genres_type}/list`,
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
    url: `${tmdbBaseUrl}/${DISCOVER}/${discover_type}`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data;
};

const fetchTmdbPerson = async ({ person_id, query }: IParamsTmdbPerson) => {
  const data: IResponceTmdbPerson = await getFetch({
    url: `${tmdbBaseUrl}/${PERSON}/${person_id}`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data;
};

const fetchTmdbSearch = async ({ search_type, query }: IParamsTmdbSearch) => {
  const data: IResponceTmdbSearch = await getFetch({
    url: `${tmdbBaseUrl}/${SEARCH}/${search_type}`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data;
};

const fetchTmdbDetail = async ({
  contents_type,
  id,
  query,
}: IParamsTmdbDetail) => {
  const data: IResponceTmdbDetail = await getFetch({
    url: `${tmdbBaseUrl}/${contents_type}/${id}`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data;
};

const fetchTmdbLists = async ({
  contents_type,
  lists_type,
  query,
}: IParamsTmdbLists) => {
  const data: IResponseTmdbLists = await getFetch({
    url: `${tmdbBaseUrl}/${contents_type}/${lists_type}`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data;
};

const fetchTmdbReviews = async ({
  contents_type,
  movie_id,
  query,
}: IParamsTmdbReviews) => {
  const data: IResponceTmdbReviews = await getFetch({
    url: `${tmdbBaseUrl}/${contents_type}/${movie_id}/reviews`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data;
};

const fetchTmdbSimilar = async ({
  contents_type,
  movie_id,
  query,
}: IParamsTmdbSimilar) => {
  const data: IResponceTmdbSimilar = await getFetch({
    url: `${tmdbBaseUrl}/${contents_type}/${movie_id}/similar`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data;
};

const fetchTmdbImages = async ({
  contents_type,
  movie_id,
  query,
}: IParamsTmdbImages) => {
  const data: IResponseTmdbImages = await getFetch({
    url: `${tmdbBaseUrl}/${contents_type}/${movie_id}/images`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data;
};

const fetchTmdbTVSeason = async ({
  series_id,
  season_number,
  query,
}: IParamsTmdbTVSeason) => {
  const data: IResponseTmdbTVSeason = await getFetch({
    url: `${tmdbBaseUrl}/tv/${series_id}/season/${season_number}`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data;
};

export {
  fetchTmdbTrending,
  fetchTmdbDiscover,
  fetchTmdbGenres,
  fetchTmdbSearch,
  fetchTmdbPerson,
  fetchTmdbDetail,
  fetchTmdbLists,
  fetchTmdbReviews,
  fetchTmdbSimilar,
  fetchTmdbImages,
  fetchTmdbTVSeason,
};
