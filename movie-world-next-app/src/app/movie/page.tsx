import {
  fetchKmdbMovieDetail,
  fetchBoxOfficeList,
  fetchTmdbMovieLists,
  fetchTmdbMovieImages,
} from '../../api/contents/movie';
import { beforeDateValue } from '@/services/date';
import {
  EBoxOfficeType,
  EMovieListsType,
  EMultiMovieYn,
  EWeekGb,
} from '@/types/enum';
import MainContentsSection from '@/components/Section/MainContentsSection';
import StaffMadesSection from '@/components/Section/StaffMadesSection';
import ContentsTypeSection from '@/components/Section/ContentsTypeSection';
import Image from 'next/image';
import { tmdbImgUrl } from '@/constants';

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

const MoviePage = async () => {
  const { results } = await fetchTmdbMovieLists({
    list_type: EMovieListsType.NOW_PLAYING,
    query: {
      language: 'ko-KR',
      page: 1,
      region: 'KR',
    },
  });

  const { backdrops, logos, posters } = await fetchTmdbMovieImages({
    movie_id: 157336,
    query: {
      include_image_language: 'en',
      language: 'ko',
    },
  });

  console.log(backdrops);

  // console.log('results:', results);
  // getMovieList();

  return (
    <div>
      <MainContentsSection />
      <StaffMadesSection />
      <ContentsTypeSection />
      {/* {logos.map((info) => (
        <>
          <Image
            src={tmdbImgUrl + info.file_path}
            alt=''
            width={1920}
            height={1080}
          />
          <span>{info.file_path}</span>
        </>
      ))} */}
    </div>
  );
};

export default MoviePage;
