import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Home Page</h2>
            <p>Welcome to the home page!</p>
            <button onClick={() => navigate('/support')}>Next</button>
        </div>
    );
};

export default Home;
