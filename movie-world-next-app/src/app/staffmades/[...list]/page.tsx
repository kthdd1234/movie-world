import { fetchTmdbSearch } from '@/api/contents';
import { fetchTmdbMovieLists } from '@/api/contents/movie';
import ContentsIntro from '@/components/Contents/ContentsIntro';
import ContentsRelated from '@/components/Contents/ContentsRelated';
import ContentsSetting from '@/components/Contents/ContentsSetting';
import { staffMadesMovieList } from '@/constants';
import { EContentsType, ESearchType } from '@/types/enum';
import { IPropsParamsList } from '@/types/interface';

const StaffmadesPage = async ({ params }: IPropsParamsList) => {
  /** params */
  const [type, id] = params.list;

  /** */
  const staffmadesInfo = staffMadesMovieList.find((info) => info.id === id)!;
  const { title, sub_title, image, movie_titles } = staffmadesInfo;
  const { results: contentsList, total_results } = await fetchTmdbMovieLists({
    lists_type: id,
    query: {
      language: 'ko',
      page: 1,
      region: 'KR',
    },
  });

  return (
    <div className='text-white'>
      <ContentsIntro
        image_size={{ w: 320, h: 250 }}
        image={image}
        title={title}
        subTitle={`콘텐츠 ${total_results}개`}
        overview={`${movie_titles} ${sub_title}`}
      />
      <ContentsSetting watchKey='' />
      <ContentsRelated
        isTitle={false}
        results={contentsList}
        type={EContentsType.MOVIE}
      />
    </div>
  );
};

export default StaffmadesPage;
