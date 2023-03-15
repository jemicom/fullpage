import React from 'react'
import './Footer.css';
import Indecator from '../../components/Indecator';


const Footer = ({menus, item, setItem}) => {
    return (
        <div className='container' id="footer">Footer
            <Indecator menus={menus} item={item}  setItem={setItem} />  
        </div>
    )
}

export default Footer