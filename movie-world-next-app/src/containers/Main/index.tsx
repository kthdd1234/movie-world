const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='w-screen h-screen pt-16 pl-52 bg-slate-300'>
      main 영역{children}
    </main>
  );
};

export default Main;
