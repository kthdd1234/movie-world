'use client';

import { CaretRightFilled, PlusOutlined } from '@ant-design/icons';
import { Divider } from 'antd';

const ContentsSetting = () => {
  return (
    <>
      <Divider className='bg-divider' />
      <section className='flex justify-between'>
        <button className='flex items-center px-4 py-2 text-base rounded bg-tomato'>
          <CaretRightFilled />
          <span className='ml-1'>감상하기</span>
        </button>
        <div className='flex'>
          <button className='flex items-center px-4 py-2 border-[1.5px] border-solid rounded border-divider'>
            <PlusOutlined />
            <span className='ml-1'>보고 싶어요</span>
          </button>
          <button className='ml-3 px-4 py-2 rounded border-divider border-[1.5px]'>
            ···
          </button>
        </div>
      </section>
      <Divider style={{ marginBottom: '0' }} className=' bg-divider' />
    </>
  );
};

export default ContentsSetting;
