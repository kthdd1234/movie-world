'use client';

import { EListsType, ESliderType } from '@/types/enum';
import { IPropsStaffMadesSlider } from '@/types/interface';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Slider from 'react-slick';

const StaffMadesSlider = ({ type, list, onSlider }: IPropsStaffMadesSlider) => {
  /** */
  const router = useRouter();

  const onRef = (slider: Slider) => {
    onSlider({ sliderId: ESliderType.STAFF_MADES, slider: slider });
  };

  const onClick = (id: EListsType) => {
    router.push(`/staffmades/${type}/${id}`);
  };

  return (
    <div className='relative text-white'>
      <Slider
        ref={onRef}
        className='w-[110rem]'
        speed={800}
        slidesToShow={4}
        dots={false}
        arrows={false}
        infinite={true}
      >
        {list.map((info) => (
          <div
            className='cursor-pointer'
            key={info.id}
            onClick={() => onClick(info.id)}
          >
            <div className='text-xs font-normal'>{info.title}</div>
            <div className='text-xl font-bold'>{info.sub_title}</div>
            <div className='text-lg font-normal text-mist'>
              {info.movie_titles}
            </div>
            <Image
              className='rounded h-[250px]'
              src={info.image}
              alt=''
              width={421}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StaffMadesSlider;
