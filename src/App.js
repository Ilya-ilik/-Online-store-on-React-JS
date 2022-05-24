// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import File from './components/File';
import Navbar from './components/Navbar';
import Catalog from './components/Catalog/Catalog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Balls_without_pattern from './components/Balls_without_pattern';
import News_and_promotions from './components/News_and_promotions';
import Modal from './components/Modal/Modal';

function App(props) {
  //
 
  //
  return (
    <BrowserRouter>
     <div className="App">



     





      <Header/>
      {props.img1} {/* Проброшенная через просы картинка логотипа */}
      <Navbar/>
      {/* <File/> 
      <Catalog/> */}
      <Routes>
          <Route path="/file" element={<File/>} />
          <Route path="/catalog" element={<Catalog blockCatalog={props.blockCatalog} />} />
          <Route path="/balls" element={<Balls_without_pattern/>} />
          <Route path="/news" element={<News_and_promotions/>} />
        </Routes>
        
        
      <br></br>
      
      
      
      
      

      
    </div>
    </BrowserRouter>
    
   
  );
}

export default App;
//Инструменты которые надо применить в этом проекте для отработки:
//Компоненты (применил)
//Роуты
//Пропсы (применил)
//Редакс
//Можно еще  мапинг
//
//
