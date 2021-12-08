import React, {useState, useEffect} from 'react';
import './ContCard.css'
import { Card } from '../../UI/Card/Card';

export const ContCard = () => {

    const [personajes, setPersonajes] = useState([])

    const urlApi = "https://apichavo2.herokuapp.com/"

    const fetchPersonajes = (url) =>{
        fetch(url)
        .then(response => response.json())
        .then(data => setPersonajes(data))
        .catch(error => console.log(error))
    }

    useEffect(() =>{
        fetchPersonajes(urlApi)
    },[])

    return (
        <div className="ContCard">
            <Card personajes={personajes}/>
        </div>
    )
}





