import React from 'react'
import './Home.css'
import { Header } from '../../UI/Header/Header'
import {Contcard} from '../../Layout/ContCard/ContCard'

export const Home = () => {
    return (
        <div className="PageHome">
            <Header/>
            <Contcard/>
        </div>
    )
}



