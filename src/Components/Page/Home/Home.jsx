import React from 'react';
import './Home.css'
import { ContCard } from '../../Layout/ContCard/ContCard';
import { Header } from '../../UI/Header/Header';

export const Home = () => {
    return (
        <div className="pageHome">
            <Header/>
            <ContCard/>
        </div>
    )
}



