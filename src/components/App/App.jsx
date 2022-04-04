import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import { useState } from 'react';
// import React from 'react';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import Statistics from '../Statistics/Statistics';
import { List } from './App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // счетчик кликов меняет стейт
  const onClickFitbak = tipeClick => {
    if (tipeClick === 'good') {
      setGood(good + 1);
    } else if (tipeClick === 'neutral') {
      setNeutral(neutral + 1);
    } else if (tipeClick === 'bad') {
      setBad(bad + 1);
    }
  };

  // счетчик общих отзывов
  const onTotalCounter = () => good + neutral + bad;

  // счетчик процента позитивных отзывов
  const positivePercentage = () => {
    let percentage = 0;
    good > 0
      ? (percentage = 100 / (onTotalCounter() / good))
      : (percentage = 0);
    return Math.round(percentage);
  };

  const keysState = ['good', 'neutral', 'bad'];
  const total = onTotalCounter();
  return (
    <List>
      <Section title="Please leave feedback">
        <FeedbackOptions options={keysState} onLeaveFeedback={onClickFitbak} />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage()}
          />
        ) : (
          <Notification />
        )}
      </Section>
    </List>
  );
};

export default App;
