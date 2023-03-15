import React from 'react'
import './Testimonial.css';
import Indecator from '../../components/Indecator';

const Testimonial = ({menus, item, setItem}) => {
    return (
        <div  className='container' id="testimonial">Testimonial
            <Indecator menus={menus} item={item}  setItem={setItem} />  
        </div>
    )
}

export default Testimonial