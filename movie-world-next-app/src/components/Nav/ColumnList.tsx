import { selectedNavAtom } from '@/states';
import { IColumnList } from '@/types/interface';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

const ColumnList = ({ items, onSelectedItem }: IColumnList) => {
  /** useRecoilValue */
  const selectedNavState = useRecoilValue(selectedNavAtom);

  return (
    <ul className='flex flex-col p-3'>
      {items.map((item) => (
        <Link key={item.type} href={`/browse/${item.path}`}>
          <li
            className={`flex gap-3 px-4 py-2 text-base text-[#d4d7db] hover:text-white cursor-pointer rounded-md ${
              selectedNavState === item.type ? 'bg-[#303133]' : ''
            }`}
            onClick={() => onSelectedItem(item)}
          >
            <span className='flex items-center text-white'>{item.icon}</span>
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default ColumnList;
