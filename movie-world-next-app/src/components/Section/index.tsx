import { EDirectionType } from '@/types/enum';
import { useRef, ReactNode } from 'react';
import Slider from 'react-slick';
import ArrowButton from '../Button/ArrowButton';

const Section = ({
  children,
  slider,
}: {
  children: ReactNode;
  slider: Slider | null;
}) => {
  /** useRef */
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

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
      className='relative'
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

export default Section;
