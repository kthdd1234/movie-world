'use client';

import { tmdbImgUrl, youtubeWatchUrl } from '@/constants';
import { BarChartOutlined, EditOutlined, StarFilled } from '@ant-design/icons';
import { Divider } from 'antd';
import { EmptyProfileImage } from '../../../public/images';
import SectionTitle from '../Text/SectionTitle';
import Image from 'next/image';
import { IPropsContentsDetail } from '@/types/interface';
import { useRouter } from 'next/navigation';
import BestReviewer from '@/containers/Main/BestReviewer';

const EvaluatedLine = ({ icon, text }: { icon: JSX.Element; text: string }) => {
  return (
    <li className='flex items-center py-2'>
      <div className='flex items-center mr-4 text-xl text-tomato'>{icon}</div>
      <div className='text-[15px]'>{text}</div>
    </li>
  );
};

const ContentsDetail = ({
  vote_count,
  vote_average,
  popularity,
  videos_results,
  cast,
  reviews_total,
  reviews_result,
}: IPropsContentsDetail) => {
  console.log(
    '=>>>>>:',
    vote_count,
    vote_average,
    popularity,
    videos_results,
    cast,
    reviews_total,
    reviews_result
  );

  /** */
  const router = useRouter();

  /** */
  const evalueatedInfo = [
    {
      icon: <EditOutlined />,
      text: `투표 인원수는 ${vote_count}명이에요`,
    },
    {
      icon: <StarFilled />,
      text: `평균 평점은 ${vote_average}점이에요`,
    },
    {
      icon: <BarChartOutlined />,
      text: `인지도 점수는 ${popularity}점이에요.`,
    },
  ];

  const onClickVideoThumbnail = (watchKey: string) => {
    window.open(youtubeWatchUrl + watchKey);
  };

  const onClickProfile = (id: number) => {
    router.push(`/people/${id}`);
  };

  return (
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
            {videos_results.map((info) => (
              <div
                key={info.key}
                className='mb-2 mr-2 w-[305px] h-[175px] cursor-pointer'
                onClick={() => onClickVideoThumbnail(info.key)}
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
            {cast.slice(0, 10).map((info, key) => (
              <li
                key={key}
                className='flex items-center cursor-pointer'
                onClick={() => onClickProfile(info.id)}
              >
                <div className='w-[62px] h-[62px] rounded-full overflow-hidden mr-4'>
                  <Image
                    src={
                      info.profile_path
                        ? tmdbImgUrl + info.profile_path
                        : EmptyProfileImage
                    }
                    alt=''
                    width={62}
                    height={62}
                  />
                </div>
                <div>
                  <div className='mb-[0.5px]'>{info.name}</div>
                  <div className='text-xs text-deepGray2'>{info.character}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionTitle text='TMDB 사용자 평' count={reviews_total} />
          <ul className='mt-3'>
            {reviews_result.map(({ id, author_details, content }) => (
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
                      {Array.from({ length: author_details.rating }, (v, i) => (
                        <StarFilled
                          style={{ fontSize: '10px' }}
                          key={i}
                          className='mr-1 text-yellow500'
                        />
                      ))}
                    </div>
                  </div>
                  <div className='text-deepGray2'>{content.slice(0, 70)}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {reviews_total > 0 && <BestReviewer results={reviews_result} />}
    </section>
  );
};

export default ContentsDetail;
