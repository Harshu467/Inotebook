import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NoteState from './context/notes/NoteState';
// import Alert from './Components/Alert/Alert';
function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          {/* <Alert /> */}
          <div className="container">
            <Routes>
              <Route exact path='/' index element={<Home />} />
              <Route exact path='/about' element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
