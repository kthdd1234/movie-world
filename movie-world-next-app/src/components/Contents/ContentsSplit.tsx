'use client';

import { EContentsSplitType } from '@/types/enum';

const { CONTENTS_INFO, RELATED_CONTENTS } = EContentsSplitType;

const ContentsSplit = ({
  type,
  onClick,
}: {
  type: EContentsSplitType;
  onClick: (type: EContentsSplitType) => void;
}) => {
  return (
    <section className='flex justify-center mb-4'>
      <button
        className='px-4 py-3 border-b-2'
        onClick={() => onClick(CONTENTS_INFO)}
      >
        콘텐츠 정보
      </button>
      <button
        className='px-4 py-3 text-disabled'
        onClick={() => onClick(RELATED_CONTENTS)}
      >
        관련 콘텐츠
      </button>
    </section>
  );
};

export default ContentsSplit;
