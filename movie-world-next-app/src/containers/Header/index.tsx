'use client';

import { BellOutlined, NotificationOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ProfileDefaultImg, WatchWLogo } from '../../../public/images';
import { selectedNavAtom } from '@/states';
import { useSetRecoilState } from 'recoil';
import { ENavItemType } from '@/types/enum';

const Header = () => {
  /** useMessage */
  const [messageApi, contextHolder] = message.useMessage();

  /** useRouter */
  const router = useRouter();

  /** useSetRecoilState */
  const setSelectedNavAtom = useSetRecoilState(selectedNavAtom);

  /** */
  const onClickHome = () => {
    router.push('/browse/movie');
    setSelectedNavAtom(ENavItemType.MOVIE);
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
        <Image
          className='pl-5 cursor-pointer'
          src={WatchWLogo}
          alt=''
          width={65}
          height={0}
          onClick={onClickHome}
        />
        <div className='flex gap-5 pr-5'>
          <div className='flex items-center'>
            <BellOutlined
              className='text-[22px] text-white '
              onClick={onClickUser}
            />
          </div>
          <div
            className='w-[32px] h-[32px] overflow-hidden rounded-full cursor-pointer'
            onClick={onClickUser}
          >
            <Image src={ProfileDefaultImg} alt='' width={32} height={32} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
