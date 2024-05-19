import './App.css';
import{BrowserRouter,
  Routes,
  Route,
  }from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Users from './components/Users';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/*<Route path="/users" element={<Users/>} />*/}
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter> 
    </>
    
  );
}

export default App;
