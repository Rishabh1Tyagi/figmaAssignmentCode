// app
import './App.css';
import Header from './components/Header/Header';
import Login from "./components/Login/Login";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import NoPage from "./components/NotFound/NoPage";
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/shoppingCart" element={<ShoppingCart/>} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </main>
    </div>
  );
}

export default App;
