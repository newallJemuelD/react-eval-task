import React from 'react';
import { useNavigate } from "react-router-dom";

import './components.css'

interface CardContent {
    title: string;
    description: string;
};

interface CardRowProps {
    cardsContent: CardContent[];
};

const CardRow: React.FC<CardRowProps> = ({ cardsContent }) => {
    const navigate = useNavigate();

    return (
        <div className="card-row">
            {cardsContent.map((content, index) => (
                <div className="card" key={index} onClick={()=>{navigate('/card_page', {state: content})}}>
                    <h2>{content.title}</h2>
                    <p>{content.description}</p>
                </div>
            ))}
        </div>
    );
};

export default CardRow;