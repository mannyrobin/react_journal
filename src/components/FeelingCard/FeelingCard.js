import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';

import RatingControl from '../RatingControl/RatingControl';
import { saveFeeling } from '../../redux/actions';
import Button from '../Button/Button';

const CardWrapper = styled.div`
  text-align: left;
  width: 860px;
  height: 61vh;
  background: #fcfbfc;
  box-shadow: 0px 20px 100px 10px rgba(0, 0, 0, 0.12);
  border-radius: 20px;
  position: absolute;
  left: 50%;
  top: 133px;
  transform: translateX(-50%);
  overflow: hidden;
  @media only screen and (max-width: 912px) {
    width: 100%;
  }
`;

const CardHeader = styled.div`
  background: #f6f4f6;
  padding: 30px 36px 30px 40px;
`;

const Title = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.02em;
  color: #333333;
`;

const CardBody = styled.div`
  margin: 42px 37px;
`;

const CardFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 34px 27px 35px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DateText = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #959596;
`;

const FeelingInput = styled.textarea`
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  font-family: Inter;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.02em;
  resize: none;
`;

const Divider = styled.div`
  width: 100%;
  border: 0.5px solid #e1dcdc;
  margin-bottom: 15px;
`;

const FeelingCard = ({ feels }) => {
  const [detail, setDetail] = useState('');
  const [rate, setRate] = useState(0);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(saveFeeling({ ...feels, rate: rate, description: detail }));
  };

  const handleChangeDetail = (e) => {
    setDetail(e.target.value);
  };

  const handleChangeRate = (rate) => {
    setRate(rate);
  };

  useEffect(() => {
    if (feels.rate === 0) {
      setRate(0);
      setDetail('');
    } else {
      setRate(feels.rate);
      setDetail(feels.description);
    }
  }, [feels]);

  return (
    <CardWrapper>
      <CardHeader>
        <Title>How are you feeling today?</Title>
        <RatingControl rate={rate} onChange={handleChangeRate} />
      </CardHeader>
      <CardBody>
        <FeelingInput
          placeholder='What made you feel that way?'
          value={detail || feels.description}
          onChange={handleChangeDetail}
        />
      </CardBody>
      <CardFooter>
        <Divider />
        <FooterContent>
          <DateText>{feels.date}</DateText>
          <Button onClick={handleSave}>Save</Button>
        </FooterContent>
      </CardFooter>
    </CardWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
    feels: state.feel.detail,
  };
};

export default connect(mapStateToProps, { saveFeeling })(FeelingCard);
