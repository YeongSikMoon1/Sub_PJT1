import "./Layout.css"
import Header from './Header/Header'
import Footer from "./Footer/Footer";
import Tabs from './Tabs/tabs'
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <div>
      <Header />
      <Tabs />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;


