'use client';

import { EContentsSplitType } from '@/types/enum';
import DefaultButton from '../Button/DefaultButton';

const ContentsSplit = ({
  list,
  curType,
  onClick,
}: {
  list: { id: EContentsSplitType; name: string }[];
  curType: EContentsSplitType;
  onClick: (type: EContentsSplitType) => void;
}) => {
  return (
    <section className='flex justify-center mb-4'>
      {list.map((item) => (
        <DefaultButton
          key={item.id}
          text={item.name}
          onClick={() => onClick(item.id)}
          type={curType === item.id ? 'border' : 'disabled'}
        />
      ))}
    </section>
  );
};

export default ContentsSplit;
