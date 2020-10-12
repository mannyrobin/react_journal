import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';

import RateButton from '../RateButton/RateButton';
import { setThemeStyle } from '../../redux/actions/theme.action';
import { RateButtons } from '../../commons/Constant';

const StateTitle = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #959596;
`;

const AwfulText = styled(StateTitle)`
  margin-right: 16px;
`;

const AmazingText = styled(StateTitle)`
  margin-left: 16px;
`;

const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
`;

const RatingControl = ({ rate, onChange, feels }) => {
  const dispatch = useDispatch(0);

  const handleClick = (rate, type) => {
    onChange && onChange(rate);
    dispatch(setThemeStyle(type));
  };

  return (
    <ControlsWrapper>
      <AwfulText>Awful</AwfulText>
      {RateButtons.map((buttonProps, index) => (
        <RateButton
          key={index}
          title={buttonProps.label}
          selected={rate !== 0 && (rate || feels.rate) === index + 1}
          onClick={(e) => handleClick(index + 1, buttonProps.type)}
        />
      ))}
      <AmazingText>Amazing</AmazingText>
    </ControlsWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
    feels: state.feel.detail,
  };
};

export default connect(mapStateToProps, { setThemeStyle })(RatingControl);
