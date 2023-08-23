'use client';

import Image from 'next/image';
import { interstellarBgUrl } from '@/constants';

const MainContentsSection = () => {
  return (
    <div>
      <div className='text-3xl font-bold text-white '>홈</div>
      <div className='h-8' />
      <Image
        className='rounded-md'
        src={interstellarBgUrl}
        alt='interstellarBgUrl'
        width={1920 / 1.7}
        height={0}
      />
    </div>
  );
};

export default MainContentsSection;
