import React from 'react';
import styled from 'styled-components';

const CircleButton = styled.span`
  width: 56px;
  height: 56px;
  min-width: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => (props.selected ? 'none' : '1.5px solid #cccccc')};
  background: ${(props) =>
    props.selected ? props.theme.theme.colorPrimary : 'transparent'};
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 100px;
  margin: 0 6px;
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  color: ${(props) => (props.selected ? 'white' : '#bbbbbb')};
`;

const RateButton = ({ title, selected, onClick }) => {
  return (
    <CircleButton selected={selected} onClick={onClick}>
      {title}
    </CircleButton>
  );
};

export default RateButton;
