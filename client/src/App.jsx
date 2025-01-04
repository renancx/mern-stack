import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/Home/Home.jsx"
import Login from "./pages/Login/Login.jsx"
import Signup from "./pages/Signup/Signup.jsx"
import {ToastContainer} from 'react-toastify'
import {AuthProvider} from './providers/AuthContext'
import ProtectedRoute from "./providers/ProtectedRoute.jsx"
import Dashboard from "./pages/Dashboard/Dashboard.jsx"
import About from "./pages/About/About.jsx"
import Product from "./pages/Product/Product.jsx"

export default function App() {

	return (
		<AuthProvider>
			<>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<h1>Not Found</h1>} />
					<Route path="/product/:id" element={<Product />} />

					<Route element={<ProtectedRoute />}>
                    	<Route path="/dashboard" element={<Dashboard />} />
                	</Route>
				</Routes>
			</>
			<ToastContainer />
    	</AuthProvider>
  	)
}