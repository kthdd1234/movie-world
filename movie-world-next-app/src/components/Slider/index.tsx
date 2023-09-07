import { EDirectionType } from '@/types/enum';
import { useRef } from 'react';
import { IPropsRootSlider } from '@/types/interface';
import { TDivElement } from '@/types/type';
import ArrowButton from '../Button/ArrowButton';

const RootSlider = ({ children, slider }: IPropsRootSlider) => {
  /** useRef */
  const leftRef = useRef<TDivElement>(null);
  const rightRef = useRef<TDivElement>(null);

  const onMouseEnter = () => {
    leftRef.current!.style.display = 'flex';
    rightRef.current!.style.display = 'flex';
  };

  const onMouseLeave = () => {
    leftRef.current!.style.display = 'none';
    rightRef.current!.style.display = 'none';
  };

  const onClicArrow = (direction: EDirectionType) => {
    if (slider) {
      direction == EDirectionType.LEFT
        ? slider.slickPrev()
        : slider.slickNext();
    }
  };

  return (
    <div
      className='relative mb-10'
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ArrowButton
        arrowRef={leftRef}
        direction={EDirectionType.LEFT}
        onClick={onClicArrow}
      />
      {children}
      <ArrowButton
        arrowRef={rightRef}
        direction={EDirectionType.RIGHT}
        onClick={onClicArrow}
      />
    </div>
  );
};

export default RootSlider;
