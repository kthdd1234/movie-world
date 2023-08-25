import { EDirectionType } from '@/types/enum';
import { IArrowButton } from '@/types/interface';
import Image from 'next/image';
import ArrowLeft from '../../../public/svgs/arrow_left.svg';
import ArrowRight from '../../../public/svgs/arrow_right.svg';

const ArrowButton = ({ arrowRef, direction, onClick }: IArrowButton) => {
  return (
    <div
      style={{ [direction]: '-2.5rem' }}
      className='absolute top-0 bottom-0 z-20 flex items-center justify-center w-10 cursor-pointer bg-gradient'
      onClick={() => onClick(direction)}
    >
      <div ref={arrowRef}>
        <Image
          src={direction === EDirectionType.LEFT ? ArrowLeft : ArrowRight}
          alt=''
          width={10}
          height={30}
        />
      </div>
    </div>
  );
};

export default ArrowButton;
