import { HeaderHome, HeaderApp } from '../Header/Header';
import { Outlet, useLocation} from 'react-router-dom';
import { Footer } from "../Footer/Footer";
import '../../styles/style.css'

export const Layout = () => {
    const location = useLocation();

    const isHome = location.pathname === '/'; // adjust as needed based on your routes
  
    return (
      <>
        <header id="header">
        {isHome ? <HeaderHome /> : <HeaderApp />}
        </header>
        <main id='main'>
        <Outlet />
        </main>
        <footer>
        <Footer />
        </footer>

        </>

    )
}