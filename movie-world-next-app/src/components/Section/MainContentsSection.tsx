'use client';

import Image from 'next/image';
import {} from '@/constants';
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
        {/* <Image
          className='rounded-md cursor-pointer'
          src={interstellarBgUrl}
          alt=''
          width={1920}
          height={0}
        />
        <Image
          className='rounded-md'
          src={interstellarBgUrl}
          alt=''
          width={1920}
          height={0}
        />
        <Image
          className='rounded-md'
          src={interstellarBgUrl}
          alt=''
          width={1920}
          height={0}
        /> */}
      </Slider>
      <ArrowButton
        arrowRef={rightRef}
        direction={EDirectionType.RIGHT}
        onClick={onClicArrow}
      />
    </div>
  );
};

export default MainContentsSection;
