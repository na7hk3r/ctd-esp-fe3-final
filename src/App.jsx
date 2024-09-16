import { Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { Contact } from './Routes/Contact';
import { Detail } from './Routes/Detail';
import { Favs } from './Routes/Favs';
import { Home } from './Routes/Home';

export default function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/favs" element={<Favs />} />
				<Route path="/detail/:id" element={<Detail />} />
			</Routes>
			<Footer />
		</>
	);
}
