import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { FeelingCard, DailyList } from '../../components';
import { Months } from '../../commons/Constant';

const AppWrapper = styled.div`
  text-align: center;
  min-height: 100vh;
  background: ${(props) => props.theme.theme.gradientBackground};
`;

const BottomBar = styled.div`
  position: absolute;
  display: flex;
  height: 56px;
  bottom: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(5px);
`;

const AppLogo = styled.span`
  position: absolute;
  top: 24px;
  right: 26px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.02em;
  color: #f6f4f6;
`;

const TodayLabel = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;

const THEME = createMuiTheme({
  typography: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '1.7',
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
    };
  }

  render() {
    return (
      <CssBaseline>
        <MuiThemeProvider theme={THEME}>
          <ThemeProvider theme={this.props.theme}>
            <AppWrapper>
              <AppLogo>Simplejournal</AppLogo>
              <FeelingCard />
              <DailyList />
              <BottomBar>
                <TodayLabel>{this.state.date}</TodayLabel>
              </BottomBar>
            </AppWrapper>
          </ThemeProvider>
        </MuiThemeProvider>
      </CssBaseline>
    );
  }

  componentDidMount() {
    const date = new Date();

    this.setState({
      ...this.state,
      date: Months[date.getMonth()] + ' ' + date.getFullYear(),
    });
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

export default connect(mapStateToProps, {})(App);
