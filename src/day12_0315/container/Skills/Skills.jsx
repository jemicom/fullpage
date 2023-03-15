import React from 'react'
import './Skills.css';
import Indecator from '../../components/Indecator';

const Skills = ({menus, item, setItem}) => {
    return (
        <div className='container' id="skills">Skills
            <Indecator menus={menus} item={item}  setItem={setItem} />  
        </div>
    )
}

export default Skills