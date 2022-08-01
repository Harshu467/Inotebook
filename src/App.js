import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Alert from './Components/Alert/Alert';
import { useState } from 'react';
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert />
          <div className="container">
            <Routes>
              <Route exact path='/' index element={<Home />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/signup' element={<Signup />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
