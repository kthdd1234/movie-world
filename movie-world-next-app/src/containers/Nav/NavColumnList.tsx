import { INavColumnList } from '@/types/interface';

const NavColumnList = ({
  seletedItem,
  items,
  onSelectedItem,
}: INavColumnList) => {
  return (
    <ul className='flex flex-col p-3'>
      {items.map((item) => (
        <li
          key={item.type}
          className={`flex gap-3 px-4 py-2 text-base text-[#d4d7db] hover:text-white cursor-pointer rounded-md ${
            seletedItem === item.type ? 'bg-[#303133]' : ''
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

export default NavColumnList;
