import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/home/Home';
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotel' element={<List />} />
        <Route path='/hotel/:id' element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
