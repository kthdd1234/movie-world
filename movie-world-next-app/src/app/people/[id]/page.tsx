import {
  fetchTmdbPerson,
  fetchTmdbSearch,
  fetchTmdbDiscover,
} from '@/app/api/tmdb/route';
import PersonBody from '@/components/Body/PersonBody';
import { EDiscoverType, ESearchType } from '@/types/enum';
import { IPropsParamsId } from '@/types/interface';

const { MOVIE, TV } = EDiscoverType;

const PeoplePage = async ({ params }: IPropsParamsId) => {
  /** */
  const discoverQuery: any = {
    include_adult: true,
    language: 'ko',
    page: 1,
    with_people: params.id,
  };

  /** */
  const { name, biography } = await fetchTmdbPerson({
    person_id: Number(params.id),
    query: {
      append_to_response: '',
      language: 'en',
    },
  });

  /** */
  const { results: searchResult } = await fetchTmdbSearch({
    search_type: ESearchType.PERSON,
    query: {
      query: name,
      include_adult: true,
      language: 'ko',
      page: 1,
      region: '',
    },
  });

  /** */
  const { results: movieResult } = await fetchTmdbDiscover({
    discover_type: MOVIE,
    query: discoverQuery,
  });

  /** */
  const { results: tvResult } = await fetchTmdbDiscover({
    discover_type: TV,
    query: discoverQuery,
  });

  return (
    <PersonBody
      searchResult={searchResult}
      name={name}
      biography={biography}
      data={{
        movie: movieResult,
        tv: tvResult,
      }}
    />
  );
};

export default PeoplePage;
