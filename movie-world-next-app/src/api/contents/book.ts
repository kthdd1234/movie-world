import {
  IParamsBookItemList,
  // IParamsSearchBookItem,
  IResponceBookItemList,
} from '@/types/interface';
import { getFetch } from '..';

/** aladinBaseUrl */
const aladinBaseUrl = `http://www.aladin.co.kr/ttb/api`;

const fetchBookItemList = async ({ bookType, params }: IParamsBookItemList) => {
  const data: IResponceBookItemList | null = await getFetch({
    url: `${aladinBaseUrl}/${bookType}.aspx?`,
    params: {
      ttbkey: process.env.NEXT_PUBLIC_ALADIN_API_KEY,
      output: 'JS',
      Version: '20131101',
      SearchTarget: 'Book',
      Cover: 'Big',
      ...params,
    },
  });

  if (data == null) throw new Error(`${data}`);
  return data;
};

export { fetchBookItemList };
