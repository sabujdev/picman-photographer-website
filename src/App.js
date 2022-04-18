
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Header/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Checkout from './Pages/Checkout/Checkout';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Login from './Pages/Login/Login/Login';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

        
        <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        
       
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
