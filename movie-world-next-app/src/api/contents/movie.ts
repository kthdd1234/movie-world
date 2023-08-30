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
  query,
}: IParamsBoxOfficeList) => {
  const data: IResposeBoxOfficeList = await getFetch({
    url: `${kobisBaseUrl}/search${boxOfficeType}BoxOfficeList.json`,
    query: {
      key: NEXT_PUBLIC_KOBIS_API_KEY_1 ?? '',
      ...query,
    },
  });

  return data;
};

const fetchKmdbMovieDetail = async (query: IParamsKmdbMoveDetail) => {
  const data: IResposeKmdbMovieDetail = await getFetch({
    url: kmdbBaseUrl,
    query: {
      collection: 'kmdb_new2',
      ServiceKey: NEXT_PUBLIC_KMDB_API_KEY,
      ...query,
    },
  });

  return data;
};

const fetchTmdbMovieLists = async ({
  lists_type,
  query,
}: IParamsTmdbMovieLists) => {
  const data: IResponseTmdbMovieLists = await getFetch({
    url: `${tmdbMovieUrl}/${lists_type}`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data;
};

const fetchTmdbMovieImages = async ({
  movie_id,
  query,
}: IParamsTmdbMovieImages) => {
  const data: IResponseTmdbMovieImages = await getFetch({
    url: `${tmdbMovieUrl}/${movie_id}/images`,
    token: NEXT_PUBLIC_TMDB_ACCESS_TOKEN,
    query: query,
  });

  return data;
};

export {
  fetchBoxOfficeList,
  fetchKmdbMovieDetail,
  fetchTmdbMovieLists,
  fetchTmdbMovieImages,
};
