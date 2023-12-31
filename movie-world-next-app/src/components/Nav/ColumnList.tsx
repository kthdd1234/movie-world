import { selectedNavAtom } from '@/states';
import { IColumnList } from '@/types/interface';
import { useRecoilValue } from 'recoil';

const ColumnList = ({ items, onSelectedItem }: IColumnList) => {
  /** useRecoilValue */
  const selectedNavState = useRecoilValue(selectedNavAtom);

  return (
    <ul className='flex flex-col p-3'>
      {items.map((item, key) => (
        <li
          key={key}
          className={`flex gap-3 px-4 py-2 text-base text-[#d4d7db] hover:text-white cursor-pointer rounded-md ${
            selectedNavState === item.type ? 'bg-[#303133]' : ''
          }`}
          onClick={() => onSelectedItem(item)}
        >
          <span className='flex items-center text-white'>{item.icon}</span>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ColumnList;
