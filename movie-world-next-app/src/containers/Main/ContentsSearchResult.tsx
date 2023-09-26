'use client';

import { tmdbImgUrl } from '@/constants';
import { genresAtom } from '@/states';
import { ISearchData } from '@/types/interface';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';

const ContentsSearchResult = ({ results }: { results: ISearchData[] }) => {
  /** useRecoilValue */
  const gerensState = useRecoilValue(genresAtom);

  const setContentsGenre = (num: number) => {
    const result = gerensState.find((info) => info.id === num);
    return result?.name;
  };

  return (
    <>
      {results.map(
        (
          {
            poster_path,
            title,
            release_date,
            genre_ids,
            first_air_date,
            original_name,
          },
          key
        ) => (
          <div key={key} className='flex items-center mb-3 cursor-pointer'>
            <div className='w-[48px] h-[70px] overflow-hidden rounded mr-4'>
              <Image
                src={`${tmdbImgUrl}${poster_path}`}
                alt=''
                width={48}
                height={70}
              />
            </div>
            <div className='font-light'>
              <div>{title ?? original_name}</div>
              <div className='text-[13px] font-light text-deepGray2'>
                {(release_date ?? first_air_date).slice(0, 4)} ·{' '}
                {setContentsGenre(genre_ids[0])} ·{' '}
                {setContentsGenre(genre_ids[1])}
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default ContentsSearchResult;
