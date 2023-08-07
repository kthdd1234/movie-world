const WorldLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-64 h-64 bg-green-300'>
      <div className='underline'>WorldLayout 영역</div>
      {children}
    </div>
  );
};

export default WorldLayout;
