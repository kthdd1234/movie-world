'use client';

import SectionTitle from '@/components/Text/SectionTitle';
import { tmdbImgUrl } from '@/constants';
import { StarFilled } from '@ant-design/icons';
import { Divider } from 'antd';
import { EmptyProfileImage } from '../../../public/images';
import { IReviewsResult } from '@/types/interface';
import Image from 'next/image';

const BestReviewer = ({ results }: { results: IReviewsResult[] }) => {
  const { avatar_path, username, rating } = results[0].author_details;

  return (
    <div className='w-[33%]'>
      <SectionTitle text='베스트 감상평' />
      <article className=' bg-[#191a1c] p-5'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='w-[32px] h-[32px] overflow-hidden rounded-full'>
              <Image
                style={{ height: '32px' }}
                src={avatar_path ? tmdbImgUrl + avatar_path : EmptyProfileImage}
                alt=''
                width={32}
                height={0}
              />
            </div>
            <div className='ml-3 text-deepGray'>{username}</div>
          </div>
          <div className='flex items-center'>
            {Array.from({ length: rating }, (_, i) => (
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
        <div className='text-deepGray'>{results[0].content.slice(0, 100)}</div>
      </article>
    </div>
  );
};

export default BestReviewer;
