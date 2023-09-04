import { fetchTmdbMovieDetail } from '@/api/contents/movie';
import { tmdbImgUrl } from '@/constants';
import { secondsFormatter } from '@/services/date_and_time';
import { CaretRightFilled, PlusOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import Image from 'next/image';

const ContentsPage = async ({ params }: { params: { id: string } }) => {
  /** */
  const movie = await fetchTmdbMovieDetail({
    movie_id: Number(params.id),
    query: {
      append_to_response: 'videos,credits',
      language: 'ko',
    },
  });

  const { title, overview, runtime, genres, vote_average } = movie;
  const genreNames = genres.map((info) => info.name).join(' · ');
  const formatRuntime = secondsFormatter({
    seconds: runtime,
    formatStr: 'm시간 s분',
  });
  const avgRated = `예상 ${vote_average}`;
  const joinInfo = [genreNames, formatRuntime, avgRated].join(' · ');

  return (
    <div className='text-white'>
      <div className='flex'>
        <Image
          className='rounded'
          src={tmdbImgUrl + movie.poster_path}
          alt=''
          width={169}
          height={247}
        />
        <div className='mt-4 ml-10'>
          <div className='text-6xl font-bold'>{title}</div>
          <div className='mt-1 text-base text-mist'>{joinInfo}</div>
          <div className='mt-1 text-base text-mist'>{overview}</div>
        </div>
      </div>
      <Divider className='bg-divider' />
      <div className='flex justify-between'>
        <button className='flex items-center px-4 py-2 text-base rounded bg-tomato'>
          <CaretRightFilled />
          <span className='ml-1'>감상하기</span>
        </button>
        <div className='flex'>
          <button className='flex items-center px-4 py-2 border-[1.5px] border-solid rounded border-divider'>
            <PlusOutlined />
            <span className='ml-1'> 보고 싶어요</span>
          </button>
          <button className='ml-3 px-4 py-2 rounded border-divider border-[1.5px]'>
            ···
          </button>
        </div>
      </div>
      <Divider className='bg-divider' />
      <div>
        <div>
          <div>콘텐츠 정보/관련 콘텐츠</div>
          <div>tagline</div>
          <div>관련 동영상</div>
          <div>감독/출연</div>
          <div>영화 관람평</div>
        </div>
        <div>베스트 감상평</div>
      </div>
    </div>
  );
};

export default ContentsPage;
