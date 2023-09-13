'use client';

import { IPropsOnSlider } from '@/types/interface';
import SectionTitle from '../Text/SectionTitle';
import Image from 'next/image';
import Slider from 'react-slick';
import { tmdbImgUrl } from '@/constants';
import { useRecoilValue } from 'recoil';
import { genresAtom, sectionSliderAtom } from '@/states';
import { useRouter } from 'next/navigation';
import { ESliderType } from '@/types/enum';

const GenreSlider = ({
  genre = ESliderType.NONE,
  onSlider,
}: IPropsOnSlider) => {
  /** useRouter */
  const router = useRouter();

  /** useRecoil */
  const genresState = useRecoilValue(genresAtom);
  const sectionSliderState = useRecoilValue(sectionSliderAtom);

  const findGenre = genresState.find((info) => info.id === genre);
  const data = findGenre
    ? sectionSliderState[findGenre.name]
    : { type: ESliderType.NONE, list: [] };

  const onRef = (slider: Slider) => {
    onSlider({ sliderId: genre!, slider: slider });
  };

  const onClick = (id: number) => {
    router.push(`/contents/${data.type}/${id}`);
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
        {data.list.map((info: any) => (
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

export default GenreSlider;
