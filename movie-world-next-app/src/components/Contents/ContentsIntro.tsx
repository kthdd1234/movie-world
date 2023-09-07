'use client';

import { tmdbImgUrl } from '@/constants';
import { secondsFormatter } from '@/services/date_and_time';
import { IPropsContentsIntro } from '@/types/interface';
import Image from 'next/image';

const ContentsIntro = ({
  poster_path,
  title,
  genres,
  runtime,
  vote_average,
  overview,
}: IPropsContentsIntro) => {
  const genreNames = genres.map((info) => info.name).join(' · ');
  const formatRuntime = secondsFormatter({
    seconds: runtime,
    formatStr: 'm시간 s분',
  });
  const avgRated = `예상 ${vote_average}`;
  const joinInfo = [genreNames, formatRuntime, avgRated].join(' · ');

  return (
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
  );
};

export default ContentsIntro;
