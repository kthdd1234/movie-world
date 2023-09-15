'use client';

import ContentsIntro from '../Contents/ContentsIntro';
import ContentsRelated from '../Contents/ContentsRelated';
import ContentsSplit from '../Contents/ContentsSplit';
import ContentsSetting from '../Contents/ContentsSetting';
import { IContentsBody } from '@/types/interface';
import { EContentsSplitType, EContentsType } from '@/types/enum';
import { useState } from 'react';
import ContentsDetail from '../Contents/ContentsDetail';
import { secondsFormatter } from '@/services/date_and_time';
import { movieSplitList, tmdbImgUrl, tvSplitList } from '@/constants';
import ContentsSeason from '../Contents/ContentsSeason';

const { MOVIE } = EContentsType;
const { CONTENTS_INFO, SEASON_INFO, RELATED_CONTENTS } = EContentsSplitType;

const ContentsBody = ({
  type,
  detail,
  reviews,
  similar,
  getTmdbTVSeason,
}: IContentsBody) => {
  /** useState */
  const [contentsSplitType, setContentsSplitType] = useState(CONTENTS_INFO);

  /** detail */
  const {
    id,
    name,
    title,
    overview,
    runtime,
    genres,
    vote_average,
    vote_count,
    popularity,
    videos,
    credits,
    poster_path,
    seasons,
  } = detail;

  /** */
  const isMovieType = type === MOVIE.toString();

  /** */
  const onClickContentsSplitType = async (type: EContentsSplitType) => {
    setContentsSplitType(type);
  };

  /** */
  const setSubTitle = () => {
    const genreNames = genres.map((info) => info.name).join(' · ');
    const secondInfo = isMovieType
      ? secondsFormatter({
          seconds: runtime,
          formatStr: 'm시간 s분',
        })
      : `시즌 ${seasons.length}개`;
    const avgRated = `예상 ${vote_average}`;
    const str = [genreNames, secondInfo, avgRated].join(' · ');

    return str;
  };

  return (
    <div className='text-white'>
      <ContentsIntro
        image_size={{ w: 169, h: 247 }}
        image={`${tmdbImgUrl}${poster_path}`}
        title={title || name}
        subTitle={setSubTitle()}
        overview={overview}
      />
      <ContentsSetting
        watchKey={videos.results.length > 0 ? videos.results[0].key : ''}
      />
      <ContentsSplit
        list={isMovieType ? movieSplitList : tvSplitList}
        curType={contentsSplitType}
        onClick={onClickContentsSplitType}
      />
      {contentsSplitType === CONTENTS_INFO && (
        <ContentsDetail
          vote_count={vote_count}
          vote_average={vote_average}
          popularity={popularity}
          videos_results={videos.results}
          cast={credits.cast}
          reviews_total={reviews ? reviews.total_results : 0}
          reviews_result={reviews ? reviews.results : []}
        />
      )}
      {contentsSplitType === RELATED_CONTENTS && (
        <ContentsRelated
          isTitle={true}
          type={MOVIE}
          results={similar ? similar.results : []}
        />
      )}
      {contentsSplitType === SEASON_INFO && (
        <ContentsSeason
          series_id={id}
          seasons={seasons}
          getTmdbTVSeason={getTmdbTVSeason}
        />
      )}
    </div>
  );
};

export default ContentsBody;
