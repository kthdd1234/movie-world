import { fetchTmdbMovieLists } from '@/api/contents/movie';
import { staffMadesMovieList } from '@/constants';
import { EListsType } from '@/types/enum';
import { IPropsParamsList } from '@/types/interface';

const StaffmadesPage = ({ params }: IPropsParamsList) => {
  /** params */
  const [type, id] = params.list;

  /** */
  const staffmadesMovieInfo = staffMadesMovieList.find(
    (info) => info.id === id
  );

  /** */
  const getTmdbMovieLists = async (lists_type: EListsType) => {
    const { results } = await fetchTmdbMovieLists({
      lists_type: lists_type,
      query: {
        language: 'ko',
        page: 1,
        region: 'KR',
      },
    });

    console.log(results);
  };

  console.log(staffmadesMovieInfo);

  return <></>;
};

export default StaffmadesPage;
