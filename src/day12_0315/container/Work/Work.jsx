import React from 'react'
import './Work.css';
import Indecator from '../../components/Indecator';

const Work = ({menus, item, setItem}) => {
    return (
        <div className='container' id="work">Work
            <Indecator menus={menus} item={item}  setItem={setItem} />  
        </div>
    )
}

export default Work