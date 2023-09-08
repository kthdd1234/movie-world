'use client';

import { EContentsSplitType } from '@/types/enum';
import DefaultButton from '../Button/DefaultButton';

const { CONTENTS_INFO, RELATED_CONTENTS } = EContentsSplitType;

const ContentsSplit = ({
  type,
  onClick,
}: {
  type: EContentsSplitType;
  onClick: (type: EContentsSplitType) => void;
}) => {
  const onClickLeft = () => {
    onClick(CONTENTS_INFO);
  };

  const onClickRight = () => {
    onClick(RELATED_CONTENTS);
  };

  return (
    <section className='flex justify-center mb-4'>
      <DefaultButton
        text='콘텐츠 정보'
        type={type === CONTENTS_INFO ? 'border' : 'disabled'}
        onClick={onClickLeft}
      />
      <DefaultButton
        text='관련 콘텐츠'
        type={type === RELATED_CONTENTS ? 'border' : 'disabled'}
        onClick={onClickRight}
      />
    </section>
  );
};

export default ContentsSplit;
