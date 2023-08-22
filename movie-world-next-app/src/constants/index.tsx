import { ENavItemType } from '@/types/enum';
import { INavItem } from '@/types/interface';
import {
  VideoCameraOutlined,
  AppstoreOutlined,
  ReadOutlined,
  SearchOutlined,
  StarOutlined,
  InboxOutlined,
} from '@ant-design/icons';

const bgColor = '#141517';

const { MOVIE, WEBTOON, BOOK, SEARCH, EVALUATE, SAVE } = ENavItemType;

const navContentsItems: INavItem[] = [
  {
    icon: <VideoCameraOutlined />,
    name: '영화',
    type: MOVIE,
    path: '/browse/movie',
  },
  {
    icon: <AppstoreOutlined />,
    name: '웹툰',
    type: WEBTOON,
    path: '/browse/webtoon',
  },
  { icon: <ReadOutlined />, name: '책', type: BOOK, path: '/browse/book' },
];

const navServiceItems: INavItem[] = [
  { icon: <SearchOutlined />, name: '검색', type: SEARCH, path: '/search' },
  { icon: <StarOutlined />, name: '평가', type: EVALUATE, path: '/evaluate' },
  { icon: <InboxOutlined />, name: '보관함', type: SAVE, path: '/library' },
];

export { bgColor, navContentsItems, navServiceItems };
