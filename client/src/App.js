import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter ,Route, Routes ,Link} from 'react-router-dom'
import Homescreen from './screen/Homescreen';
import Bookingscreen from './screen/Bookingscreen';
import Registerscreen from './screen/Registerscreen';
import Logingscreen from './screen/Logingscreen';
import Profilescreen from './screen/Profilescreen';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Homescreen />} exact />
          <Route path="/book/:roomid/:fromdate/:todate" element={<Bookingscreen/>} exact /> 
          <Route path="/register" element={<Registerscreen/>} exact /> 
          <Route path="/login" element={<Logingscreen/>} exact />  
          <Route path="/profile" element={<Profilescreen/>} exact />  
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

