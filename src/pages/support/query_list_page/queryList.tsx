import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { RootState } from '../../../redux/store';
import './queryList.css';

const QueryList: React.FC = () => {
  const navigate = useNavigate();
  const queries = useSelector((state: RootState) => state.queries.queries);

  const handleAskQuery = () => {
    navigate('/ask_query');
  };

  return (
    <div className="query-list-container">
      <AppBar position="static" className="appbar">
        <Toolbar>
          <Typography variant="h6" className="title">
            Mutual Fund App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className="content-container">
        <div className="query-list">
          {queries.map((query, index) => (
            <Card className="query-card" key={index}>
              <CardContent>
                <Typography variant="h6">Query {index + 1}</Typography>
                <Typography variant="body2">Dropdown 1: {query.dropdown1}</Typography>
                <Typography variant="body2">Dropdown 2: {query.dropdown2}</Typography>
                <Typography variant="body2">Dropdown 3: {query.dropdown3}</Typography>
                <Typography variant="body2">Dropdown 4: {query.dropdown4}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="button-row">
          <Button variant="contained" color="primary" onClick={handleAskQuery} className="ask-query-button">
            Ask Query
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default QueryList;
