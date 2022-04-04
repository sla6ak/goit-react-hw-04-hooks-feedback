import styled from '@emotion/styled';

export const СhoiceFidback = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

export const ButtonFeedback = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  height: 30px;
  width: 90px;
  color: ${props => {
    if (props.ok === 'good') {
      return props.theme.colors.good;
    } else if (props.ok === 'bad') {
      return props.theme.colors.bad;
    } else if (props.ok === 'neutral') {
      return props.theme.colors.neutral;
    }
  }};
  box-shadow: -2px -2px 7px rgb(109, 109, 109);
`;
