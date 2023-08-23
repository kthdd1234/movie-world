import { ENavItemType } from '@/types/enum';
import { INavItem } from '@/types/interface';
import {
  VideoCameraOutlined,
  DesktopOutlined,
  SearchOutlined,
  StarOutlined,
  InboxOutlined,
} from '@ant-design/icons';

const { MOVIE, TV, SEARCH, EVALUATE, STORAGE } = ENavItemType;

/** kobisBaseUrl */
const kobisBaseUrl = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice`;

/** kmdbBaseUrl */
const kmdbBaseUrl = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?`;

/** tmdbBaseUrl */
const tmdbBaseUrl = 'https://api.themoviedb.org/3';

const navContentsItems: INavItem[] = [
  {
    icon: <VideoCameraOutlined />,
    name: '영화',
    type: MOVIE,
    path: '/movie',
  },
  {
    icon: <DesktopOutlined />,
    name: 'TV',
    type: TV,
    path: '/tv',
  },
];

const navServiceItems: INavItem[] = [
  { icon: <SearchOutlined />, name: '검색', type: SEARCH, path: '/search' },
  { icon: <StarOutlined />, name: '평가', type: EVALUATE, path: '/evaluate' },
  { icon: <InboxOutlined />, name: '보관함', type: STORAGE, path: '/storage' },
];

const interstellarBgUrl =
  'http://image.tmdb.org/t/p/original/pbrkL804c8yAv3zBZR4QPEafpAR.jpg';

export {
  navContentsItems,
  navServiceItems,
  interstellarBgUrl,
  kobisBaseUrl,
  kmdbBaseUrl,
  tmdbBaseUrl,
};
