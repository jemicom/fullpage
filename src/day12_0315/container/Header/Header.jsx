import React from 'react'
import './Header.css';
import Indecator from '../../components/Indecator';

const Header = ({menus, item, setItem}) => {
    return (
        <div className='container' id="header">Header
            <Indecator menus={menus} item={item}  setItem={setItem} />  
        </div>
    )
}

export default Header