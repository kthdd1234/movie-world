import { CaretDownFilled } from '@ant-design/icons';
import IconButton from '../Button/IconButton';
import { IPropsContentsSeason, IStateSeason } from '@/types/interface';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { tmdbImgUrl } from '@/constants';
import { NoImage } from '../../../public/images';
import { Dropdown, MenuProps } from 'antd';

const ContentsSeason = ({
  series_id,
  seasons,
  getTmdbTVSeason,
}: IPropsContentsSeason) => {
  /** useState */
  const [seasonInfo, setSeasonInfo] = useState<IStateSeason>({
    name: '',
    number: 0,
    episodes: [],
  });

  /** useEffect */
  useEffect(() => {
    const get = async () => {
      const season_0 = seasons[0].season_number;
      const { name, episodes, season_number } = await getTmdbTVSeason({
        series_id: series_id,
        season_number: season_0,
      });

      setSeasonInfo({ name: name, number: season_number, episodes: episodes });
    };

    get();
  }, []);

  const onClick = async (event: any) => {
    const { name, episodes, season_number } = await getTmdbTVSeason({
      series_id: series_id,
      season_number: event.key,
    });

    setSeasonInfo({ name: name, number: season_number, episodes: episodes });
  };

  const items: MenuProps['items'] = seasons.map((info) => {
    return { label: info.name, key: info.season_number, onClick: onClick };
  });

  return (
    <div className='text-white w-[65%]'>
      <div className='flex justify-between mb-3'>
        <div>
          에피소드{' '}
          <span className='text-whitePoint'>{seasonInfo.episodes.length}</span>
        </div>
        <Dropdown menu={{ items }} trigger={['click']}>
          <IconButton
            text={seasonInfo.name}
            icon={<CaretDownFilled />}
            type='text'
            onClick={() => null}
          />
        </Dropdown>
      </div>
      <ul>
        {seasonInfo.episodes.map(
          (
            { air_date, name, runtime, still_path, overview, episode_number },
            key
          ) => (
            <li key={key} className='flex mb-5'>
              <Image
                className='rounded basis-[18%]'
                src={
                  tmdbImgUrl +
                  (still_path !== null
                    ? still_path
                    : '/orVQmw3JzbNxr4wWpzEb0fgbN4R.jpg')
                }
                alt=''
                width={155}
                height={75}
              />
              <div className='p-2 basis-[82%]'>
                <div className='flex justify-between mb-1'>
                  <div>
                    {episode_number}화 - {name}
                  </div>
                  <div>{runtime}분</div>
                </div>
                <div className='text-sm text-deepGray3'>
                  {overview !== '' ? overview.slice(0, 130) : air_date}
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ContentsSeason;
