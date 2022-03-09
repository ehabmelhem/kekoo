import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  console.log(useSelector((state) => state));
  return (
    <div className="app">
    </div>
  );
}

export default App;
