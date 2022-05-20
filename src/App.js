// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import File from './components/File';
import Navbar from './components/Navbar';
import Catalog from './components/Catalog/Catalog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
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
          <Route path="/catalog" element={<Catalog/>} />
        </Routes>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
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
