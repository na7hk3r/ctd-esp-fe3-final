import { Route, Routes } from 'react-router-dom'
import { routes } from './utils/routes'
import Navbar from "./Components/Navbar";
import Home from '../src/Routes/Home'
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import Contact from './Routes/Contact'
import Footer from "./Components/Footer"


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.contact} element={<Contact />} />
            <Route path={routes.detail} element={<Detail />} />
            <Route path={routes.favs} element={<Favs />} />
          </Routes>
          <Footer />
      </div>
  );
}

export default App;
