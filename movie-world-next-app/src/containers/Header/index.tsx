import { bgColor } from '@/constants';
import { WatchaLogo } from '../../../public/images';
import { NotificationOutlined, UserOutlined } from '@ant-design/icons';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={`fixed top-0 z-30 w-screen p-3 bg-[${bgColor}]`}>
      <div className='flex items-center justify-between'>
        <Image className='w-20' src={WatchaLogo} alt='watchaLogo' />
        <div className='flex gap-5 pr-5'>
          <NotificationOutlined className='text-xl text-white' />
          <UserOutlined className='text-xl text-white' />
        </div>
      </div>
    </header>
  );
};

export default Header;
