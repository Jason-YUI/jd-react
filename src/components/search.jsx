import React, { Component } from 'react';
import styled from 'styled-components';
import { positon } from '../utils/style-consts';

const Wrapper = styled.div`
  min-width: 320px;
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  padding: 5px 20px;
  z-index: 10;
  background-color: rgba(234, 44, 44, 0);
  opacity: 1;
  position: ${positon.pf};
`;

const Main = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  text-align: center;
  top: 0;
  position: ${positon.pr};
`;

const MainLeft = styled.div`
  left: 0;
  height: 100%;
  margin-top: 5px;
  position: ${positon.pa};
  
  i {
    width: 56px;
    height: 21px;
    display: inline-block;
    background: url('../assets/images/jd-sprites.png') no-repeat;
    background-size: 200px 200px;
    background-position: 0 -109px;
  }
`;

const MainRight = styled.div`
  margin-left: 66px;
  margin-right: 40px;
  background-color: #fff;
  border: 1px solid #fff;
  height: 30px;
  border-radius: 30px;
  margin-top: 3px;
  box-sizing: border-box;
  position: ${positon.pr};
`;

const RightSpan = styled.span`
  left: 7px;
  top: 3px;
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url('../assets/images/jd-sprites.png') no-repeat;
  background-position: -60px -109px;
  background-size: 200px 200px;
  position: ${positon.pa};
`;

const RightForm = styled.form`
  height: 100%;
  
  input {
    border: 0;
    width: 98%;
    height: 100%;
    color: #333;
    text-indent: 30px;
    font-size: 18px;
    border-radius: 30px;
  }
`;

const Login = styled.div`
  top: 0;
  right: 0;
  width: 30px;
  height: 100%;
  line-height: 40px;
  font-size: 15px;
  color: #fff;
  margin-top: -5px;
  position: ${positon.pa};
`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { bg: 'transparent' }
  }

  componentDidMount() {
    window.onscroll = (event) => {
      let realHeight = document.documentElement.scrollTop || document.body.scrollTop;
      let optatic = 0.8 * (realHeight/142);
      if (optatic <= 0.8) {
        this.setState({
          bg: `rgba(234, 44, 44, ${optatic})`,
        })
      }
    }
  }

  render() {
    const bgColor = this.state.bg ? this.state.bg : 'transparent';

    return (
      <Wrapper style={{ background: bgColor }}>
        <Main>
          <MainLeft>
            <i></i>
          </MainLeft>
          <MainRight>
            <RightSpan/>
            <RightForm>
              <input placeholder='全场畅饮，部分低至99减50' type='text'/>
            </RightForm>
          </MainRight>
          <Login>
             <span>登录</span>
          </Login>
        </Main>
    </Wrapper>
    )
  }
}

export default Search;

