import React from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='d1'><Link to="file">Файл тестовая компонента (Главная)</Link></div>
            <div className='d2'><Link to="catalog">Каталок товаров</Link></div>
            <div className='d3'>Новости и акции</div>
            <div className='d4'>Отзывы и комментарии</div>
            <div className='d5'>Вопросы</div>
            <div className='d6'>Доставка и оплата</div>
            <div className='d7'>Статьи</div>
            <div className='d8'>Контакты</div>

            

            
        </div>
         
            
      
    )
}

export default Navbar;