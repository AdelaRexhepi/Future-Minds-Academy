import { Route, Routes } from 'react-router-dom';
import "./assets/Styles/nav.css"
import "./assets/Styles/style.css"
import "./assets/Styles/login.css"
import About from './pages/About';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import Signin from './pages/Signin';


function App() {
  return (
    <>
      <Routes>
        <Route element={<MainPage />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
        <Route path='/login' element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
