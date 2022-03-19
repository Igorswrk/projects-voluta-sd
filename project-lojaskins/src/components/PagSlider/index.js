import React from "react"
import "./style.css"

export default function PagSlider(props){
    return(
        <div className="slide_img" id={props.position}>			
            <h1 className="logo">{props.logo}</h1>
            <div className="div_img">
                <img src={props.img} alt={props.alt} className="img_page"></img>
            </div>
            <h2 className="titlePage">{props.title}</h2>
            <p  className="descriptionPage">{props.description}</p>

            <label className="prev" for={props.prev}><span></span></label>
            <label className="next" for={props.next}><span></span></label>	
        </div>
    );
}