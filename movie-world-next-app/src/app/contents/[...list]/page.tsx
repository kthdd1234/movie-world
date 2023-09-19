import {
  fetchTmdbTVSeason,
  fetchTmdbDetail,
  fetchTmdbReviews,
  fetchTmdbSimilar,
} from '@/app/api/tmdb';
import ContentsBody from '@/components/Body/ContentsBody';
import { IPropsParamsList } from '@/types/interface';

const ContentsPage = async ({ params }: IPropsParamsList) => {
  /** params */
  const [type, id] = params.list;

  const getTmdbTVSeason = async ({
    series_id,
    season_number,
  }: {
    series_id: number;
    season_number: number;
  }) => {
    'use server';
    const data = await fetchTmdbTVSeason({
      series_id: series_id,
      season_number: season_number,
      query: {
        append_to_response: 'videos',
        language: 'ko',
      },
    });

    return data;
  };

  const detail = await fetchTmdbDetail({
    contents_type: type,
    id: Number(id),
    query: {
      append_to_response: 'videos,credits',
      language: 'ko',
    },
  });

  const reviews = await fetchTmdbReviews({
    contents_type: type,
    movie_id: Number(id),
    query: { language: 'en', page: 1 },
  });

  const similar = await fetchTmdbSimilar({
    contents_type: type,
    movie_id: Number(id),
    query: { language: 'ko', page: 1 },
  });

  return (
    <ContentsBody
      type={type}
      detail={detail}
      reviews={reviews}
      similar={similar}
      getTmdbTVSeason={getTmdbTVSeason}
    />
  );
};

export default ContentsPage;
