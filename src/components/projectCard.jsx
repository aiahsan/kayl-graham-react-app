import React from 'react'
import {FiChevronRight} from 'react-icons/fi'

export default ({cstatus,title,para,img})=>{
    return <>
    <div className="iafeosawq">
        <img src={img}/>
        <div className="iishasdsn">
            <div >
                <span className="ojasdifewq">{cstatus}</span>
            </div>
            <h1>{title}</h1>
            <p>{para}</p>
            <a>Read Blog <span><FiChevronRight/></span></a>
        </div>
    </div>
    </>
}