import { EContentsSplitType, EListsType, ENavItemType } from '@/types/enum';
import { INavItem } from '@/types/interface';
import {
  VideoCameraOutlined,
  DesktopOutlined,
  SearchOutlined,
  StarOutlined,
  InboxOutlined,
  MailOutlined,
  GithubOutlined,
  BoldOutlined,
  InstagramOutlined,
} from '@ant-design/icons';
import {
  NowPlayingImage,
  PopularImage,
  TopRatedImage,
  UpcomingImage,
  TodayTVImage,
  WeekTVImage,
  LawOrderImage,
  BreakinkBad,
} from '../../public/images';

/** ENavItemType */
const { MOVIE, TV, SEARCH, EVALUATE, STORAGE } = ENavItemType;

/** EContentsSplitType */
const { CONTENTS_INFO, RELATED_CONTENTS, SEASON_INFO } = EContentsSplitType;

/**  EListsType */
const { NOW_PLAYING, POPULAR, TOP_RATED, UPCOMING, AIRING_TODAY, ON_THE_AIR } =
  EListsType;

/** kobisBaseUrl */
const kobisBaseUrl = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice`;

/** kmdbBaseUrl */
const kmdbBaseUrl = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?`;

/** tmdbBaseUrl */
const tmdbBaseUrl = 'https://api.themoviedb.org/3';

/** tmdbImgUrl */
const tmdbImgUrl = 'http://image.tmdb.org/t/p/original';

/** youtubeWatchUrl */
const youtubeWatchUrl = 'https://www.youtube.com/watch?v=';

const navContentsItems: INavItem[] = [
  {
    icon: <VideoCameraOutlined />,
    name: '영화',
    type: MOVIE,
    path: '/browse/movie',
  },
  {
    icon: <DesktopOutlined />,
    name: 'TV',
    type: TV,
    path: '/browse/tv',
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

const initStaffMadesInfo = {
  id: '',
  title: '',
  sub_title: '',
  movie_titles: '',
  image: null,
};

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
    title: '인기 있는 영화 리스트',
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
];

/** */
const profileInfo = [
  {
    name: '프론트엔드 개발자 김동현',
    link: 'https://kimdonghyun.me/',
    isPoint: false,
    isUnderline: false,
  },
  {
    name: '서울 마포구 염리동 10-143',
    link: 'https://kimdonghyun.me/',
    isPoint: false,
    isUnderline: false,
  },
  {
    name: '010-2455-3704',
    link: 'https://kimdonghyun.me/',
    isPoint: true,
    isUnderline: false,
  },
  {
    name: 'kthdd1234@gmail.com',
    link: 'mailto:kthdd1234@gmail.com',
    isPoint: true,
    isUnderline: true,
  },
];

const webSiteInfo = [
  {
    name: 'github 주소',
    link: 'https://github.com/kthdd1234',
    isPoint: false,
    isUnderline: false,
  },
  {
    name: '개발자 웹사이트',
    link: 'https://kimdonghyun.me/',
    isPoint: false,
    isUnderline: false,
  },
  {
    name: '개발자 블로그',
    link: 'https://velog.io/@halley_123',
    isPoint: false,
    isUnderline: false,
  },
];

const footerIcons = [
  {
    icon: <MailOutlined />,
    link: 'mailto:kthdd1234@gmail.com',
  },
  {
    icon: <GithubOutlined />,
    link: 'https://github.com/kthdd1234',
  },

  {
    icon: <BoldOutlined />,
    link: 'https://velog.io/@halley_123',
  },
  {
    icon: <InstagramOutlined />,
    link: 'https://www.instagram.com/gimdonghyeon4937',
  },
];

const mainTVList = [
  {
    id: 1396,
    back_drop: '/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg',
    logo_path: '/chw44B2VnLha8iiTdyZcIW0ZELC.png',
    desc: '2008년 1월 AMC에서 방영을 시작한 범죄 스릴러 \n 총 62편으로 구성된 다섯 시즌으로 종영되다!',
  },
  {
    id: 37854,
    back_drop: '/a6ptrTUH1c5OdWanjyYtAkOuYD0.jpg',
    logo_path: '/pPhy19oNm236AkOT96wAIzY0eD8.png',
    desc: '해적왕을 꿈꾸는 소년 루피의 모험담을 그린 작품! \n 해적왕을 꿈꾸는 루피와 동료들의 파란만장한 모험담',
  },
  {
    id: 85937,
    back_drop: '/nTvM4mhqNlHIvUkI1gVnW6XP7GG.jpg',
    logo_path: '/6vUQ6lB5UlZAxCDYK9Tlu2l8lfs.png',
    desc: '2019년 4월 Tokyo MX에서 방영을 시작한 애니메이션 \n 지금 탄지로가 복수의 칼날을 높이 든다.',
  },
  {
    id: 100088,
    back_drop: '/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg',
    logo_path: '/msYtgZbEo8tAOJ37T50kgqulpKf.png',
    desc: '팬데믹으로 인류 대다수가 괴생명체가 되어버린 근미래 \n 미국을 횡단하는 두 사람의 이야기를 다룬 아포칼립스물',
  },
  {
    id: 87108,
    back_drop: '/20eIP9o5ebArmu2HxJutaBjhLf4.jpg',
    logo_path: '/7kqnlYTsYvlOdKWCnl2QrsNAclk.png',
    desc: '2019년 5월 HBO에서 방영을 시작한 미니시리즈 \n 인류 최악의 인재로 기록된 구 소련 체르노빌 원자력 발전소 사태를 재구성',
  },
  {
    id: 64010,
    back_drop: '/oDEPqQstDYUHUxzyHotV8yrnzGk.jpg',
    logo_path: '/mfMn2bjWYEOUEMIORhKJFVEj4EA.png',
    desc: '2015년 11월 tvN에서 방영을 시작한 드라마 \n 쌍팔년도 쌍문동, 한 골목 다섯 가족의 왁자지껄 코믹 가족극',
  },
];

const staffMadesTVList = [
  {
    id: POPULAR,
    title: '인기 있는 TV 리스트',
    sub_title: '많은 사람들이 좋아하는 TV 프로그램',
    movie_titles: '로 앤 오더, 4차원 가족 카다시안 따라잡기 등',
    image: LawOrderImage,
  },
  {
    id: TOP_RATED,
    title: '평점이 높은 TV 리스트',
    sub_title: 'TMDB 기준으로 평점이 높은 TV 프로그램',
    movie_titles: '브레이킹 배드, 아케인, 원피스 등',
    image: BreakinkBad,
  },
  {
    id: AIRING_TODAY,
    title: '오늘 방송 되는 TV 리스트',
    sub_title: '다양한 채널에서 방송 되는 프로그램',
    movie_titles: '러브 아일랜드: 네덜란드 & 벨기에, 하늘의 인연 등',
    image: TodayTVImage,
  },
  {
    id: ON_THE_AIR,
    title: '7일 동안의 TV 리스트',
    sub_title: '오늘부터 일주일간 방송 되는 프로그램',
    movie_titles: '타게스샤우, 생명을 건 포획, 우아한 제국 등',
    image: WeekTVImage,
  },
  {
    id: POPULAR,
    title: '인기 있는 TV 리스트',
    sub_title: '많은 사람들이 좋아하는 TV 프로그램',
    movie_titles: '로 앤 오더, 4차원 가족 카다시안 따라잡기 등',
    image: LawOrderImage,
  },
  {
    id: TOP_RATED,
    title: '평점이 높은 TV 리스트',
    sub_title: 'TMDB 기준으로 평점이 높은 TV 프로그램',
    movie_titles: '브레이킹 배드, 아케인, 원피스 등',
    image: BreakinkBad,
  },
  {
    id: AIRING_TODAY,
    title: '오늘 방송 되는 TV 리스트',
    sub_title: '다양한 채널에서 방송 되는 프로그램',
    movie_titles: '러브 아일랜드: 네덜란드 & 벨기에, 하늘의 인연 등',
    image: TodayTVImage,
  },
  {
    id: ON_THE_AIR,
    title: '7일 동안의 TV 리스트',
    sub_title: '오늘부터 일주일간 방송 되는 프로그램',
    movie_titles: '타게스샤우, 생명을 건 포획, 우아한 제국 등',
    image: WeekTVImage,
  },
];

const movieSplitList = [
  { id: CONTENTS_INFO, name: '콘텐츠 정보' },
  { id: RELATED_CONTENTS, name: '관련 콘텐츠' },
];

const tvSplitList = [
  { id: CONTENTS_INFO, name: '콘텐츠 정보' },
  { id: SEASON_INFO, name: '시즌 정보' },
  { id: RELATED_CONTENTS, name: '관련 콘텐츠' },
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
  youtubeWatchUrl,
  initStaffMadesInfo,
  profileInfo,
  webSiteInfo,
  footerIcons,
  mainTVList,
  staffMadesTVList,
  movieSplitList,
  tvSplitList,
};
