import React from 'react';
import './DappCards.css';

function Cards ({Title,Content}){

    return(
        <div className='card-container-welcome'>
            <div className='title-container-welcome'>
            <span className='title-welcome'>{Title}</span>
            </div>
            <div className='content-welcome'>
            <input type={Title} name={Content}/>
            </div>
        </div>
    )
}

export default Cards;