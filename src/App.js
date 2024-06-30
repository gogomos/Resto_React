import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Home from './components/Home';
import AddArticle from './components/AddArticle';
import ArticleDetails from './components/ArticleDetails';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import { Container} from "react-bootstrap";



function App() {
  return (
    <BrowserRouter>
    <Container>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddArticle />} />
        <Route path="/details" element={<ArticleDetails />} />
        <Route path='/aboutUs' element={<AboutUs />} />
      </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
