'use client';

import { IPropsOnSlider } from '@/types/interface';
import Slider from 'react-slick';
import Image from 'next/image';
import { tmdbImgUrl } from '@/constants';
import {
  IconRank1,
  IconRank2,
  IconRank3,
  IconRank4,
  IconRank5,
  IconRank6,
  IconRank7,
  IconRank8,
  IconRank9,
  IconRank10,
} from '../../../public/svgs';
import SectionTitle from '../Text/SectionTitle';
import { ESliderType } from '@/types/enum';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { sectionSliderAtom } from '@/states';
import { useInView } from 'react-intersection-observer';

const RankSlider = ({ onSlider }: IPropsOnSlider) => {
  /** useInView */
  const { ref, inView, entry } = useInView({ threshold: 0, triggerOnce: true });

  // console.log(inView);
  // console.log(entry);

  /** useRouter */
  const router = useRouter();

  /** useRecoilValue */
  const { rank } = useRecoilValue(sectionSliderAtom);
  const { type, list } = rank;

  /** */
  const rank_10_list = list.slice(0, 10);
  const rank_svg_list = [
    IconRank1,
    IconRank2,
    IconRank3,
    IconRank4,
    IconRank5,
    IconRank6,
    IconRank7,
    IconRank8,
    IconRank9,
    IconRank10,
  ];

  const onRef = (slider: Slider) => {
    onSlider({ sliderId: ESliderType.RANK, slider: slider });
  };

  const onClick = (id: number) => {
    router.push(`/contents/${type}/${id}`);
  };

  return (
    <div ref={ref} className='relative'>
      <SectionTitle text='주간 TOP 10' />
      <Slider
        ref={onRef}
        className='w-[112rem]'
        speed={800}
        slidesToShow={7}
        slidesToScroll={7}
        dots={false}
        arrows={false}
        infinite={true}
      >
        {rank_10_list.map((info, idx) => (
          <div
            key={info.id}
            className='relative h-[20rem] cursor-pointer'
            onClick={() => onClick(info.id)}
          >
            <Image
              className='absolute bottom-0 z-[-1]'
              src={rank_svg_list[idx]}
              alt=''
              width={60}
              height={60}
            />
            <Image
              className='pl-8 rounded'
              src={tmdbImgUrl + info.poster_path}
              alt=''
              width={245}
              height={0}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RankSlider;
