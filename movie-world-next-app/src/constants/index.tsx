import { EListsType, ENavItemType } from '@/types/enum';
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
  NolanMoviesImage,
} from '../../public/images';

/** ENavItemType */
const { MOVIE, TV, SEARCH, EVALUATE, STORAGE } = ENavItemType;

/**  EListsType */
const { NOW_PLAYING, POPULAR, TOP_RATED, UPCOMING, NOLAN_MOVIES } = EListsType;

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
    id: 872585,
    back_drop: '/7CENyUim29IEsaJhUxIGymCRvPu.jpg',
    logo_path: '/b07VisHvZb0WzUpA8VB77wfMXwg.png',
    desc: '나는 이제 죽음이요, 세상의 파괴자가 되었다! \n 세상을 구하기 위한 천재 과학자의 핵 개발 프로젝트',
  },
  {
    id: 157336,
    back_drop: '/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
    logo_path: '/bxp4NhUZ1GxjdrGF8szOlsL4g0d.png',
    desc: '우린 답을 찾을 것이다. 늘 그랬듯이! \n 크리스토퍼 놀란 감독의 가장 놀라운 작품',
  },
  {
    id: 299534,
    back_drop: '/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
    logo_path: '/5TjlgYl3DTYRIOlpjqylAgcHVBF.png',
    desc: '모든 것을 건 최후의 결전이 시작된다! \n 어벤져스 영화 시리즈의 마지막 작품',
  },
  {
    id: 496243,
    back_drop: '/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg',
    logo_path: '/nc3QntWAj8YzElVuHyUCefcu5mU.png',
    desc: '악인이 없으면서도 비극이고, 광대가 없는데도 희극이다! \n 봉준호 감독의 상류층과 하류층, 두 가족의 만남을 다룬 영화',
  },
  {
    id: 420817,
    back_drop: '/ifyAS8GFDu8kCJB5aq7gthzqElV.jpg',
    logo_path: '/Xhxh5lXsxF9ovIRDxph8DH73eA.png',
    desc: '소원이 많아질수록 원하는 것도 많아지지! \n 디즈니 애니메이션 알라딘을 원작으로 하는 실사 영화',
  },
  {
    id: 330457,
    back_drop: '/1sqIkmmuQKi0k4dVepDXVFqMkoD.jpg',
    logo_path: '/9PiXLLbvLvJwB0TePwn6udekUVC.png',
    desc: '어두운 그림자가 점점 왕국을 뒤덮기 시작한다. \n 위험에 빠진 아렌델 왕국을 구해야만 하는 엘사의 놀라운 모험',
  },
];

const staffMadesMovieList = [
  {
    id: NOW_PLAYING,
    title: '상영 중인 영화 리스트',
    sub_title: '현재 극장에서 상영 중인 다양한 영화',
    movie_titles: '오펜하이머, 바비, 엘리멘탈 등',
    image: NowPlayingImage,
  },
  {
    id: POPULAR,
    title: '인기있는 영화 리스트',
    sub_title: '많은 사람들이 좋아하는 영화',
    movie_titles: '하스 오브 스톤, 메가로톤 2, 스파이맨 등',
    image: PopularImage,
  },
  {
    id: TOP_RATED,
    title: '평점이 높은 영화 리스트',
    sub_title: 'TMDB 기준으로 평점이 높은 영화',
    movie_titles: '쇼생크 탈출, 쉰들러 리스트, 센과 치히로의 행방불명 등',
    image: TopRatedImage,
  },
  {
    id: UPCOMING,
    title: '개봉 예정 영화 리스트',
    sub_title: '다음 달 개봉 예정 영화',
    movie_titles: '닌자터틀: 뮤턴트 대소동, 거미집, 조이 라이드 등',
    image: UpcomingImage,
  },
  {
    id: NOLAN_MOVIES,
    title: '감독 작품 리스트',
    sub_title: '크리스토퍼 놀란 감독의 놀라운 작품 세계관',
    movie_titles: '인셉션, 다크 나이트, 인터스텔라 등',
    image: NolanMoviesImage,
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
