import React from 'react';
import './Card.css'

export const Card = ({personajes=[]}) => {
    return (
        <div className="grid-card">
            {
                personajes.map((item, index) =>(
                    <div key={index} className="card">
                        <h5>{item.name}</h5>
                        <img src={item.URL} alt="" />
                        <p>{item.category}</p>
                        <p>{item.quote}</p>
                    </div>
                ))}
        </div>
    )
}











