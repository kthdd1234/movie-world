'use client';

import { IPropsContentsRelated } from '@/types/interface';
import SectionTitle from '../Text/SectionTitle';
import Image from 'next/image';
import { tmdbImgUrl } from '@/constants';
import { useRouter } from 'next/navigation';

const ContentsRelated = ({ similarResult }: IPropsContentsRelated) => {
  /** */
  const router = useRouter();

  const onClick = (id: number) => {
    router.push(`/contents/${id}`);
  };

  return (
    <section>
      <SectionTitle text='관련 콘텐츠' />
      <ul className='grid grid-cols-8 gap-4'>
        {similarResult.map((info) => (
          <Image
            className='rounded cursor-pointer'
            key={info.id}
            src={info.poster_path !== null ? tmdbImgUrl + info.poster_path : ''}
            alt=''
            width={175}
            height={255.5}
            onClick={() => onClick(info.id)}
          />
        ))}
      </ul>
    </section>
  );
};

export default ContentsRelated;
