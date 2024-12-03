import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/Home.jsx"
import Navbar from "./components/Navbar.jsx"
import CreateProduct from "./pages/CreateProduct.jsx"
import ListProduct from "./pages/ListProduct.jsx"


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