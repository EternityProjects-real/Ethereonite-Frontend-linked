import React from 'react';
import './NftCard.css';


function Cards ({Creator,Value,Img}){
    return(
        <div class="projects-card project-one">
        
		<div class="project-info-container">
			<h3 class="project-title">{Creator}</h3>  
			<span class="project-load-bar" ></span>
			<p class="project-short-desc">{Value}</p> 
			
		</div>
        </div>

    )
}

export default Cards;