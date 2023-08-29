import { IPropsTrendingSection } from '@/types/interface';
import SectionTitle from '../Text/SectionTitle';
import Slider from 'react-slick';
import { ESectionType } from '@/types/enum';
import Image from 'next/image';
import { tmdbImgUrl } from '@/constants';

const PersonSection = ({ list, onSlider }: IPropsTrendingSection) => {
  const onRef = (slider: Slider) => {
    onSlider({ sectionType: ESectionType.PERSON, slider: slider });
  };

  const onClick = (id: number) => {
    //
  };

  return (
    <div className='relative '>
      <SectionTitle text='아티스트' />
      <Slider
        ref={onRef}
        className=''
        speed={800}
        slidesToShow={8}
        slidesToScroll={8}
        dots={false}
        arrows={false}
        infinite={true}
      >
        {list.map((info) => (
          <div
            key={info.id}
            className='relative cursor-pointer'
            onClick={() => onClick(info.id)}
          >
            <div className='w-[11rem] h-[11rem] mb-1 rounded-full overflow-hidden'>
              <Image
                src={tmdbImgUrl + info.profile_path}
                alt=''
                width={176}
                height={0}
              />
            </div>
            <div className='mr-3 text-center'>
              <div className='text-white'>{info.name}</div>
              <div className='text-[#babac1]'>{`${info.known_for[0].title}`}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PersonSection;