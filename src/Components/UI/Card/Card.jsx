import React from "react";
import './Card.css'

export const Card = ({personajes=[]}) => {
    return (
        <div className="grid-card">
            {
                personajes.map((item, index) => (
                    <div key={index} className="card">
                        <h5 className="titulo">{item.name}</h5>
                        <img className="imgpersoanje" src={item.URL} alt="" />
                        <p className="categoria">{item.category}</p>
                        <p className="frase">{item.quote}</p>
                    </div>
                ))}
        </div>
    )
}









