import styled from '@emotion/styled';

export const ListFeedback = styled.ul`
  list-style: none;
  color: rgb(99, 99, 99);
  font-weight: 400;
  text-shadow: -1px -1px 1px rgb(33, 35, 58);
  padding: 5px 35px;
`;
export const ResaultFeedback = styled.li`
  padding: 5px;
  color: ${props => {
    if (props.ok === 'ok') {
      return props.theme.colors.good;
    } else if (props.ok === 'bad') {
      return props.theme.colors.bad;
    } else {
      return props.theme.colors.neutral;
    }
  }};
`;
