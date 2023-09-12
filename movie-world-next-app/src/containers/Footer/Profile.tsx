'use client';

import SmallText from '@/components/Text/SmallText';
import { profileInfo } from '@/constants';
import { Divider } from 'antd';

const Profile = () => {
  const onClick = (link: string) => {
    window.open(link);
  };

  return (
    <ul className='flex text-xs text-whitePoint'>
      {profileInfo.map(({ name, isPoint, isUnderline, link }, key) => (
        <li className='flex' key={key}>
          <SmallText
            name={name}
            isPoint={isPoint}
            isUnderline={isUnderline}
            link={link}
            onClick={onClick}
          />
          <Divider
            type='vertical'
            className='w-[1px] h-[10px] bg-whitePoint2'
          />
        </li>
      ))}
    </ul>
  );
};

export default Profile;
