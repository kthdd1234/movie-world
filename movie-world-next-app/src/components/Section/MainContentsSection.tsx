'use client';

import Image from 'next/image';
import { tmdbImgUrl } from '@/constants';
import Slider from 'react-slick';
import { IPropsMainContentsSection } from '@/types/interface';
import { ESectionType } from '@/types/enum';
import { useRouter } from 'next/navigation';

const MainContentsSection = ({ list, onSlider }: IPropsMainContentsSection) => {
  /** useRouter */
  const router = useRouter();

  const onRef = (slider: Slider) => {
    onSlider({ sliderId: ESectionType.MAIN_CONTENTS, slider: slider });
  };

  const onClick = (id: number) => {
    router.push(`/contents/${id}`);
  };

  return (
    <>
      <div className='text-3xl font-bold text-white'>홈</div>
      <div className='h-8' />
      <Slider
        ref={onRef}
        className='w-[150rem]'
        speed={800}
        slidesToShow={2}
        dots={false}
        arrows={false}
        infinite={true}
      >
        {list.map((info) => (
          <div
            key={info.id}
            className='relative pr-5'
            onClick={() => onClick(info.id)}
          >
            <div className='absolute bottom-0 z-40 w-full h-20 bg-linear' />
            <div className='absolute bottom-0 p-9 z-60'>
              <Image
                src={tmdbImgUrl + info.logo_path}
                alt=''
                width={370}
                height={0}
              />
              <div className='h-6' />
              <div className='text-xl font-medium leading-7 text-white whitespace-pre-line'>
                {info.desc}
              </div>
            </div>
            <Image
              className='z-30 rounded-md cursor-pointer '
              src={tmdbImgUrl + info.back_drop}
              alt={`${info.id}`}
              width={1920}
              height={0}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default MainContentsSection;
