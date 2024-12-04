import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/Home/Home.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import CreateProduct from "./pages/CreateProduct/CreateProduct.jsx"
import ListProduct from "./pages/ListProduct/ListProduct.jsx"


export default function App() {

	return (
		<>
			<div>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/create" element={<CreateProduct />} />
					<Route path="/list" element={<ListProduct />} />
				</Routes>
			</div>
			<Navbar />
    	</>
  	)
}