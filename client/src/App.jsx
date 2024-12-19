import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/Home/Home.jsx"
import CreateProduct from "./pages/CreateProduct/CreateProduct.jsx"
import ListProduct from "./pages/ListProduct/ListProduct.jsx"
import Login from "./pages/Login/Login.jsx"
import Signup from "./pages/Signup/Signup.jsx"
import {ToastContainer} from 'react-toastify'
import {AuthProvider} from './providers/AuthContext'

export default function App() {

	return (
		<AuthProvider>
			<div>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/create" element={<CreateProduct />} />
					<Route path="/list" element={<ListProduct />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</div>
			<ToastContainer />
    	</AuthProvider>
  	)
}