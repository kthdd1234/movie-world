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

/** tmdbImgUrl */
const tmdbImgUrl = 'http://image.tmdb.org/t/p/original';

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

const mainSetionMovieList = [
  {
    movieId: 157336,
    back_drop: '/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
    logo_path: '/bxp4NhUZ1GxjdrGF8szOlsL4g0d.pn',
    desc: '우린 답을 찾을 것이다. 늘 그랬듯이! \n 크리스토퍼 놀란 감독의 놀라운 우주 세계관',
  },
  {
    movieId: 0,
    back_drop: '',
    logo_path: '',
    desc: '',
  },
];

export {
  navContentsItems,
  navServiceItems,
  kobisBaseUrl,
  kmdbBaseUrl,
  tmdbBaseUrl,
  tmdbImgUrl,
};
