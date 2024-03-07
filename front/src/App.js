import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import HomeCategories from './Pages/HomeCategories';
import Footer from './Components/Footer/Footer';
import Eve from './Pages/Eve';
import Eve1 from './Pages/Eve1';
import Eve3 from './Pages/Eve3';
import Vendors from './Pages/Vendors';
import Vendor1 from './Pages/Vendors/Vendor1';
import Vendor2 from './Pages/Vendors/Vendor2';
import Vendor3 from './Pages/Vendors/Vendor3';
import Vendor4 from './Pages/Vendors/Vendor4';
import Vendor5 from './Pages/Vendors/Vendor5';
import Vendor7 from './Pages/Vendors/Vendor7';
import Vendor8 from './Pages/Vendors/Vendor8';
import Resources from './Pages/Resources';
import Account from './Pages/Account';
import Res1 from './Pages/Res1';
import Res2 from './Pages/Res2';




function App() {
  return (
    <div>
      <Router> 
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Fertilizers' element={<HomeCategories category="Fertilizers" />} />
          <Route path='/Pesticides' element={<HomeCategories category="Pesticides" />} />
          <Route path='/Equipments' element={<HomeCategories category="Equipments" />} />
          <Route path='/Seeds' element={<HomeCategories category="Seeds" />} />
          <Route path="Product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/eve' element={<Eve/>}/>
          <Route path='/eve1' element={<Eve1/>}/>
          <Route path='/eve3' element={<Eve3/>}/>

          <Route path='/vendors' element={<Vendors/>}/>
          <Route path='/v1' element={<Vendor1/>}/>
          <Route path='/v2' element={<Vendor2/>}/>
          <Route path='/v3' element={<Vendor3/>}/>
          <Route path='/v4' element={<Vendor4/>}/>
          <Route path='/v5' element={<Vendor5/>}/>

          <Route path='/v7'  element={<Vendor7/>}/>
          <Route path='/v8' element={<Vendor8/>}/>

          <Route path='/resources' element={<Resources/>}/>
          <Route path='/r1' element={<Res1/>}/>
          <Route path='/r2' element={<Res2/>}/>
          <Route path='/account' element={<Account/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
