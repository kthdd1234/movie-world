import { INavBar } from '@/types/interface';
import DefaultButton from '../Button/DefaultButton';

const NavBar = ({ className, list, selectedId, onClick }: INavBar) => {
  return (
    <div className={className}>
      {list.map((item) => (
        <DefaultButton
          key={item.id}
          text={item.name}
          type={item.id === selectedId ? 'border' : 'disabled'}
          onClick={() => onClick(item.id)}
        />
      ))}
    </div>
  );
};

export default NavBar;
