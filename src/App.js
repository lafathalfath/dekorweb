import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from "./pages/Home";
import Services from './pages/Services';
import Contact from "./pages/Contact";
import Order from './pages/Order';
import Catalog from "./pages/Catalog";
import NoPages from "./pages/NoPages";
import Footer from "./pages/components/Footer"

function App() {
  return (
    <body>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='services' element={<Services/>}/>
                <Route path='catalog' element={<Catalog/>}/>
                <Route path='order' element={<Order/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='*' element={<NoPages/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </body>
  );
}

export default App;
