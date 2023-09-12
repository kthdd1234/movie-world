import { IPropsSmallText } from '@/types/interface';

const SmallText = ({
  name,
  isPoint,
  isUnderline,
  link,
  onClick,
}: IPropsSmallText) => {
  return (
    <div
      className={`cursor-pointer ${isUnderline && 'underline'} ${
        isPoint && 'font-bold'
      }`}
      onClick={() => onClick(link)}
    >
      {name}
    </div>
  );
};

export default SmallText;
