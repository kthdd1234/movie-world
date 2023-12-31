import type { Metadata } from 'next';
import Header from '@/containers/Header';
import Nav from '@/containers/Nav';
import Main from '@/containers/Main';
import Footer from '@/containers/Footer';
import StyledComponentsRegistry from '@/components/Ant/AntdRegistry';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head>
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
      </head>
      <body className='overflow-x-hidden bg-black'>
        <StyledComponentsRegistry>
          <Header />
          <Nav />
          <Main children={children} />
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
