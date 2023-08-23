import {
  IParamsBoxOfficeList,
  IParamsKmdbMoveDetail,
  IResposeKmdbMovieDetail,
  IResposeBoxOfficeList,
  IParamsTmdbMovieLists,
} from '@/types/interface';
import { getFetch } from '..';
import { kmdbBaseUrl, kobisBaseUrl, tmdbBaseUrl } from '@/constants';

/** tmdbMovieUrl */
const tmdbMovieUrl = `${tmdbBaseUrl}/movie`;

/** API KEYS */
const {
  NEXT_PUBLIC_KOBIS_API_KEY_1,
  NEXT_PUBLIC_KMDB_API_KEY,
  NEXT_PUBLIC_TMDB_API_KEY,
} = process.env;

const fetchBoxOfficeList = async ({
  boxOfficeType,
  params,
}: IParamsBoxOfficeList) => {
  const data: IResposeBoxOfficeList | null = await getFetch({
    url: `${kobisBaseUrl}/search${boxOfficeType}BoxOfficeList.json?`,
    params: {
      key: NEXT_PUBLIC_KOBIS_API_KEY_1 ?? '',
      ...params,
    },
  });

  if (data == null) throw new Error(`${data}`);
  return data;
};

const fetchKmdbMovieDetail = async (params: IParamsKmdbMoveDetail) => {
  const data: IResposeKmdbMovieDetail | null = await getFetch({
    url: kmdbBaseUrl,
    params: {
      collection: 'kmdb_new2',
      ServiceKey: NEXT_PUBLIC_KMDB_API_KEY,
      ...params,
    },
  });

  if (data == null) throw new Error(`${data}`);
  return data;
};

const fetchTmdbMovieLists = async ({ path, params }: IParamsTmdbMovieLists) => {
  const data = await getFetch({
    url: tmdbMovieUrl + path,
    token: NEXT_PUBLIC_TMDB_API_KEY,
    params: params,
  });

  if (data == null) throw new Error(`${data}`);
  return data;
};

export { fetchBoxOfficeList, fetchKmdbMovieDetail, fetchTmdbMovieLists };
