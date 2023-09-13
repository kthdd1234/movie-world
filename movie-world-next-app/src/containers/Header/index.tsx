'use client';

import {
  HomeOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { message } from 'antd';
import { useRouter } from 'next/navigation';

const Header = () => {
  /** useMessage */
  const [messageApi, contextHolder] = message.useMessage();

  /** useRouter */
  const router = useRouter();

  /** */
  const onClickHome = () => {
    router.push('/browse/movie');
  };

  const onClickUser = () => {
    messageApi.open({
      type: 'warning',
      content: '개발 준비 중입니다.',
    });
  };

  return (
    <header className={`fixed top-0 z-30 w-screen p-3 bg-black2`}>
      {contextHolder}
      <div className='flex items-center justify-between'>
        <HomeOutlined
          className='pl-5 text-lg text-white cursor-pointer'
          onClick={onClickHome}
        />

        <div className='flex gap-5 pr-5'>
          <NotificationOutlined
            className='text-xl text-white'
            onClick={onClickUser}
          />
          <UserOutlined className='text-xl text-white' onClick={onClickUser} />
        </div>
      </div>
    </header>
  );
};

export default Header;
