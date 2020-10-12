import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid ${(props) => props.theme.theme.colorPrimary};
  box-sizing: border-box;
  border-radius: 12px;
  font-size: 20px;
  outline: none;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  padding: 16px 60px;
  text-align: center;
  background: transparent;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.theme.colorPrimary};
`;

export default Button;
