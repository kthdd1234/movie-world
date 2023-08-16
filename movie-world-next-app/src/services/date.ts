import moment from 'moment';

/** 과거의 날짜 구하기 (ex.20230807) */
const beforeDateValue = ({ day }: { day: number }) => {
  const now = moment();
  return now.subtract(day, 'd').format('YYYYMMDD');
};

export { beforeDateValue };
