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
          <Route path="/catalog" element={<Catalog block_1={props.block_1} block_2={props.block_2} block_3={props.block_3} block_4={props.block_4} block_5={props.block_5} block_6={props.block_6}/>} />
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
