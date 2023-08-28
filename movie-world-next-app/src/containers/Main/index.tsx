const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`w-screen h-full pt-16 pl-52 bg-black z-40`}>
      <div className='px-10 py-12'>{children}</div>
    </main>
  );
};

export default Main;
