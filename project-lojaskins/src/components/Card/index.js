import React from "react"
import "./style.css"

export default function Card(props){
    return(
        <div className="item">
            <a href={props.linklbox}><img src={props.img} alt="" className="imgCard"></img></a>
            <h3 className="nameItem">{props.name}</h3>
            <p className="preco">{props.price}</p>
            <button type="submit" value="Comprar" className="buttonBuy">Comprar</button>
        </div>
    );
}