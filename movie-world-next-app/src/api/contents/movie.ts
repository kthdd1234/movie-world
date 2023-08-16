import {
  IParamsBoxOfficeList,
  IParamsMoveDetails,
  IResposeMovieDetails,
  IResposeBoxOfficeList,
} from '@/types/interface';
import { getFetch } from '..';

/** kobisBaseUrl */
const kobisBaseUrl = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice`;

/** kmdbBaseUrl */
const kmdbBaseUrl = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?`;

const { NEXT_PUBLIC_KOBIS_API_KEY_1, NEXT_PUBLIC_KMDB_API_KEY } = process.env;

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

  if (data == null) throw new Error('fetchWeeklyBoxOfficeList API null 뜸');
  return data;
};

const fetchMovieDetails = async (params: IParamsMoveDetails) => {
  const data: IResposeMovieDetails | null = await getFetch({
    url: kmdbBaseUrl,
    params: {
      collection: 'kmdb_new2',
      ServiceKey: NEXT_PUBLIC_KMDB_API_KEY ?? '',
      ...params,
    },
  });

  if (data == null) throw new Error(`fetchMovieDetails API null 뜸 ${data}`);
  return data;
};

export { fetchBoxOfficeList, fetchMovieDetails };
