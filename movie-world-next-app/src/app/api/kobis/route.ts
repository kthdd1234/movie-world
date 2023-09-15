import { getFetch } from '@/app/api/route';
import { kobisBaseUrl } from '@/constants';
import {
  IParamsKobisBoxOffice,
  IResposeKobisBoxOffice,
} from '@/types/interface';

/** API KEYS */
const { NEXT_PUBLIC_KOBIS_API_KEY_1 } = process.env;

const fetchKobisBoxOffice = async ({
  boxOfficeType,
  query,
}: IParamsKobisBoxOffice) => {
  const data: IResposeKobisBoxOffice = await getFetch({
    url: `${kobisBaseUrl}/search${boxOfficeType}KobisBoxOffice.json`,
    query: {
      key: NEXT_PUBLIC_KOBIS_API_KEY_1 ?? '',
      ...query,
    },
  });

  return data;
};

export { fetchKobisBoxOffice };
