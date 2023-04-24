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
` as any;

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
  font-weight: 50;
  opacity: ${(props) => (props.loaded ? '1.0' : '0.0')};
  transform: translateY(${(props) => (props.loaded ? '0px' : '10px')});
  transition: all 500ms ease-in-out ${(props) => props.delay || '0'}s;
  margin-bottom: 12px;
  strong {
    font-weight: 900;
  }
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
  margin-bottom: 12px;
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
  @media screen and (max-width: 992px) {
    padding-bottom: 0px;
  }
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
    padding-bottom: 0px;
    padding-top: 50px;
  }
`;

export const PictureContainer = styled.div<{ loaded?: boolean; delay?: string | number }>`
  height: 100%;
  margin-right: 50px;
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.loaded ? '1' : '0.0')};
  transition: all 250ms ease-in-out ${(props) => props.delay || '0'}s;
  @media screen and (max-width: 992px) {
    margin-right: 0px;
  }
`;

export const Picture = styled.img<{ size?: string }>`
  position: relative;
  overflow: hidden;
  z-index: 1000;
  height: 500px;
  border-radius: 300px;
  @media screen and (max-width: 992px) {
    border-radius: initial;
    height: initial;
    width: 100vw;
    max-width: 600px;
  }
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
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

export const SocialItem = styled.a<{ time?: number }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;
  border-radius: 150px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.background};
  :hover {
    background-color: ${theme.colors.primaryLight};
  }

  animation: float ${(props) => props.time || 6}s ease-in-out infinite;

  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translatey(-5px);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
  }
`;
