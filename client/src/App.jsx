import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/Home"
import CreatePage from "./pages/CreateProduct"
import Navbar from "./components/Navbar"


export default function App() {

	return (
		<>
			<div>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/create" element={<CreatePage />} />
				</Routes>
			</div>
			<Navbar />
			<h1>Testeeee</h1>
    	</>
  	)
}