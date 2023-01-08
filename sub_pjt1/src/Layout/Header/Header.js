import "./Header.css"
import { useNavigate  } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

const Layout = () => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 960 })
    return isDesktop ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 959 })
    return isMobile ? children : null
  }
  const navigate = useNavigate();

  const goHome = () => {
    // articles 경로로 이동
    navigate('/');
  };

  return (
    <div>
      <Desktop>
        <header className="header">
          <div>
            <img onClick={goHome} className="logo" src="img/goat1.png" alt="Logo" />
          </div>
          <div>
            <nav className = 'navigation'>
            <ul>
              <li>
                Vote
              </li>
              <li>
                My Vote 
              </li>
              <li>
                Create a Vote
              </li>  
            </ul>
            </nav>
          </div>
          <div>
            <img className="search" src="img/magnification.png" alt="search" />
            sign in
          </div>
        </header>
      </Desktop>
      
      <Mobile>
        <header className="header">
          <div>
            <nav className = 'navigation'>
              <img className="hamburger" src="img/hamburger.png" alt="menus" />
            </nav>
          </div>
          <div>
            <img onClick={goHome} className="logo" src="img/goat1.png" alt="Logo" />
          </div>
          <div>
            <img className="search" src="img/magnification.png" alt="search" />
          </div>
        </header>
      </Mobile>
    </div>
  );
};

export default Layout;


