import React from 'react';
import propTypes from 'prop-types';
import { string } from 'prop-types';
import { –°hoiceFidback, ButtonFeedback } from './FeedbackOptions.styled';

const FeedbackOptions = props => {
  return (
    <–°hoiceFidback>
      {props.options.map(option => {
        return (
          <li key={option}>
            <ButtonFeedback
              ok={option}
              type="button"
              onClick={() => props.onLeaveFeedback(option)}
            >
              {option}
            </ButtonFeedback>
          </li>
        );
      })}
    </–°hoiceFidback>
  );
};
FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(string),
};
export default FeedbackOptions;
