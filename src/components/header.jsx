import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
`;

 const Swiper = styled.div`
  
`;

 const SwiperContainer = styled.div`
  
`;

 const SwiperWrapper = styled.div`
   
`;

 const SwiperPagination = styled.div`
  
`;

 const SwiperSlide = styled.div`
    
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrls: []
    }
  }

  componentDidMount() {

  }

  render() {
    let countId = 0;
    return (
      <Wrapper>
        <Swiper id="header">
          <SwiperContainer>
            <SwiperWrapper>
              { this.state.imgUrls.map((url) => {
                return <SwiperSlide key={"header" + countId++ }>
                  <img src={url}/>
                </SwiperSlide>
                })
              }
            </SwiperWrapper>
            <SwiperPagination/>
          </SwiperContainer>
        </Swiper>
      </Wrapper>
    );
  }
}

export default Header;