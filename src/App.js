import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Main } from './components/Main';
import { Signup } from './components/Singup';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
