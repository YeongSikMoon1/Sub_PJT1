import { Route, Routes } from 'react-router-dom';
import Main from './pages/MainVote/index'
import AboutMe from './pages/AboutMe/AboutMe'
import Terms from './pages/Terms/Terms'
import ContactUs from './pages/ContactUs/ContactUs'
import Developer from './pages/ContactUs/Developer'
import Layout from './Layout/index';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contacts" element={<ContactUs />} />
        <Route path="/developer/:username" element={<Developer />} />
      </Route>
    </Routes>
  );
};

export default App;