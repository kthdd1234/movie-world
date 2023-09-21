import { IGenreData } from '@/types/interface';
import SectionTitle from '../Text/SectionTitle';
import Image from 'next/image';
import { genres_img_list } from '../../../public/images/genres';

const GridImgList = ({
  genresList,
}: {
  genresList: {
    title: string;
    genres: IGenreData[];
  }[];
}) => {
  return (
    <>
      {genresList.map((info) => (
        <div className='mb-6' key={info.title}>
          <SectionTitle text={info.title} />
          <ul className='grid grid-cols-5'>
            {info.genres.map((item) => (
              <li className='relative' key={item.id}>
                <div className='w-[285px] h-[160px] overflow-hidden rounded cursor-pointer mb-4'>
                  <Image
                    src={
                      genres_img_list[
                        Math.floor(Math.random() * genres_img_list.length)
                      ]
                    }
                    alt=''
                    width={285}
                    height={160}
                  />
                </div>
                <div className='absolute z-30 font-bold text-white top-3 left-3'>
                  {item.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default GridImgList;
