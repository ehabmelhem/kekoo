import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./View/Componenties/Header"
import Container from './View/MainContent/Container';
function App() {
  return (
    <div className="app">
          <Header/>
        <Routes>
        <Route path="/" element={<Container />} />
      </Routes>
    </div>
  );
}

export default App;
