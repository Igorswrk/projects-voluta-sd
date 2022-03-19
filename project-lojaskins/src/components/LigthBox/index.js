import React from 'react'
import "./style.css"

export default function LigthBox(props){
    return(
        <div className="lbox" id={props.linkCard}>
            <section className="box_img">
                <a href={`#title -200px`} id="close">X</a>
                <img  src={props.img} alt=""></img>
                <section>
                    <h3 className="nameItem">{props.name}</h3>
                    <p className="descriptionItem">Este adesivo pode ser aplicado a qualquer arma no seu inventário e pode ser raspado para parecer mais desgastado. Você pode raspar o mesmo adesivo múltiplas vezes, tornando-o cada vez mais desgastado, até ser removido da arma.</p>
                    <p className="preco">{props.price}</p>
                    <button type="submit" value="Comprar">Comprar</button>
                </section>
            </section>
        </div>
    );
}