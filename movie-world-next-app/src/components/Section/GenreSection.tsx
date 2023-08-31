import { IPropsGenreSection } from '@/types/interface';
import SectionTitle from '../Text/SectionTitle';
import Image from 'next/image';
import Slider from 'react-slick';
import { tmdbImgUrl } from '@/constants';
import { ESectionType } from '@/types/enum';

const GenreSection = ({ list, onSlider }: IPropsGenreSection) => {
  const onRef = (slider: Slider) => {
    onSlider({ sliderId: ESectionType.SF, slider: slider });
  };

  const onClick = (id: number) => {
    //
  };

  return (
    <div className='relative'>
      <SectionTitle text='SF 영화' />
      <Slider
        ref={onRef}
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
            className='mr-2 cursor-pointer'
            onClick={() => onClick(info.id)}
          >
            <Image
              className='rounded'
              src={tmdbImgUrl + info.poster_path}
              alt=''
              width={173.5}
              height={255}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GenreSection;
