'use client';

import { IPropsContentsIntro } from '@/types/interface';
import Image from 'next/image';

const ContentsIntro = ({
  image,
  title,
  subTitle,
  overview,
  image_size,
}: IPropsContentsIntro) => {
  return (
    <section className='flex'>
      <Image
        className='rounded'
        src={image}
        alt=''
        width={image_size.w}
        height={image_size.h}
      />
      <div className='mt-4 ml-10'>
        <div className='text-6xl font-bold'>{title}</div>
        <div className='mt-2 text-base text-mist'>{subTitle}</div>
        <div className='mt-2 text-base text-mist'>{overview}</div>
      </div>
    </section>
  );
};

export default ContentsIntro;
