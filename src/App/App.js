import { BrowserRouter as Routers, Route, Routes} from 'react-router-dom'

// import pages from pages/index.js
import {Contact, Home, Login, Register, Reset} from '../pages/';

// import components from componets/index.js
import {Header, Footer} from '../components/';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
      <>
    < ToastContainer />  

      <Routers> 
       <Header />       
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          
        </Routes>

        <Footer />
      </Routers>     
      </>
    
  );
}

export default App;
