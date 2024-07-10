import React from 'react';
import { useNavigate } from 'react-router-dom';

import './home.css';
import CardRow from './components/cardRowSection';
import MyAppBar from '../../components/appBar';

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

  interface Card {
    title: string;
    description: string;
  }

  const cardsContent1: Card[] = [
    {
      title: 'SIP Calculator',
      description: ' Use the SIP calculator to estimate your investment returns over time.'
    },
    {
      title: 'Lumpsum Calculator',
      description: 'Calculate the future value of your lumpsum investment.'
    },
    {
      title: 'Another Calculator',
      description: 'Use the another calculator to estimate another value.'
    },
  ];

  const cardsContent2: Card[] = [
    {
      title: 'Goal Calculator',
      description: 'Plan your financial goals and calculate the required investment.'
    },
    {
      title: 'Tax Savings Calculator',
      description: 'Estimate your tax savings through mutual fund investments.'
    },
    {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing'
    },
  ];


  return (
    <div className="home-container">
      <MyAppBar isHome={true} />
      <div className="section1">
        <h2>Calculator</h2>
        <CardRow cardsContent={cardsContent1} />
        <CardRow cardsContent={cardsContent2} />
      </div>
      <div className="section2">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <details key={index}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Home;
