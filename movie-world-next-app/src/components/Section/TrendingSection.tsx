import { IPropsTrendingSection } from '@/types/interface';
import Slider from 'react-slick';

const TrendingSection = ({ list, onSlider }: IPropsTrendingSection) => {
  console.log(list);

  return (
    <div className='relative'>
      <div className='text-xl font-bold text-white '>주간 TOP 10</div>
      <Slider></Slider>
    </div>
  );
};

export default TrendingSection;
