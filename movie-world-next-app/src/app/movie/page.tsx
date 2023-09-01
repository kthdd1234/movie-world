import {
  fetchKmdbMovieDetail,
  fetchBoxOfficeList,
  fetchTmdbMovieImages,
  fetchTmdbMovieLists,
} from '../../api/contents/movie';
import { beforeDateValue } from '@/services/date';
import {
  EBoxOfficeType,
  EWeekGb,
  EMultiMovieYn,
  EListsType,
  ETrendingType,
  ETrendingDateType,
  EGenresType,
  EDiscoverType,
} from '@/types/enum';
import Image from 'next/image';
import { tmdbImgUrl } from '@/constants';
import MovieContent from '@/components/Content/MovieContent';
import {
  fetchTmdbDiscover,
  fetchTmdbGenres,
  fetchTmdbTrending,
} from '@/api/contents';

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

  const { results: trendingMovies } = await fetchTmdbTrending({
    trending_type: ETrendingType.MOVIE,
    time_window: ETrendingDateType.WEEK,
    query: { language: 'ko' },
  });

  const { results: trendingPersons } = await fetchTmdbTrending({
    trending_type: ETrendingType.PERSON,
    time_window: ETrendingDateType.WEEK,
    query: { language: 'ko' },
  });

  const { genres } = await fetchTmdbGenres({
    genres_type: EGenresType.MOVIE,
    query: { language: 'ko' },
  });

  const { results } = await fetchTmdbDiscover({
    discover_type: EDiscoverType.MOVIE,
    query: {
      include_adult: true,
      language: 'ko',
      page: 1,
      with_genres: 878,
    },
  });

  // console.log(results);

  // getKmdbMovieList();
  // getTmdbMovieLists();
  // getTmdbMovieImages();

  return (
    <MovieContent
      genres={genres}
      trendingMovies={trendingMovies}
      trendingPersons={trendingPersons}
      genreMovies={results}
    />
  );
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
// const getTmdbMovieImages = async () => {
//   const { backdrops, logos, posters } = await fetchTmdbMovieImages({
//     movie_id: 278,
//     query: {
//       include_image_language: null,
//       language: 'ko',
//     },
//   });

//   return (
//     <div>
//       {backdrops.map((info) => (
//         <>
//           <Image
//             src={tmdbImgUrl + info.file_path}
//             alt=''
//             width={1920}
//             height={1080}
//           />
//           <span>{info.file_path}</span>
//         </>
//       ))}
//     </div>
//   );
// };
