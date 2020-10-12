import React from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { setFeelingData, setThemeStyle } from '../../redux/actions';

const Card = styled.div`
  width: 206px;
  margin-right: 19px;
  border-radius: 20px;
  background: rgba(252, 251, 252, 0.9);
  padding: 17px 24px;
  text-align: left;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: ${(props) => (props.opacity ? props.opacity : '1')};
  &:hover {
    opacity: 1;
  }
`;

const FeelingBadge = styled.span`
  width: 27px;
  height: 27px;
  background: ${(props) => (props.rate ? '#ffffff' : 'transparent')};
  border: ${(props) => (props.rate ? 'none' : '2px solid #FFFFFF')};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => {
    switch (props.rate) {
      case 1:
        return '#353A4B';
      case 2:
        return '#5563AA';
      case 3:
        return '#7184E7';
      case 4:
        return '#C788E6';
      case 5:
        return '#F7678A';
      default:
        return 'transparent';
    }
  }};
`;

const DateText = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  margin-top: 13px;
  margin-bottom: 10px;
  color: #333333;
`;

const Description = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  min-height: 36px;
  color: #666666;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

const DateCard = ({ rate, date, description, opacity, ref }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setFeelingData({ rate, date, description }));
    dispatch(setThemeStyle(rate));
  };

  return (
    <Card ref={ref} opacity={opacity || 1} onClick={handleClick}>
      <FeelingBadge rate={rate}>{rate}</FeelingBadge>
      <DateText>{date}</DateText>
      <Description>{description}</Description>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
    feels: state.feel,
  };
};

export default connect(mapStateToProps, { setFeelingData, setThemeStyle })(
  DateCard
);
