const HelloLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-blue-300 w-80 h-80'>
      <div className='underline'>HelloLayout 영역</div>
      {children}
    </div>
  );
};

export default HelloLayout;
