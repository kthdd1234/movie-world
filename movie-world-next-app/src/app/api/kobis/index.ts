import { GET } from '@/app/api';
import { kobisBaseUrl } from '@/constants';
import {
  IParamsKobisBoxOffice,
  IResposeKobisBoxOffice,
} from '@/types/interface';
import { NextResponse } from 'next/server';

/** API KEYS */
const { NEXT_PUBLIC_KOBIS_API_KEY_1 } = process.env;

const fetchKobisBoxOffice = async ({
  boxOfficeType,
  query,
}: IParamsKobisBoxOffice) => {
  const data: NextResponse<IResposeKobisBoxOffice> = await GET({
    url: `${kobisBaseUrl}/search${boxOfficeType}KobisBoxOffice.json`,
    query: {
      key: NEXT_PUBLIC_KOBIS_API_KEY_1 ?? '',
      ...query,
    },
  });

  return data.json();
};

export { fetchKobisBoxOffice };
