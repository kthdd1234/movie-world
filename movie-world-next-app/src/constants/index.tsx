import { EMovieListsType, ENavItemType } from '@/types/enum';
import { INavItem } from '@/types/interface';
import {
  VideoCameraOutlined,
  DesktopOutlined,
  SearchOutlined,
  StarOutlined,
  InboxOutlined,
} from '@ant-design/icons';
import {
  NowPlayingImage,
  PopularImage,
  TopRatedImage,
  UpcomingImage,
} from '../../public/images';

/** ENavItemType */
const { MOVIE, TV, SEARCH, EVALUATE, STORAGE } = ENavItemType;

/**  EMovieListsType*/
const { NOW_PLAYING, POPULAR, TOP_RATED, UPCOMING } = EMovieListsType;

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

const mainMovieList = [
  {
    movieId: 872585,
    back_drop: '/7CENyUim29IEsaJhUxIGymCRvPu.jpg',
    logo_path: '/b07VisHvZb0WzUpA8VB77wfMXwg.png',
    desc: '나는 이제 죽음이요, 세상의 파괴자가 되었다! \n 세상을 구하기 위한 천재 과학자의 핵 개발 프로젝트',
  },
  {
    movieId: 157336,
    back_drop: '/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
    logo_path: '/bxp4NhUZ1GxjdrGF8szOlsL4g0d.png',
    desc: '우린 답을 찾을 것이다. 늘 그랬듯이! \n 크리스토퍼 놀란 감독의 가장 놀라운 작품',
  },
  {
    movieId: 299534,
    back_drop: '/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
    logo_path: '/5TjlgYl3DTYRIOlpjqylAgcHVBF.png',
    desc: '모든 것을 건 최후의 결전이 시작된다! \n 어벤져스 영화 시리즈의 마지막 작품',
  },
  {
    movieId: 496243,
    back_drop: '/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg',
    logo_path: '/nc3QntWAj8YzElVuHyUCefcu5mU.png',
    desc: '악인이 없으면서도 비극이고, 광대가 없는데도 희극이다! \n 봉준호 감독의 상류층과 하류층, 두 가족의 만남을 다룬 영화',
  },
  {
    movieId: 420817,
    back_drop: '/ifyAS8GFDu8kCJB5aq7gthzqElV.jpg',
    logo_path: '/Xhxh5lXsxF9ovIRDxph8DH73eA.png',
    desc: '소원이 많아질수록 원하는 것도 많아지지! \n 디즈니 애니메이션 알라딘을 원작으로 하는 실사 영화',
  },
  {
    movieId: 330457,
    back_drop: '/1sqIkmmuQKi0k4dVepDXVFqMkoD.jpg',
    logo_path: '/9PiXLLbvLvJwB0TePwn6udekUVC.png',
    desc: '어두운 그림자가 점점 왕국을 뒤덮기 시작한다. \n 위험에 빠진 아렌델 왕국을 구해야만 하는 엘사의 놀라운 모험',
  },
];

const staffMadesMovieList = [
  {
    id: NOW_PLAYING,
    title: '상영 중인 영화 리스트',
    desc: '현재 극장에서 상영 중인 다양한 영화들을 만나보세요.',
    image: NowPlayingImage,
  },
  {
    id: POPULAR,
    title: '인기있는 영화 리스트',
    desc: '가장 인기있는 영화들을 한번에 확인 해보세요.',
    image: PopularImage,
  },
  {
    id: TOP_RATED,
    title: '평점이 높은 영화 리스트',
    desc: '인터스텔라에서 어벤져스까지 평점이 높은 영화들을 만나보세요.',
    image: TopRatedImage,
  },
  {
    id: UPCOMING,
    title: '개봉 예정 영화 리스트',
    desc: '곧 개봉할 영화들의 예고편을 확인해보세요.',
    image: UpcomingImage,
  },
];

export {
  navContentsItems,
  navServiceItems,
  kobisBaseUrl,
  kmdbBaseUrl,
  tmdbBaseUrl,
  tmdbImgUrl,
  mainMovieList,
  staffMadesMovieList,
};
