import {
  fetchMovieDetails,
  fetchBoxOfficeList,
} from '../../../api/contents/movie';
import { beforeDateValue } from '@/services/date';
import { EBoxOfficeType, EMultiMovieYn, EWeekGb } from '@/types/enum';

const MoviePage = async () => {
  const { boxOfficeResult: dailyResult } = await fetchBoxOfficeList({
    boxOfficeType: EBoxOfficeType.daily,
    params: {
      targetDt: beforeDateValue({ day: 1 }),
      multiMovieYn: EMultiMovieYn.commercial,
    },
  });

  const { boxOfficeResult: weelkyResult } = await fetchBoxOfficeList({
    boxOfficeType: EBoxOfficeType.weekly,
    params: {
      targetDt: beforeDateValue({ day: 7 }),
      multiMovieYn: EMultiMovieYn.commercial,
      weekGb: EWeekGb.weekly.toString(),
    },
  });

  const weeklyBoxOfficeList = weelkyResult.weeklyBoxOfficeList;
  const detailMovieRequests = weeklyBoxOfficeList.map((info) => {
    return fetchMovieDetails({
      query: info.movieNm,
      releaseDts: info.openDt.replace(/-/g, ''),
    });
  });
  const responseList = await Promise.all(detailMovieRequests);
  const movieDataList = responseList.map((info) => ({
    title: info.Query,
    data: info.Data[0].Result[0],
  }));

  console.log(movieDataList);

  return <>야미</>;
};

export default MoviePage;
