import styled from '@emotion/styled';

export const List = styled.div`
  background-color: ${props => props.theme.colors.wite};
  width: 350px;
  margin: 30px auto;
  padding: 30px 10px;
  box-shadow: 2px 2px 9px rgb(136, 136, 136);
  border-radius: ${props => props.theme.spacing(3)};
`;
