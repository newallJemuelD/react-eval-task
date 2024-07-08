import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import { addQuery } from '../../../redux/querySlice';
import './askQuery.css';

const AskQuery: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dropdown1, setDropdown1] = useState<string>('');
  const [dropdown2, setDropdown2] = useState<string>('');
  const [dropdown3, setDropdown3] = useState<string>('');
  const [dropdown4, setDropdown4] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addQuery({ dropdown1, dropdown2, dropdown3, dropdown4 }));
    navigate('/query_list');
  };

  const handleBack = () => {
    navigate('/home');
  };

  return (
    <div className="ask-query-container">
      <AppBar position="static" className="appbar">
        <Toolbar>
          <Typography variant="h6" className="title">
            Mutual Fund App
          </Typography>
          <Button color="inherit" onClick={handleBack}>Back</Button>
        </Toolbar>
      </AppBar>
      <Container className="content-container">
        <Card className="form-card">
          <CardContent>
            <Typography variant="h5" component="h2" className="form-title">
              Ask a Query
            </Typography>
            <form onSubmit={handleSubmit}>
              <div className="dropdown-row">
                <TextField
                  select
                  label="Dropdown 1"
                  value={dropdown1}
                  onChange={(e) => setDropdown1(e.target.value)}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  className="dropdown"
                >
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                </TextField>
                <TextField
                  select
                  label="Dropdown 2"
                  value={dropdown2}
                  onChange={(e) => setDropdown2(e.target.value)}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  className="dropdown"
                >
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                </TextField>
              </div>
              <div className="dropdown-row">
                <TextField
                  select
                  label="Dropdown 3"
                  value={dropdown3}
                  onChange={(e) => setDropdown3(e.target.value)}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  className="dropdown"
                >
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                </TextField>
                <TextField
                  select
                  label="Dropdown 4"
                  value={dropdown4}
                  onChange={(e) => setDropdown4(e.target.value)}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  className="dropdown"
                >
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                </TextField>
              </div>
              <div className="button-row">
                <Button type="submit" variant="contained" color="primary" className="submit-button">
                  Submit
                </Button>
                <Button variant="contained" onClick={handleBack} className="back-button">
                  Back
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default AskQuery;
