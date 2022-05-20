// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import File from './components/File';
import Navbar from './components/Navbar';

function App(props) {
  return (
    <div className="App">
      <Header/>
      {props.img1} {/* Проброшенная через просы картинка логотипа */}
      <Navbar/>
      <File/>

      
    </div>
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
