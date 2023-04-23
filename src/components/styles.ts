import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: 'Raleway', sans-serif;
  }
  html {
    padding: 0;
    margin: 0;
    height: 100%;
  }
  #root {
    width: 100%;
    height: 100%;
  }
  #__next {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
`;

export const theme = {
  colors: {
    primary: '#007AA5',
    primaryDark: '#003A6C',
    primaryLight: '#C4D8E2',
    secondary: '#FFE082',
    background: '#121212',
  },
};


export const BannerTitleContainer = styled.div`
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const BannerTitle = styled.h1<{ loaded?: boolean; delay?: string | number }>`
  margin: 0;
  text-transform: uppercase;
  font-weight: 100;
  opacity: ${(props) => (props.loaded ? '1.0' : '0.0')};
  transform: translateY(${(props) => (props.loaded ? '0px' : '10px')});
  transition: all 500ms ease-in-out ${(props) => props.delay || '0'}s;
`;

export const BannerSubtitle = styled.h2<{ loaded?: boolean; delay?: string | number }>`
  margin: 0;
  opacity: 0.5;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 400;
  opacity: ${(props) => (props.loaded ? '0.5' : '0.0')};
  transform: translateY(${(props) => (props.loaded ? '0px' : '10px')});
  transition: all 500ms ease-in-out ${(props) => props.delay || '0'}s;
`;

export const BannerPresentation = styled.h2<{ loaded?: boolean; delay?: string | number }>`
  margin: 0;
  color: ${theme.colors.primary};
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 100;
  opacity: ${(props) => (props.loaded ? '1.0' : '0.0')};
  transform: translateY(${(props) => (props.loaded ? '0px' : '10px')});
  transition: all 500ms ease-in-out ${(props) => props.delay || '0'}s;
`;

export const Background = styled.div`
  background-image: url('/background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 10px;
  box-sizing: border-box;
`;


export const Banner = styled.div`
  height: 80vh;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 992px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: flex-start;
    height: initial;
    padding-bottom: 30px;
    padding-top: 50px;
  }
`;

export const PictureContainer = styled.div`
  border-radius: 300px;
  height: 500px;
  overflow: hidden;

  margin-right: 50px;
  @media screen and (max-width: 992px) {
    margin-right: 0px;
  }
`;

export const Picture = styled.img<{ size?: string }>`
  position: relative;
  overflow: hidden;
  z-index: 1000;
  height: 500px;
`;

export const SocialContainer = styled.div<{ loaded?: boolean; delay?: string | number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.loaded ? '1' : '0.0')};
  transition: all 250ms ease-in-out ${(props) => props.delay || '0'}s;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 20px;
`;

export const SocialItem = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 100px;
  border-radius: 150px;
  background-color: ${theme.colors.primaryDark};
  color: ${theme.colors.background};
  :hover {
    background-color: ${theme.colors.primaryLight};
  }
`;
