import React, { Component } from "react";
import img from '../../../img/bg-larger.jpg'
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
                background-size: cover;
                display: block;
                height: 100%;
                min-height: 100vh;
                overflow: hidden;
                position: absolute;
                width: 100%;
                z-index: -1
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