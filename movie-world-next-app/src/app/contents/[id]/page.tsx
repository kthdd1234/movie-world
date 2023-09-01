import { fetchTmdbMovieDetail } from '@/api/contents/movie';

const ContentsPage = async ({ params }: { params: { id: string } }) => {
  const movie = await fetchTmdbMovieDetail({
    movie_id: Number(params.id),
    query: {
      append_to_response: 'videos,credits',
      language: 'ko',
    },
  });

  console.log(movie);

  return <div className='text-white'>{movie.title}</div>;
};

export default ContentsPage;
