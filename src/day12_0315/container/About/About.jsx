import React from 'react'
import './About.css';
import Indecator from '../../components/Indecator';

const About = ({menus,item, setItem}) => {
    return (
        <div className='container' id="about">
            About
            <Indecator menus={menus} item={item} setItem={setItem} />    
        </div>
    )
}

export default About