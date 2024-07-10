import React from 'react';

import './home.css';
import CardRow from './components/cardRowSection';
import MyAppBar from '../../components/appBar';
import { cardsContent1, cardsContent2, faqs } from '../../utils/constants';

const Home: React.FC = () => {

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
