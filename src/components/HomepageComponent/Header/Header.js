import React, { Component } from "react";
import img from '../../../img/bg.jpg'
import bgsmall from '../../../img/bg-mobile.jpg';
import styled from 'styled-components';
import Nav from '../Nav/Nav';
import Pitch from '../Section/Pitch';

const Header = styled.header`
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.75), 
    rgba(0, 0, 0, 0.09)
    ),
    url(${img});
    height: 100vh;
    @media (max-width: 1000px) {
      height: 90vh;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.75), 
        rgba(0, 0, 0, 0.09)
      ),
      url(${bgsmall});
      background-size: cover;
    }
`;


class header extends Component{
  render(){
    return(
      <Header>
         <Nav/>
         <Pitch />
      </Header>
    )
  }
}

export default header;