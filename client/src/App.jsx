import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/Home.jsx"
import Navbar from "./components/Navbar.jsx"
import CreateProduct from "./pages/CreateProduct.jsx"


export default function App() {

	return (
		<>
			<div>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/create" element={<CreateProduct />} />
				</Routes>
			</div>
			<Navbar />
    	</>
  	)
}