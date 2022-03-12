import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./View/Componenties/Header"
import Container from './View/MainContent/Container';
function AppContainer() {
  return (
    <div className='app_container'>
      <Container />
    </div>
  )
}

function ImagesPage() {
  return (
    <div>
      Hi this is the Images page
    </div>
  )
}
function VideoCategoryPage() {
  return (
    <div>
      Hi this is the video category page
    </div>
  )
}
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<AppContainer />} />
        <Route path="/gimages" element={<ImagesPage />} />
        <Route path="/gvideos" element={<VideoCategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
