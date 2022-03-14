import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./View/Componenties/Header"
import Container from './View/MainContent/Container';
import ImageComponent from './View/Router/Catagory/gProducts_images/Componenties/ImageComponent';
import ImgContainer from './View/Router/Catagory/gProducts_images/ImgContainer'
import VideosContainer from './View/Router/Catagory/gProducts_videos/VideosContainer'
import ChatbotComponent from './View/MainContent/Chatbot/Componenties/ChatbotComponent'
import ProfilePage from "./View/Router/Catagory/ProfilePage/ProfilePage"
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
      <ImgContainer/>
    </div>
  )
}
function VideoCategoryPage() {
  return (
    <div>
<VideosContainer/>    
</div>
  )
}
function Profilegage() {
  return (
    <div>
<ProfilePage/>    
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
        <Route path="/profile" element={<Profilegage />} />
      </Routes>
      <ChatbotComponent/>
    </div>
  );
}

export default App;
