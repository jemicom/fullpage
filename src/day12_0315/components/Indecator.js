import { useState } from 'react'
import './Indecator.css'

const Indecator = ({menus , item , setItem})=>{ 
    return(
        <ul className='indecator'>
            {/* <li><a href="#header">header</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#skills">skills</a></li>
            <li><a href="#testimonial">testimonial</a></li>
            <li><a href="#work">work</a></li>  */}
            {
                menus.map((menu, index)=>(
                    <li key={'a'+index}
                        className={ item === menu ? "active" : ""}
                    ><a href={`#${menu}`}
                        onClick={ ()=>{ setItem(menu)} } 
                    >{menu}</a></li>
                ))
            }
        </ul>
    )
}

export default Indecator;