import {
  fetchKmdbMovieDetail,
  fetchBoxOfficeList,
  fetchTmdbMovieLists,
  fetchTmdbMovieImages,
} from '../../api/contents/movie';
import { beforeDateValue } from '@/services/date';
import {
  EBoxOfficeType,
  EListsType,
  EMultiMovieYn,
  ETrendingType,
  ETrendingDateType,
  EWeekGb,
} from '@/types/enum';
import Image from 'next/image';
import { tmdbImgUrl } from '@/constants';
import MovieContent from '@/components/Content/MovieContent';
import { fetchTmdbTrending } from '@/api/contents/trending';

const MoviePage = async () => {
  const getTmdbMovieLists = async (lists_type: EListsType) => {
    const { results } = await fetchTmdbMovieLists({
      lists_type: lists_type,
      query: {
        language: 'ko',
        page: 1,
        region: 'KR',
      },
    });

    console.log(results);
  };

  const getTmdbMovieImages = async () => {
    const { backdrops, logos, posters } = await fetchTmdbMovieImages({
      movie_id: 278,
      query: {
        include_image_language: null,
        language: 'ko',
      },
    });

    return (
      <div>
        {backdrops.map((info) => (
          <>
            <Image
              src={tmdbImgUrl + info.file_path}
              alt=''
              width={1920}
              height={1080}
            />
            <span>{info.file_path}</span>
          </>
        ))}
      </div>
    );
  };

  const { results } = await fetchTmdbTrending({
    trending_type: ETrendingType.MOVIE,
    time_window: ETrendingDateType.WEEK,
    query: { language: 'ko' },
  });

  // getKmdbMovieList();
  // getTmdbMovieLists();
  // getTmdbMovieImages();

  return <MovieContent trendingList={results} />;
};

export default MoviePage;

// const getKmdbMovieList = async () => {
//   const { boxOfficeResult: dailyResult } = await fetchBoxOfficeList({
//     boxOfficeType: EBoxOfficeType.DAILY,
//     params: {
//       targetDt: beforeDateValue({ day: 1 }),
//       multiMovieYn: EMultiMovieYn.COMMERCIAL,
//     },
//   });

//   const { boxOfficeResult: weelkyResult } = await fetchBoxOfficeList({
//     boxOfficeType: EBoxOfficeType.WEEKLY,
//     params: {
//       targetDt: beforeDateValue({ day: 7 }),
//       multiMovieYn: EMultiMovieYn.COMMERCIAL,
//       weekGb: EWeekGb.WEEKLY,
//     },
//   });

//   const weeklyBoxOfficeList = weelkyResult.weeklyBoxOfficeList;
//   const detailMovieRequests = weeklyBoxOfficeList.map((info) => {
//     return fetchKmdbMovieDetail({
//       query: info.movieNm,
//       releaseDts: info.openDt.replace(/-/g, ''),
//     });
//   });
//   const responseList = await Promise.all(detailMovieRequests);
//   const movieDataList = responseList.map((info) => ({
//     title: info.Query,
//     data: info.Data[0].Result[0],
//   }));

//   console.log(movieDataList[0].data.vods);
// };
