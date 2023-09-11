'use client';

import ContentsIntro from '../Contents/ContentsIntro';
import ContentsRelated from '../Contents/ContentsRelated';
import ContentsSplit from '../Contents/ContentsSplit';
import ContentsSetting from '../Contents/ContentsSetting';
import { IMovieContentsBody } from '@/types/interface';
import { EContentsSplitType, EContentsType } from '@/types/enum';
import { useState } from 'react';
import ContentsDetail from '../Contents/ContentsDetail';
import { secondsFormatter } from '@/services/date_and_time';
import { tmdbImgUrl } from '@/constants';

const { MOVIE, TV } = EContentsType;
const { CONTENTS_INFO, RELATED_CONTENTS } = EContentsSplitType;

const MovieContentsBody = ({
  detail,
  reviews,
  similar,
}: IMovieContentsBody) => {
  /** */
  const [contentsSplitType, setContentsSplitType] = useState(CONTENTS_INFO);

  /** */
  const {
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
  } = detail;
  const { results: reviewsResult, total_results: reviewsTotal } = reviews;
  const { results: results } = similar;

  /** */
  const onClickContentsSplitType = (type: EContentsSplitType) => {
    setContentsSplitType(type);
  };

  /** */
  const setSubTitle = () => {
    const genreNames = genres.map((info) => info.name).join(' · ');
    const formatRuntime = secondsFormatter({
      seconds: runtime,
      formatStr: 'm시간 s분',
    });
    const avgRated = `예상 ${vote_average}`;
    const str = [genreNames, formatRuntime, avgRated].join(' · ');

    return str;
  };

  const splitTypeList = [
    { id: CONTENTS_INFO, name: '콘텐츠 정보' },
    { id: RELATED_CONTENTS, name: '관련 콘텐츠' },
  ];

  return (
    <div className='text-white'>
      <ContentsIntro
        image_size={{ w: 169, h: 247 }}
        image={`${tmdbImgUrl}${poster_path}`}
        title={title}
        subTitle={setSubTitle()}
        overview={overview}
      />
      <ContentsSetting
        watchKey={videos.results.length > 0 ? videos.results[0].key : ''}
      />
      <ContentsSplit
        list={splitTypeList}
        curType={contentsSplitType}
        onClick={onClickContentsSplitType}
      />
      {contentsSplitType === CONTENTS_INFO ? (
        <ContentsDetail
          vote_count={vote_count}
          vote_average={vote_average}
          popularity={popularity}
          videos_results={videos.results}
          cast={credits.cast}
          reviews_total={reviewsTotal}
          reviews_result={reviewsResult}
        />
      ) : (
        <ContentsRelated isTitle={true} type={MOVIE} results={results} />
      )}
    </div>
  );
};

export default MovieContentsBody;
