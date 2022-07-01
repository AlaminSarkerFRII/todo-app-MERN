import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './Login/Login';
import Register from './Login/Register';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import ComTask from './components/ComTask';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function App() {
  return (
    <>
    <Header/>
    <Routes>
     <Route path ="/" element={<Home></Home>}></Route>
     <Route path = "/todos" element={<Todos/>}></Route>
     <Route path="/addTodo" element={<AddTodo/>}></Route>
     <Route path="/task" element={<ComTask/>}></Route>
     <Route path="login" element={<Login/>}></Route>
     <Route path="register" element={<Register/>}></Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
