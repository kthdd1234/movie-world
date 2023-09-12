'use client';

import SmallText from '@/components/Text/SmallText';
import { footerIcons, webSiteInfo } from '@/constants';
import { Divider } from 'antd';

const WebSite = () => {
  const onClick = (link: string) => {
    window.open(link);
  };

  return (
    <div className='flex justify-between mt-6 '>
      <ul className='text-xs text-whitePoint'>
        {webSiteInfo.map(({ name, isPoint, isUnderline, link }, key) => (
          <li key={key} className='flex mb-1'>
            <SmallText
              name={name}
              isPoint={isPoint}
              isUnderline={isUnderline}
              link={link}
              onClick={() => onClick(link)}
            />
            <Divider
              type='vertical'
              className='w-[1px] h-[10px] bg-whitePoint2'
            />
            <SmallText
              name={link}
              isPoint={isPoint}
              isUnderline={true}
              link={link}
              onClick={() => onClick(link)}
            />
          </li>
        ))}
      </ul>
      <ul className='flex gap-2 mt-2'>
        {footerIcons.map(({ icon, link }, key) => (
          <li
            className='px-4 pt-1 text-whitePoint text-[20px] rounded-full border-[1.5px] border-whitePoint'
            key={key}
          >
            {icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WebSite;
