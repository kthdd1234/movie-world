import { fetchKoreaWebtoonList } from '@/api/contents/webtoon';
import { EWebtoonServiceType } from '@/types/enum';

const WebtoonPage = async () => {
  const { webtoons } = await fetchKoreaWebtoonList({
    isSearch: false,
    params: { service: EWebtoonServiceType.NAVER },
  });

  console.log(webtoons);

  return <>웹툰</>;
};

export default WebtoonPage;
