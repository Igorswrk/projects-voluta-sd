import React from "react"
import "./style.css"

export default function AbaSkins(props){
    return(
      <div>
        <a href={props.link}><img src={props.section} alt={props.text}></img></a>
      </div>
    );
}
