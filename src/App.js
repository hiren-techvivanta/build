import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register'
import ForgotPassword from './pages/auth/ForgotPassword';
import Home from './pages/Home';
import Presele from './pages/presele/Presele';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/presale' element={<Presele />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

