import {
  fetchTmdbDetail,
  fetchTmdbReviews,
  fetchTmdbSimilar,
} from '@/api/tmdb';
import ContentsBody from '@/components/Body/ContentsBody';
import { IPropsParamsList } from '@/types/interface';

const ContentsPage = async ({ params }: IPropsParamsList) => {
  /** params */
  const [type, id] = params.list;

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
    />
  );
};

export default ContentsPage;
