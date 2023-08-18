import { fetchBookItemList } from '@/api/contents/book';
import { EBookQueryType, EBookType } from '@/types/enum';

const BookPage = async () => {
  const { item } = await fetchBookItemList({
    bookType: EBookType.LIST,
    params: {
      QueryType: EBookQueryType.BESTSELLER,
    },
  });

  console.log(item);
  return <></>;
};

export default BookPage;
