import {
  IParamsBoxOfficeList,
  IParamsKmdbMoveDetail,
  IResposeKmdbMovieDetail,
  IResposeBoxOfficeList,
  IParamsTmdbMovieLists,
  IResponseTmdbMovieLists,
  IParamsTmdbMovieImages,
  IResponseTmdbMovieImages,
} from '@/types/interface';
import { getFetch } from '..';
import { kmdbBaseUrl, kobisBaseUrl, tmdbBaseUrl } from '@/constants';

/** tmdbMovieUrl */
const tmdbMovieUrl = `${tmdbBaseUrl}/movie`;

/** API KEYS */
const {
  NEXT_PUBLIC_KOBIS_API_KEY_1,
  NEXT_PUBLIC_KMDB_API_KEY,
  NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
} = process.env;

const fetchBoxOfficeList = async ({
  boxOfficeType,
  params,
}: IParamsBoxOfficeList) => {
  const data: IResposeBoxOfficeList = await getFetch({
    url: `${kobisBaseUrl}/search${boxOfficeType}BoxOfficeList.json?`,
    params: {
      key: NEXT_PUBLIC_KOBIS_API_KEY_1 ?? '',
      ...params,
    },
  });

  return data;
};

const fetchKmdbMovieDetail = async (params: IParamsKmdbMoveDetail) => {
  const data: IResposeKmdbMovieDetail = await getFetch({
    url: kmdbBaseUrl,
    params: {
      collection: 'kmdb_new2',
      ServiceKey: NEXT_PUBLIC_KMDB_API_KEY,
      ...params,
    },
  });

  return data;
};

const fetchTmdbMovieLists = async ({
  list_type,
  query,
}: IParamsTmdbMovieLists) => {
  const data: IResponseTmdbMovieLists = await getFetch({
    url: `${tmdbMovieUrl}/${list_type}?`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    params: query,
  });

  return data;
};

const fetchTmdbMovieImages = async ({
  movie_id,
  query,
}: IParamsTmdbMovieImages) => {
  const data: IResponseTmdbMovieImages = await getFetch({
    url: `${tmdbMovieUrl}/${movie_id}/images?`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    params: query,
  });

  return data;
};

export {
  fetchBoxOfficeList,
  fetchKmdbMovieDetail,
  fetchTmdbMovieLists,
  fetchTmdbMovieImages,
};
