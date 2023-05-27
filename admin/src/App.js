import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/login'
import Hotels from './pages/Hotels/hotels'
import Users from './pages/Users/users'
import Dashboard from './pages/Dashboard/dashboard'
import Update from './pages/Update/update'
import CreateHotel from './pages/CreateHotel/createHotel'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />

        <Route path="/hotels" element={<Hotels />} />
        <Route path="/users" element={<Users />} />
        
        <Route path="/create-hotel" element={<CreateHotel />} />

        
        <Route path="/hotels/update/:hotelId" element={<Update />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App