import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../../../redux/store';
import './queryList.css';
import MyAppBar from '../../../components/appBar';

const QueryList: React.FC = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const queries = useSelector((state: RootState) =>
    currentUser ? state.queries[currentUser.username] : []
  );

  const handleAskQuery = () => {
    navigate('/ask_query');
  };

  const handleBack = () => {
    navigate('/home');
  };

  return (
    <div className="query-list-container">
      <MyAppBar isHome={false} />
      <div className="query-list">
        {(queries && queries.length > 0) ? queries.map((query, index) => (
          <div className="query-card" key={index}>
            <div className="card-content">
              <h6>Query {index + 1}</h6>
              <p>Dropdown 1: {query.dropdown1}</p>
              <p>Dropdown 2: {query.dropdown2}</p>
              <p>Dropdown 3: {query.dropdown3}</p>
              <p>Dropdown 4: {query.dropdown4}</p>
            </div>
          </div>
        )) : null}
      </div>
      <div className="button-row">
        <button className="ask-query-button" onClick={handleAskQuery}>
          Ask Query
        </button>
        <button className="back-button" onClick={handleBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default QueryList;
