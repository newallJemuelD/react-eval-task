import React from 'react';
import { useNavigate } from 'react-router-dom';

import './components.css';

const MyAppBar : React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="appbar">
      <div className="toolbar">
        <div className="title">
          Mutual Fund App
        </div>
        <button className="button" onClick={() => navigate('/query_list')}>Support</button>
        <button className="button" onClick={() => navigate('/')}>Logout</button>
      </div>
    </div>
  );
};

export default MyAppBar;