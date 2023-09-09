'use client';

import ContentsIntro from '../Contents/ContentsIntro';
import ContentsRelated from '../Contents/ContentsRelated';
import ContentsSplit from '../Contents/ContentsSplit';
import ContentsSetting from '../Contents/ContentsSetting';
import { IMovieContentsBody } from '@/types/interface';
import { EContentsSplitType, EContentsType } from '@/types/enum';
import { useState } from 'react';
import ContentsDetail from '../Contents/ContentsDetail';

const { MOVIE, TV } = EContentsType;
const { CONTENTS_INFO } = EContentsSplitType;

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
  const { results: similarResult } = similar;

  /** */
  const onClickContentsSplitType = (type: EContentsSplitType) => {
    setContentsSplitType(type);
  };

  return (
    <div className='text-white'>
      <ContentsIntro
        poster_path={poster_path}
        title={title}
        genres={genres}
        runtime={runtime}
        vote_average={vote_average}
        overview={overview}
      />
      <ContentsSetting
        watchKey={videos.results.length > 0 ? videos.results[0].key : ''}
      />
      <ContentsSplit
        type={contentsSplitType}
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
        <ContentsRelated type={MOVIE} similarResult={similarResult} />
      )}
    </div>
  );
};

export default MovieContentsBody;
