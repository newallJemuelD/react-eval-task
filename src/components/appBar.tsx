import React from 'react';
import { useNavigate } from 'react-router-dom';

import './components.css';


interface MyAppBarProps {
  isHome: boolean;
}

const MyAppBar: React.FC<MyAppBarProps> = ({isHome}) => {
  const navigate = useNavigate();

  return (
    <div className="appbar">
      <div className="toolbar">
        <div className="title">
          Mutual Fund App
        </div>
        {isHome ?
          <div>
            <button className="button" onClick={() => navigate('/query_list')}>Support</button>
            <button className="button" onClick={() => navigate('/')}>Logout</button>
          </div> : null}
      </div>
    </div>
  );
};

export default MyAppBar;