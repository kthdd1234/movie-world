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

  const genreKey = ESliderType[genre];
  const data = sectionSliderState[genreKey];

  const genreInfo = genresState.find((info) => info.id === genre);

  const onRef = (slider: Slider) => {
    onSlider({ sliderId: genre!, slider: slider });
  };

  const onClick = (id: number) => {
    router.push(`/contents/${data.type}/${id}`);
  };

  console.log(data.list);

  if (!data) {
    return null;
  }

  return (
    <div className='relative'>
      <SectionTitle text={genreInfo?.name ?? ''} />
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
              src={
                info.poster_path
                  ? tmdbImgUrl + info.poster_path
                  : '/kdPMUMJzyYAc4roD52qavX0nLIC.jpg'
              }
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
