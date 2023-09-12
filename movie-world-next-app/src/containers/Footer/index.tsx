import Profile from './Profile';
import WebSite from './WebSite';

const Footer = () => {
  return (
    <footer className='text-white pl-52'>
      <div className='px-10 pb-12'>
        <Profile />
        <WebSite />
      </div>
    </footer>
  );
};

export default Footer;
