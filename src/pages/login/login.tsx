import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/userSlice';
import { setQueries } from '../../redux/querySlice';

import './login.css';

const allowedUsers = ['user1', 'user2', 'user3'];

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>(''); // Assuming password is not used for this example
  const [error, setError] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (allowedUsers.includes(username)) {
      dispatch(login(username));
      const savedQueries = localStorage.getItem(`queries_${username}`);
      if (savedQueries) {
        dispatch(setQueries({ username, queries: JSON.parse(savedQueries) }));
      }
      navigate('/home');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={handleChangeUsername}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handleChangePassword}
              required
              className="form-control"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;