import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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

const theme = {
  colors: {
    primary: "#A5D6A7",
    primaryDark: "#81C784",
    primaryLight: "#C8E6C9",
    secondary: "#FFE082",
    background: "#121212",
  },
};

const Text = styled.p<{ center?: boolean; gutter?: boolean }>`
  font-size: 14px;
  margin: 0;
  color: #ffffff;
  ${(props) => (props.center ? "text-align: center;" : "")}
  ${(props) => (props.gutter ? "margin-bottom: 10px;" : "")}
`;

const Title = styled.p<{ center?: boolean; gutter?: boolean }>`
  font-size: 20px;
  margin: 0;
  color: #ffffff;
  ${(props) => (props.center ? "text-align: center;" : "")}
  ${(props) => (props.gutter ? "margin-bottom: 10px;" : "")}
`;

const BannerTitleContainer = styled.div`
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const BannerTitle = styled.h1<{ loaded?: boolean; delay?: string | number }>`
  margin: 0;
  text-transform: uppercase;
  font-weight: 100;
  opacity: ${(props) => (props.loaded ? "1.0" : "0.0")};
  transform: translateY(${(props) => (props.loaded ? "0px" : "10px")});
  transition: all 500ms ease-in-out ${(props) => props.delay || "0"}s;
`;

const BannerSubtitle = styled.h2<{ loaded?: boolean; delay?: string | number }>`
  margin: 0;
  opacity: 0.5;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 400;
  opacity: ${(props) => (props.loaded ? "0.5" : "0.0")};
  transform: translateY(${(props) => (props.loaded ? "0px" : "10px")});
  transition: all 500ms ease-in-out ${(props) => props.delay || "0"}s;
`;

const BannerPresentation = styled.h2<{ loaded?: boolean; delay?: string | number }>`
  margin: 0;
  color: ${theme.colors.primary};
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 100;
  opacity: ${(props) => (props.loaded ? "1.0" : "0.0")};
  transform: translateY(${(props) => (props.loaded ? "0px" : "10px")});
  transition: all 500ms ease-in-out ${(props) => props.delay || "0"}s;
`;

const Background = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${theme.colors.background};
  align-items: center;
  min-height: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const Container = styled.div<{ paddingTop?: string }>`
  width: 100%;
  max-width: 1200px;
  background-color: rgba(255, 255, 255, 0.05);
  margin: 10px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  ${(props) => (props.paddingTop ? `padding-top: ${props.paddingTop};` : "")}
  :not(:first-child) {
    margin-top: 0;
  }
  @media screen and (max-width: 992px) {
    padding-top: 20px;
  }
`;

const Banner = styled.div`
  height: 250px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: initial;
    padding-bottom: 30px;
  }
`;

const PictureContainer = styled.div`
  position: relative;
  min-width: 500px;
  @media screen and (max-width: 992px) {
    height: 320px;
    margin-left: 100px;
  }
`;

const PictureWrapper = styled.div<{
  loaded?: boolean;
  delay?: string | number;
  position: [left: number | string, top: number | string];
}>`
  position: absolute;
  left: ${(props) => props.position[0]};
  top: ${(props) => props.position[1]};
  filter: drop-shadow(-1px 6px 3px rgba(0, 0, 0, 0.5));
  opacity: ${(props) => (props.loaded ? "1.0" : "0.0")};
  transform: translateY(${(props) => (props.loaded ? "0px" : "10px")});
  transition: all 500ms ease-in-out ${(props) => props.delay || "0"}s;
`;

const Picture = styled.img<{ size?: string }>`
  position: relative;
  width: ${(props) => props.size || "300px"};
  height: ${(props) => props.size || "300px"};
  overflow: hidden;
  clip-path: polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%);
  z-index: 1000;
`;

const SocialContainer = styled.div<{ loaded?: boolean; delay?: string | number }>`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  opacity: ${(props) => (props.loaded ? "1" : "0.0")};
  transition: all 250ms ease-in-out ${(props) => props.delay || "0"}s;
`;

const SocialItem = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${theme.colors.primaryDark};
  color: ${theme.colors.background};
  :not(:first-child) {
    margin-left: 20px;
  }
  :hover {
    background-color: ${theme.colors.primaryLight};
  }
`;

const HobbyContainer = styled.div`
  display: flex;
  justify-content: center;
  :not(:first-child) {
    margin-left: 20px;
  }
`;

const HobbyItem = styled.a`
  color: ${theme.colors.primary};
  position: relative;
  height: 30px;
  width: 50px;
`;

export {
  Text,
  Background,
  GlobalStyle,
  Container,
  Picture,
  PictureWrapper,
  Banner,
  Title,
  PictureContainer,
  BannerTitleContainer,
  BannerTitle,
  BannerSubtitle,
  BannerPresentation,
  SocialContainer,
  SocialItem,
  HobbyContainer,
  HobbyItem,
};
