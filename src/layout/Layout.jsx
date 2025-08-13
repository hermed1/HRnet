// import Header from './Header/Header';
// import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <>
    {/* <Header /> */}
    <Outlet />
    {/* <Footer /> */}
  </>
);
export default Layout;
