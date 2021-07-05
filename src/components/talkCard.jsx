import React from 'react'
import C2 from '../images/Icon.png'
import {FiChevronRight} from 'react-icons/fi'
export default ({img,head})=>{
    return <>
    <div className="ojoasfwrjwfcxs23">
        <img className="qsfajsdfe" src={img}/>
        <div className="huasisfhsfw">
        <img src={C2}/>
        </div>
        <div className="iishasdsn">
        
        <h3>{head}</h3>
        <div className="mt-4">
        <a>Watch Video <span><FiChevronRight/></span></a>

        </div>
        </div>
    </div>
    </>
}