'use client';

import { IPropsContentsRelated } from '@/types/interface';
import SectionTitle from '../Text/SectionTitle';
import Image from 'next/image';
import { tmdbImgUrl } from '@/constants';

const ContentsRelated = ({ similarResult }: IPropsContentsRelated) => {
  return (
    <section>
      <SectionTitle text='관련 콘텐츠' />
      <ul className='grid grid-cols-8 gap-4'>
        {similarResult.map((info) => (
          <Image
            className='rounded'
            key={info.id}
            src={tmdbImgUrl + info.poster_path}
            alt=''
            width={175}
            height={255.5}
          />
        ))}
      </ul>
    </section>
  );
};

export default ContentsRelated;
