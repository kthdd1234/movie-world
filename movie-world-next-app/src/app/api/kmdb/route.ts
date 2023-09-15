import { kmdbBaseUrl } from '@/constants';
import { IParamsKmdbDetail, IResposeKmdbMovieDetail } from '@/types/interface';
import { getFetch } from '../route';

/** API KEYS */
const { NEXT_PUBLIC_KMDB_API_KEY } = process.env;

const fetchKmdbDetail = async (query: IParamsKmdbDetail) => {
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

export { fetchKmdbDetail };
