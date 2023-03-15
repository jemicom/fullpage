import React from 'react'
import { useState } from 'react'
import { images } from '../../constants';
//모듈을 index.js를 생략하면 index.js를 자동 로딩함 
import './Navbar.css';
// const menus = ["header", "about", "skills", "testimonial", "work"]
const Navbar = ({menus, item, setItem }) => {
  
  return (
    // https://en.bem.info/methodology/ 이름 짖는 방법
    // https://www.devbridge.com/articles/implementing-clean-css-bem-method/
    // https://getbem.com/introduction/
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.mu5} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {/* 메뉴 삽입 방법 */}
        {
            menus.map((menu, index)=>(
                <li key={ 'b'+index }
                    className={ item === menu ? "active" : ""}
                ><a href={`#${menu}`}
                    onClick={ ()=>{ setItem(menu)} } 
                  >{menu}</a></li>
            ))
            }
      </ul>
 
    </nav>
  );
}

export default Navbar