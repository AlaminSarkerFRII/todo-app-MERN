import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './Login/Login';
import Register from './Login/Register';

function App() {
  return (
    <>
    <Routes>
     <Route path ="/" element={<Home></Home>}></Route>
     <Route path="login" element={<Login/>}></Route>
     <Route path="register" element={<Register/>}></Route>
    </Routes>
    </>
  );
}

export default App;
