import { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Nav from './components/Nav'
import Footer from './components/Footer'

export const UserContext = createContext()

function App() {
	const [userState, setUserState] = useState({})

	return (
		<BrowserRouter>
			<UserContext.Provider value={{ userState, setUserState }}>
				<Nav />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
				</Routes>
				<Footer />
			</UserContext.Provider>
		</BrowserRouter>
	)
}

export default App