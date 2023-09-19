import { IPropsOnSlider } from '@/types/interface';
import SectionTitle from '../Text/SectionTitle';
import Slider from 'react-slick';
import Image from 'next/image';
import { tmdbImgUrl } from '@/constants';
import { ESliderType } from '@/types/enum';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { sectionSliderAtom } from '@/states';
import { EmptyProfileImage } from '../../../public/images';

const PersonSlider = ({ onSlider }: IPropsOnSlider) => {
  /** useRouter */
  const router = useRouter();

  /** useRecoilValue */
  const { person } = useRecoilValue(sectionSliderAtom);
  const { list } = person;

  const onRef = (slider: Slider) => {
    onSlider({ sliderId: ESliderType.PERSON, slider: slider });
  };

  const onClick = (id: number) => {
    router.push(`/people/${id}`);
  };

  return (
    <div className='relative '>
      <SectionTitle text='아티스트' />
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
            className='relative cursor-pointer'
            onClick={() => onClick(info.id)}
          >
            <div className='w-[11rem] h-[11rem] mb-1 rounded-full overflow-hidden'>
              <Image
                src={
                  info.profile_path
                    ? tmdbImgUrl + info.profile_path
                    : EmptyProfileImage
                }
                alt=''
                width={176}
                height={0}
              />
            </div>
            <div className='mr-3 text-center'>
              <div className='text-white'>{info.name}</div>
              <div className='text-mist'>{`${
                info.known_for[0] ? info.known_for[0].title : ''
              }`}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PersonSlider;
