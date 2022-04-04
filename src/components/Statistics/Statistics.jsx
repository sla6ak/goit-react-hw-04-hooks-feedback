import propTypes from 'prop-types';
import { ListFeedback, ResaultFeedback } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ListFeedback>
      <ResaultFeedback ok="ok">good: {good}</ResaultFeedback>
      <ResaultFeedback>neutral: {neutral}</ResaultFeedback>
      <ResaultFeedback ok="bad">bad: {bad}</ResaultFeedback>
      <ResaultFeedback>total: {total}</ResaultFeedback>
      <ResaultFeedback>
        positivePercentage: {positivePercentage} %
      </ResaultFeedback>
    </ListFeedback>
  );
};
Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  positivePercentage: propTypes.number,
};
export default Statistics;
