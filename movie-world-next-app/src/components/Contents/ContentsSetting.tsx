import { CaretRightFilled, PlusOutlined } from '@ant-design/icons';
import { Divider, Dropdown, MenuProps, message } from 'antd';
import IconButton from '../Button/IconButton';
import { youtubeWatchUrl } from '@/constants';

const ContentsSetting = ({ watchKey }: { watchKey: string }) => {
  /** */
  const [messageApi, contextHolder] = message.useMessage();

  const onClickWatch = () => {
    window.open(youtubeWatchUrl + watchKey);
  };

  const onClickSave = () => {
    //
  };

  const onClickMore = () => {
    //
  };

  const onClickEvaluated = () => {
    //
  };

  const onClickShare = () => {
    navigator.clipboard.writeText(window.location.href);

    messageApi.open({
      type: 'success',
      content: '주소 복사가 완료되었습니다.',
    });
  };

  const onClickNotInterest = () => {
    messageApi.open({
      type: 'info',
      content: '추천 대상에서 제외됩니다.',
    });
  };

  const items: MenuProps['items'] = [
    {
      label: <div>평가하기</div>,
      key: '0',
      onClick: onClickEvaluated,
    },
    {
      label: <div>공유하기</div>,
      key: '1',
      onClick: onClickShare,
    },
    {
      label: <div>관심없어요</div>,
      key: '2',
      onClick: onClickNotInterest,
    },
  ];

  return (
    <>
      {contextHolder}
      <Divider className='bg-divider' />
      <section className='flex justify-between'>
        <IconButton
          text='감상하기'
          icon={<CaretRightFilled />}
          type='danger'
          onClick={onClickWatch}
        />
        <div className='flex'>
          <IconButton
            text='보고 싶어요'
            icon={<PlusOutlined />}
            type='outline'
            onClick={onClickSave}
          />
          <span className='mr-2' />
          <Dropdown menu={{ items }} trigger={['click']}>
            <IconButton
              text=''
              icon={<span>···</span>}
              type='outline'
              onClick={onClickMore}
            />
          </Dropdown>
        </div>
      </section>
      <Divider style={{ marginBottom: '0' }} className=' bg-divider' />
    </>
  );
};

export default ContentsSetting;
