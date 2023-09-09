import {
  fetchTmdbMovieDetail,
  fetchTmdbMovieReviews,
  fetchTmdbMovieSimilar,
} from '@/api/contents/movie';
import MovieContentsBody from '@/components/Body/MovieContentsBody';
import { IPropsParamsList } from '@/types/interface';

const ContentsPage = async ({ params }: IPropsParamsList) => {
  /** params */
  const [type, id] = params.list;

  const detail = await fetchTmdbMovieDetail({
    movie_id: Number(id),
    query: {
      append_to_response: 'videos,credits',
      language: 'ko',
    },
  });

  const reviews = await fetchTmdbMovieReviews({
    movie_id: Number(id),
    query: { language: 'en', page: 1 },
  });

  const similar = await fetchTmdbMovieSimilar({
    movie_id: Number(id),
    query: { language: 'ko', page: 1 },
  });

  return (
    <MovieContentsBody detail={detail} reviews={reviews} similar={similar} />
  );
};

export default ContentsPage;
