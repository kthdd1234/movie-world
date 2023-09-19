import {
  fetchTmdbTrending,
  fetchTmdbGenres,
  fetchTmdbDiscover,
} from '@/app/api/tmdb';
import HomeBody from '@/components/Body/HomeBody';
import { mainTVList, staffMadesTVList } from '@/constants';
import {
  ETrendingType,
  ETrendingDateType,
  EGenresType,
  EDiscoverType,
  ESliderType,
  EContentsType,
} from '@/types/enum';

const BrowseTV = async () => {
  const { results: rank } = await fetchTmdbTrending({
    trending_type: ETrendingType.TV,
    time_window: ETrendingDateType.WEEK,
    query: { language: 'ko' },
  });

  const { results: person } = await fetchTmdbTrending({
    trending_type: ETrendingType.PERSON,
    time_window: ETrendingDateType.DAY,
    query: { language: 'ko' },
  });

  const { genres } = await fetchTmdbGenres({
    genres_type: EGenresType.TV,
    query: { language: 'ko' },
  });

  const fetchGenreList = genres.map((info) => {
    return fetchTmdbDiscover({
      discover_type: EDiscoverType.TV,
      query: {
        include_adult: false,
        language: 'ko',
        page: 1,
        with_genres: info.id,
      },
    });
  });

  const discovers = await Promise.all(fetchGenreList);

  return (
    <HomeBody
      type={EContentsType.TV}
      main={mainTVList}
      staffmades={staffMadesTVList}
      rank={rank}
      person={person}
      genres={genres}
      discovers={discovers}
    />
  );
};

export default BrowseTV;
