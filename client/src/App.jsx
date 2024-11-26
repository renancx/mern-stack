import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'

export default function App() {
	return (
		<div>
			<Navbar/>
			<Routes>
				<Route path="/" element={<HomePage/>}/>
				<Route path="/create" element={<CreatePage/>}/>
			</Routes>
		</div>
	)
}