import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/Home/Home.jsx"
import Login from "./pages/Login/Login.jsx"
import Signup from "./pages/Signup/Signup.jsx"
import {ToastContainer} from 'react-toastify'
import {AuthProvider} from './providers/AuthContext'
import ProtectedRoute from "./providers/ProtectedRoute.jsx"
import Dashboard from "./pages/Dashboard/Dashboard.jsx"

export default function App() {

	return (
		<AuthProvider>
			<div>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="*" element={<h1>Not Found</h1>} />

					<Route element={<ProtectedRoute />}>
                    	<Route path="/dashboard" element={<Dashboard />} />
                	</Route>
				</Routes>
			</div>
			<ToastContainer />
    	</AuthProvider>
  	)
}