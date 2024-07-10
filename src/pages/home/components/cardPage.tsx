import React from 'react';

import { useLocation } from 'react-router-dom';


const CardPage: React.FC = () => {

    const location = useLocation();
    const { state } = location;

    return (
        <div>
            <h2>{state.title}</h2>
            <p>This is {state.title} page content</p>
        </div>
    );
};

export default CardPage;