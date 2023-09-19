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
import { GET } from '@/app/api';
import { TNextResponce } from '@/types/type';
import { NextResponse } from 'next/server';

/** ETmdbPathType */
const { TRENDING, DISCOVER, GENRE, SEARCH, PERSON } = ETmdbPathType;

/** API KEYS */
const { NEXT_PUBLIC_TMDB_ACCESS_TOKEN } = process.env;

const fetchTmdbTrending = async ({
  trending_type,
  time_window,
  query,
}: IParamsTmdbTrending) => {
  const data: NextResponse<IResponceTmdbTrending> = await GET({
    url: `${tmdbBaseUrl}/${TRENDING}/${trending_type}/${time_window}`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data.json() as Promise<IResponceTmdbTrending>;
};

const fetchTmdbGenres = async ({ genres_type, query }: IParamsTmdbGenres) => {
  const data: NextResponse<IResponceTmdbGenres> = await GET({
    url: `${tmdbBaseUrl}/${GENRE}/${genres_type}/list`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data.json() as Promise<IResponceTmdbGenres>;
};

const fetchTmdbDiscover = async ({
  discover_type,
  query,
}: IParamsTmdbDiscover) => {
  const data: NextResponse<ITmdbContentsList> = await GET({
    url: `${tmdbBaseUrl}/${DISCOVER}/${discover_type}`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data.json() as Promise<ITmdbContentsList>;
};

const fetchTmdbPerson = async ({ person_id, query }: IParamsTmdbPerson) => {
  const data: NextResponse<IResponceTmdbPerson> = await GET({
    url: `${tmdbBaseUrl}/${PERSON}/${person_id}`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data.json() as Promise<IResponceTmdbPerson>;
};

const fetchTmdbSearch = async ({ search_type, query }: IParamsTmdbSearch) => {
  const data: NextResponse<IResponceTmdbSearch> = await GET({
    url: `${tmdbBaseUrl}/${SEARCH}/${search_type}`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data.json() as Promise<IResponceTmdbSearch>;
};

const fetchTmdbDetail = async ({
  contents_type,
  id,
  query,
}: IParamsTmdbDetail) => {
  const data: NextResponse<IResponceTmdbDetail> = await GET({
    url: `${tmdbBaseUrl}/${contents_type}/${id}`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data.json() as Promise<IResponceTmdbDetail>;
};

const fetchTmdbLists = async ({
  contents_type,
  lists_type,
  query,
}: IParamsTmdbLists) => {
  const data: NextResponse<IResponseTmdbLists> = await GET({
    url: `${tmdbBaseUrl}/${contents_type}/${lists_type}`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data.json() as Promise<IResponseTmdbLists>;
};

const fetchTmdbReviews = async ({
  contents_type,
  movie_id,
  query,
}: IParamsTmdbReviews) => {
  const data: NextResponse<IResponceTmdbReviews> = await GET({
    url: `${tmdbBaseUrl}/${contents_type}/${movie_id}/reviews`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data.json() as Promise<IResponceTmdbReviews>;
};

const fetchTmdbSimilar = async ({
  contents_type,
  movie_id,
  query,
}: IParamsTmdbSimilar) => {
  const data: NextResponse<IResponceTmdbSimilar> = await GET({
    url: `${tmdbBaseUrl}/${contents_type}/${movie_id}/similar`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data.json() as Promise<IResponceTmdbSimilar>;
};

const fetchTmdbImages = async ({
  contents_type,
  movie_id,
  query,
}: IParamsTmdbImages) => {
  const data: NextResponse<IResponseTmdbImages> = await GET({
    url: `${tmdbBaseUrl}/${contents_type}/${movie_id}/images`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data.json() as Promise<IResponseTmdbImages>;
};

const fetchTmdbTVSeason = async ({
  series_id,
  season_number,
  query,
}: IParamsTmdbTVSeason) => {
  const data: NextResponse<IResponseTmdbTVSeason> = await GET({
    url: `${tmdbBaseUrl}/tv/${series_id}/season/${season_number}`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data.json() as Promise<IResponseTmdbTVSeason>;
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
