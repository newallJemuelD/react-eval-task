import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../redux/store';
import { addQuery } from '../../../redux/querySlice';
import './askQuery.css';
import MyAppBar from '../../../components/appBar';

const AskQuery: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const [dropdown1, setDropdown1] = useState<string>('');
  const [dropdown2, setDropdown2] = useState<string>('');
  const [dropdown3, setDropdown3] = useState<string>('');
  const [dropdown4, setDropdown4] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentUser) {
      const query = { dropdown1, dropdown2, dropdown3, dropdown4 };
      dispatch(addQuery({ username: currentUser.username, query }));
      const queries = JSON.parse(localStorage.getItem(`queries_${currentUser.username}`) || '[]');
      queries.push(query);
      localStorage.setItem(`queries_${currentUser.username}`, JSON.stringify(queries));
      navigate('/query_list');
    }
  };

  const handleBack = () => {
    navigate('/home');
  };

  return (
    <div className="ask-query-container">
      <MyAppBar isHome={false} />
      <div className="form-card">
        <div className="card-content">
          <h2 className="form-title">
            Ask a Query
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="dropdown-row">
              <div className="dropdown">
                <label htmlFor="dropdown1" className="label">Dropdown 1</label>
                <select id="dropdown1" name="dropdown1" onChange={(e) => setDropdown1(e.target.value)} className="select">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
              </div>
              <div className="dropdown">
                <label htmlFor="dropdown2" className="label">Dropdown 2</label>
                <select id="dropdown2" name="dropdown2" onChange={(e) => setDropdown2(e.target.value)} className="select">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
              </div>
            </div>
            <div className="dropdown-row">
              <div className="dropdown">
                <label htmlFor="dropdown3" className="label">Dropdown 3</label>
                <select id="dropdown3" name="dropdown3" onChange={(e) => setDropdown3(e.target.value)} className="select">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
              </div>
              <div className="dropdown">
                <label htmlFor="dropdown4" className="label">Dropdown 4</label>
                <select id="dropdown4" name="dropdown4" onChange={(e) => setDropdown4(e.target.value)} className="select">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
              </div>
            </div>
            <div className="button-row">
              <button type="submit" className="button submit-button">
                Submit
              </button>
              <button type="button" className="button back-button" onClick={handleBack}>
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AskQuery;
