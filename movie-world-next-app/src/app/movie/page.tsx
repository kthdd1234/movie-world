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
  ESectionType,
  EWeekGb,
} from '@/types/enum';
import MainContentsSection from '@/components/Section/MainContentsSection';
import StaffMadesSection from '@/components/Section/StaffMadesSection';
import ContentsTypeSection from '@/components/Section/ContentsTypeSection';
import Image from 'next/image';
import { tmdbImgUrl } from '@/constants';
import Section from '@/components/Section';
import Slider from 'react-slick';
import { useState } from 'react';

const getTmdbMovieLists = async (list_type: EMovieListsType) => {
  const { results } = await fetchTmdbMovieLists({
    list_type: list_type,
    query: {
      language: 'ko-KR',
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

const MoviePage = async () => {
  /** mainContentSlider */
  const [mainContentsSlider, setMainContentsSlider] = useState<Slider | null>(
    null
  );

  const onSlider = ({
    sectionType,
    slider,
  }: {
    sectionType: ESectionType;
    slider: Slider;
  }) => {
    switch (sectionType) {
      case ESectionType.MAIN_CONTENTS:
        setMainContentsSlider(slider);
        break;

      default:
        break;
    }
  };

  // getKmdbMovieList();
  // getTmdbMovieLists();
  // getTmdbMovieImages();

  return (
    <div>
      <Section
        slider={mainContentsSlider}
        children={<MainContentsSection onSlider={onSlider} />}
      />
      <StaffMadesSection />
      <ContentsTypeSection />
    </div>
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
