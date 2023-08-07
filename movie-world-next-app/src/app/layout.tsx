import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <div className='bg-red-200 w-96 h-96'>
          <div className='underline'>RootLayout 영역</div>
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
