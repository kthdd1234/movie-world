import { kmdbBaseUrl } from '@/constants';
import { IParamsKmdbDetail, IResposeKmdbMovieDetail } from '@/types/interface';
import { GET } from '..';
import { TNextResponce } from '@/types/type';
import { NextResponse } from 'next/server';

/** API KEYS */
const { NEXT_PUBLIC_KMDB_API_KEY } = process.env;

const fetchKmdbDetail = async (query: IParamsKmdbDetail) => {
  const data: NextResponse<IResposeKmdbMovieDetail> = await GET({
    url: kmdbBaseUrl,
    query: {
      collection: 'kmdb_new2',
      ServiceKey: NEXT_PUBLIC_KMDB_API_KEY,
      ...query,
    },
  });

  return data.json();
};

export { fetchKmdbDetail };
