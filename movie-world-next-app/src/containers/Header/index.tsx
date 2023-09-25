'use client';

import { BellOutlined, SearchOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ProfileDefaultImg, WatchWLogo } from '../../../public/images';
import { searchInputAtom, selectedNavAtom } from '@/states';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { ENavItemType } from '@/types/enum';

const Header = () => {
  /** useMessage */
  const [messageApi, contextHolder] = message.useMessage();

  /** useRecoilState */
  const [searchInputState, setSearchInputState] =
    useRecoilState(searchInputAtom);

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

  const onChange = (value: string) => {
    setSearchInputState({ isShow: true, keyword: value });
  };

  const { isShow, keyword } = searchInputState;

  return (
    <header className={`fixed top-0 z-30 w-screen  bg-black2 px-5 py-3`}>
      {contextHolder}
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='w-[45px] h-[45px] rounded-xl overflow-hidden'>
            <Image
              className='scursor-pointer'
              src={WatchWLogo}
              alt=''
              width={45}
              height={0}
              onClick={onClickHome}
            />
          </div>
          {isShow && (
            <div className='flex items-center ml-40 w-[337px]  bg-inputBG px-2 py-1 rounded'>
              <SearchOutlined className='mx-2 mb-1 text-xl text-deepGray' />
              <input
                className='w-full text-base text-white bg-transparent outline-none caret-tomato'
                placeholder='영화, TV 프로그램, 인물 검색'
                value={keyword}
                onChange={(e) => onChange(e.target.value)}
              />
            </div>
          )}
        </div>
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
