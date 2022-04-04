import { Title, BoxTitle } from './Section.styled';
import propTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <BoxTitle>
      <Title>{title}</Title>
      {children}
    </BoxTitle>
  );
};
Section.propTypes = {
  title: propTypes.string,
};
export default Section;
