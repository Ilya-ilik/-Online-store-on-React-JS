import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {img1} from './redux/state'; //Проброс через пропсы картинки img1
import {block_1} from './redux/state'; //Блок каталога 1
import {block_2} from './redux/state'; //Блок каталога 2
import {block_3} from './redux/state'; //Блок каталога 3
import {block_4} from './redux/state'; //Блок каталога 4
import {block_5} from './redux/state'; //Блок каталога 5
import {block_6} from './redux/state'; //Блок каталога 6
 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
    img1={img1}
     block_1={block_1}
     block_2={block_2} 
     block_3={block_3}
     block_4={block_4}
     block_5={block_5} 
     block_6={block_6}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
