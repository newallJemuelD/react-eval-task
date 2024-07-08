import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate  } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate ();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform authentication logic here
    // For this example, we'll just redirect to the home page
    navigate('/home');
  };

  const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username: </label>
          <input type="text" value={username} onChange={handleChangeUsername} required />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" value={password} onChange={handleChangePassword} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;