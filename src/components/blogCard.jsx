import React from 'react'
import C1 from '../images/1.png'
import {FiChevronRight} from 'react-icons/fi'
export default ({img,type,title,date})=>{
    return <>
    <div className="ojoasfwrjwfcxs">
        <img src={img}/>
        <div className="iishasdsn">
        <p>{type}</p>
        <h3>{title}</h3>
        <h6>{date}</h6>
        <a>Read Blog <span><FiChevronRight/></span></a>
        </div>
    </div>
    </>
}