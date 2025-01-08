import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Routes,Route} from 'react-router-dom';
import Home_page from './pages/Home_page';
import Movie_page from './pages/Movie_page';
import Play_page from './pages/Play_page';
import axios from 'axios';

axios.defaults.baseURL = "https://api.themoviedb.org/3/"
axios.defaults.params = {}
axios.defaults.params["api_key"] = "034802a5eae8516b27d4f46a421bd0b3";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home_page/>}/>
      <Route path='/movie/:id' element={<Movie_page/>}/>
      <Route path='/plays' element={<Play_page/>}/>
    </Routes>
  );
}

export default App;
