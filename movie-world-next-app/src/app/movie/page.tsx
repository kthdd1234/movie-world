import {
  fetchKmdbMovieDetail,
  fetchBoxOfficeList,
} from '../../api/contents/movie';
import { beforeDateValue } from '@/services/date';
import { EBoxOfficeType, EMultiMovieYn, EWeekGb } from '@/types/enum';
import MainContentsSection from '@/components/Section/MainContentsSection';
import StaffMadesSection from '@/components/Section/StaffMadesSection';
import ContentsTypeSection from '@/components/Section/ContentsTypeSection';

const getMovieList = async () => {
  const { boxOfficeResult: dailyResult } = await fetchBoxOfficeList({
    boxOfficeType: EBoxOfficeType.DAILY,
    params: {
      targetDt: beforeDateValue({ day: 1 }),
      multiMovieYn: EMultiMovieYn.COMMERCIAL,
    },
  });

  const { boxOfficeResult: weelkyResult } = await fetchBoxOfficeList({
    boxOfficeType: EBoxOfficeType.WEEKLY,
    params: {
      targetDt: beforeDateValue({ day: 7 }),
      multiMovieYn: EMultiMovieYn.COMMERCIAL,
      weekGb: EWeekGb.WEEKLY,
    },
  });

  const weeklyBoxOfficeList = weelkyResult.weeklyBoxOfficeList;
  const detailMovieRequests = weeklyBoxOfficeList.map((info) => {
    return fetchKmdbMovieDetail({
      query: info.movieNm,
      releaseDts: info.openDt.replace(/-/g, ''),
    });
  });
  const responseList = await Promise.all(detailMovieRequests);
  const movieDataList = responseList.map((info) => ({
    title: info.Query,
    data: info.Data[0].Result[0],
  }));

  console.log(dailyResult);
  console.log(movieDataList[0].data.vods);
};

const MoviePage = () => {
  // getMovieList();

  return (
    <div>
      <MainContentsSection />
      <StaffMadesSection />
      <ContentsTypeSection />
    </div>
  );
};

export default MoviePage;
