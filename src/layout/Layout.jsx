import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => (
  <>
    <Header />
    <main className='main-content'>
      <Outlet />
    </main>
    <Footer />
  </>
);
export default Layout;
