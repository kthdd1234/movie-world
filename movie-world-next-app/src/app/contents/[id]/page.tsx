import {
  fetchTmdbMovieDetail,
  fetchTmdbMovieReviews,
} from '@/api/contents/movie';
import SectionTitle from '@/components/Text/SectionTitle';
import { tmdbImgUrl } from '@/constants';
import { secondsFormatter } from '@/services/date_and_time';
import {
  BarChartOutlined,
  CaretRightFilled,
  EditOutlined,
  PlusOutlined,
  StarFilled,
} from '@ant-design/icons';
import { Divider } from 'antd';
import Image from 'next/image';
import { EmptyProfileImage } from '../../../../public/images';

const ContentsPage = async ({ params }: { params: { id: string } }) => {
  /** fetchTmdbMovieDetail */
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
  } = await fetchTmdbMovieDetail({
    movie_id: Number(params.id),
    query: {
      append_to_response: 'videos,credits',
      language: 'ko',
    },
  });

  /** fetchTmdbMovieReviews */
  const { results: reviewsResult, total_results: reviewsTotal } =
    await fetchTmdbMovieReviews({
      movie_id: Number(params.id),
      query: { language: 'en', page: 1 },
    });

  const genreNames = genres.map((info) => info.name).join(' · ');
  const formatRuntime = secondsFormatter({
    seconds: runtime,
    formatStr: 'm시간 s분',
  });
  const avgRated = `예상 ${vote_average}`;
  const joinInfo = [genreNames, formatRuntime, avgRated].join(' · ');

  const evalueatedInfo = [
    {
      icon: <EditOutlined />,
      text: `투표 인원수는 ${vote_count}명 이에요.`,
    },
    {
      icon: <StarFilled />,
      text: `평균 평점은 ${vote_average}점 이에요`,
    },
    {
      icon: <BarChartOutlined />,
      text: `인지도 점수는 ${popularity}점 이에요.`,
    },
  ];

  const EvaluatedLine = ({
    icon,
    text,
  }: {
    icon: JSX.Element;
    text: string;
  }) => {
    return (
      <li className='flex items-center py-2'>
        <div className='flex items-center mr-4 text-xl text-tomato'>{icon}</div>
        <div className='text-[15px]'>{text}</div>
      </li>
    );
  };

  return (
    <div className='text-white'>
      <section className='flex'>
        <Image
          className='rounded'
          src={tmdbImgUrl + poster_path}
          alt=''
          width={169}
          height={247}
        />
        <div className='mt-4 ml-10'>
          <div className='text-6xl font-bold'>{title}</div>
          <div className='mt-2 text-base text-mist'>{joinInfo}</div>
          <div className='mt-2 text-base text-mist'>{overview}</div>
        </div>
      </section>
      <Divider className='bg-divider' />
      <section className='flex justify-between'>
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
      </section>
      <Divider style={{ marginBottom: '0' }} className=' bg-divider' />
      <section className='flex justify-center mb-4'>
        <button className='px-4 py-3 border-b-2'>콘텐츠 정보</button>
        <button className='px-4 py-3 text-disabled'>관련 콘텐츠</button>
      </section>
      <section className='flex mt-1'>
        <div className='w-[64%] mr-[2%]'>
          <ul className='mb-4'>
            {evalueatedInfo.map((info, key) => (
              <EvaluatedLine key={key} icon={info.icon} text={info.text} />
            ))}
          </ul>
          <div className='mb-5'>
            <SectionTitle text='관련 동영상' />
            <div className='flex flex-wrap'>
              {videos.results.map((info) => (
                <div
                  key={info.key}
                  className='mb-2 mr-2 w-[305px] h-[175px] cursor-pointer'
                  // onClick={() => onClickVideoThumbnail(info.key)}
                >
                  <Image
                    src={`https://img.youtube.com/vi/${info.key}/mqdefault.jpg`}
                    alt=''
                    width={305}
                    height={175}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='mb-5'>
            <SectionTitle text='감독/출연' />
            <ul className='grid grid-cols-2 gap-4'>
              {credits.cast.slice(0, 10).map((info, key) => (
                <li className='flex items-center' key={key}>
                  <div className='w-[62px] h-[62px] rounded-full overflow-hidden mr-4'>
                    <Image
                      src={tmdbImgUrl + info.profile_path}
                      alt=''
                      width={62}
                      height={62}
                    />
                  </div>
                  <div>
                    <div className='mb-[0.5px]'>{info.name}</div>
                    <div className='text-xs text-deepGray2'>
                      {info.character}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle text='TMDB 사용자 평' count={reviewsTotal} />
            <ul className='mt-3'>
              {reviewsResult.map(({ id, author_details, content }) => (
                <li className='flex items-center mb-5' key={id}>
                  <div className='w-[38px] h-[38px] rounded-full overflow-hidden mr-2'>
                    <Image
                      style={{ height: '38px' }}
                      src={
                        author_details.avatar_path !== null
                          ? tmdbImgUrl + author_details.avatar_path
                          : EmptyProfileImage
                      }
                      alt=''
                      width={38}
                      height={0}
                    />
                  </div>
                  <div>
                    <div className='flex font-light'>
                      <div className='mr-1'>{author_details.username}</div>
                      <div className='flex items-center'>
                        {Array.from(
                          { length: author_details.rating },
                          (v, i) => (
                            <StarFilled
                              style={{ fontSize: '10px' }}
                              key={i}
                              className='mr-1 text-yellow500'
                            />
                          )
                        )}
                      </div>
                    </div>
                    <div className='text-deepGray2'>{content.slice(0, 70)}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='w-[33%]'>
          <SectionTitle text='베스트 감상평' />
          <article className=' bg-[#191a1c] p-5'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='w-[32px] h-[32px] overflow-hidden rounded-full'>
                  <Image
                    style={{ height: '32px' }}
                    src={tmdbImgUrl + '/1kks3YnVkpyQxzw36CObFPvhL5f.jpg'}
                    alt=''
                    width={32}
                    height={0}
                  />
                </div>
                <div className='ml-3 text-deepGray'>야미야미</div>
              </div>
              <div className='flex items-center'>
                {Array.from({ length: 7 }, (_, i) => (
                  <StarFilled
                    key={i}
                    className='ml-1 text-yellow500'
                    width={20}
                    height={20}
                  />
                ))}
              </div>
            </div>
            <Divider
              className='rounded'
              style={{
                marginTop: '15px',
                marginBottom: '15px',
                borderColor: '#4b5563',
              }}
            />
            <div className='text-deepGray'>야미야미야미야미야미야미</div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ContentsPage;
// rgb(132, 134, 141)
