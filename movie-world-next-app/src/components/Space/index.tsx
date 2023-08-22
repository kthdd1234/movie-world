import { ISpace } from '@/types/interface';

const Space = ({ w, h }: ISpace) => {
  return <div className={`w-[${w}] h-[${h}]`} />;
};

export default Space;
