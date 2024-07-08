import React from 'react';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './home.css'; 

const Home: React.FC = () => {
  const faqs = [
    {
      question: 'What is a mutual fund?',
      answer: 'A mutual fund is an investment vehicle that pools money from multiple investors to purchase securities like stocks, bonds, and other assets.'
    },
    {
      question: 'How do I invest in a mutual fund?',
      answer: 'You can invest in a mutual fund by contacting a fund company directly, through a financial advisor, or via an online investment platform.'
    },
    {
      question: 'What are the types of mutual funds?',
      answer: 'The main types of mutual funds are equity funds, bond funds, money market funds, and balanced funds.'
    }
  ];

  const navigate = useNavigate();

  return (
    <div className="home-container">
      <AppBar className="appbar">
        <Toolbar>
          <Typography variant="h6" className="title">
            Mutual Fund App
          </Typography>
          <Button color="inherit" onClick={()=>{navigate('/query_list')}}>Support</Button>
        </Toolbar>
      </AppBar>
      <Container className="container">
        <div className="section1">
          <h2>Calculator</h2>
          <div className="card-row">
            <Card className="card">
              <CardContent>
                <Typography variant="h5">SIP Calculator</Typography>
                <Typography variant="body2">
                  Use the SIP calculator to estimate your investment returns over time.
                </Typography>
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent>
                <Typography variant="h5">Lumpsum Calculator</Typography>
                <Typography variant="body2">
                  Calculate the future value of your lumpsum investment.
                </Typography>
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent>
                <Typography variant="h5">Lumpsum Calculator</Typography>
                <Typography variant="body2">
                  Calculate the future value of your lumpsum investment.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="card-row">
            <Card className="card">
              <CardContent>
                <Typography variant="h5">Goal Calculator</Typography>
                <Typography variant="body2">
                  Plan your financial goals and calculate the required investment.
                </Typography>
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent>
                <Typography variant="h5">Tax Savings Calculator</Typography>
                <Typography variant="body2">
                  Estimate your tax savings through mutual fund investments.
                </Typography>
              </CardContent>
            </Card>
            <Card className="card">
              <CardContent>
                <Typography variant="h5">Goal Calculator</Typography>
                <Typography variant="body2">
                  Plan your financial goals and calculate the required investment.
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="section2">
          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
