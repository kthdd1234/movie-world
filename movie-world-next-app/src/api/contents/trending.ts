import { tmdbBaseUrl } from '@/constants';
import { getFetch } from '..';
import { IParamsTmdbTrending, IResponceTmdbTrending } from '@/types/interface';

/** tmdbTrendingUrl */
const tmdbTrendingUrl = `${tmdbBaseUrl}/trending`;

/** API KEY */
const apiKey = process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN;

const fetchTmdbTrending = async ({
  trending_type,
  time_window,
  query,
}: IParamsTmdbTrending) => {
  const data: IResponceTmdbTrending = await getFetch({
    url: `${tmdbTrendingUrl}/${trending_type}/${time_window}?`,
    token: apiKey,
    query: query,
  });

  return data;
};

export { fetchTmdbTrending };
