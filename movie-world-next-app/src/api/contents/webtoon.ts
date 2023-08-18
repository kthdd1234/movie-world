import { IParamsKoreaWebtoon, IResponceKoreaWebtoon } from '@/types/interface';
import { getFetch } from '..';

/** koreaWebtoonBaseUrl */
const koreaWebtoonBaseUrl = 'https://korea-webtoon-api.herokuapp.com';

/** kmasBaseUrl */
const kmasBaseUrl = `https://www.kmas.or.kr/openapi/search/rgDtaMasterList?key=${process.env.NEXT_PUBLIC_KMAS_API_KEY}`;

const fetchKoreaWebtoonList = async ({
  isSearch,
  params,
}: IParamsKoreaWebtoon) => {
  const data: IResponceKoreaWebtoon | null = await getFetch({
    url: `${koreaWebtoonBaseUrl}${isSearch ? '/search?' : '?'}`,
    params: params,
  });

  if (data == null) throw new Error(`${data}`);
  return data;
};

export { fetchKoreaWebtoonList };
