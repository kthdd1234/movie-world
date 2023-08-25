'use client';

import Image from 'next/image';
import { mainMovieList, tmdbImgUrl } from '@/constants';
import Slider from 'react-slick';
import ArrowButton from '../Button/ArrowButton';
import { EDirectionType } from '@/types/enum';
import { useRef, useState } from 'react';

const MainContentsSection = () => {
  /** useState */
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  /** useRef */
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  const onClicArrow = (direction: EDirectionType) => {
    if (sliderRef) {
      direction == EDirectionType.LEFT
        ? sliderRef.slickPrev()
        : sliderRef.slickNext();
    }
  };

  const onMouseEnter = () => {
    leftRef.current!.style.display = 'flex';
    rightRef.current!.style.display = 'flex';
  };

  const onMouseLeave = () => {
    leftRef.current!.style.display = 'none';
    rightRef.current!.style.display = 'none';
  };

  const onSliderRef = (sliderRef: Slider) => {
    setSliderRef(sliderRef);
  };

  const onClickContents = (movieId: number) => {
    //
  };

  return (
    <div
      className='relative'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ArrowButton
        arrowRef={leftRef}
        direction={EDirectionType.LEFT}
        onClick={onClicArrow}
      />
      <div className='text-3xl font-bold text-white'>홈</div>
      <div className='h-8' />
      <Slider
        ref={onSliderRef}
        className='w-[150rem]'
        speed={800}
        slidesToShow={2}
        dots={false}
        arrows={false}
        infinite={true}
      >
        {mainMovieList.map((info) => (
          <div
            key={info.movieId}
            className='relative pr-5'
            onClick={() => onClickContents(info.movieId)}
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
              alt={`${info.movieId}`}
              width={1920}
              height={0}
            />
          </div>
        ))}
      </Slider>
      <ArrowButton
        arrowRef={rightRef}
        direction={EDirectionType.RIGHT}
        onClick={onClicArrow}
      />
    </div>
  );
};

// .custom-4c4u5d::before {
//   content: "";
//   display: block;
//   position: absolute;
//   inset: 0px;
//   z-index: -1;
//   background: linear-gradient(179.46deg, rgba(0, 0, 0, 0) 0.46%, rgba(0, 0, 0, 0.6) 95.22%);
//   width: 100%;
// }

export default MainContentsSection;
