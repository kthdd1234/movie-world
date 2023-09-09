'use client';

import { WatchaLogo } from '../../../public/images';
import { NotificationOutlined, UserOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Header = () => {
  /** */
  const router = useRouter();

  /** */
  const onClick = () => {
    router.push('/browse/movie');
  };

  return (
    <header className={`fixed top-0 z-30 w-screen p-3 bg-black2`}>
      <div className='flex items-center justify-between'>
        <Image
          className='w-20 cursor-pointer'
          src={WatchaLogo}
          alt='watchaLogo'
          onClick={onClick}
        />
        <div className='flex gap-5 pr-5'>
          <NotificationOutlined className='text-xl text-white' />
          <UserOutlined className='text-xl text-white' />
        </div>
      </div>
    </header>
  );
};

export default Header;
