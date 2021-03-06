import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  Text,
  Background,
  Container,
  Picture,
  PicureWrapper,
  Banner,
  Title,
  PictureContainer,
  BannerTitleContainer,
  BannerTitle,
  BannerSubtitle,
  BannerPresentation,
  SocialContainer,
  SocialItem,
  HobbieContainer,
  HobbieItem
} from "../src/components/styles";

export default () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    setPageLoaded(true);
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>Profile of J.F.Baraky</title>
        <meta
          name="description"
          content="Developer and Mechatronics engineer, this is the profile of João Fernando Baraky."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="/static/selfie.jpg" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossorigin="anonymous"
        />
      </Head>
      <Background>
        <Banner>
          <PictureContainer>
            <PicureWrapper position={[0, 0]} delay={0.1} loaded={pageLoaded}>
              <Picture size="300px" src="/static/selfie.jpg" />
            </PicureWrapper>
            <PicureWrapper
              position={["290px", "45px"]}
              delay={0.2}
              loaded={pageLoaded}
            >
              <Picture size="100px" src="/static/computer.jpg" />
            </PicureWrapper>
            <PicureWrapper
              position={["285px", "150px"]}
              delay={0.3}
              loaded={pageLoaded}
            >
              <Picture size="125px" src="/static/code.jpg" />
            </PicureWrapper>
          </PictureContainer>
          <BannerTitleContainer>
            <BannerPresentation delay={0.5} loaded={pageLoaded}>
              Hello, I'm
            </BannerPresentation>
            <BannerTitle delay={1} loaded={pageLoaded}>
              João Fernando <strong>Baraky</strong>
            </BannerTitle>
            <BannerSubtitle delay={1.2} loaded={pageLoaded}>
              Javascript developer and mechatronics engineer
            </BannerSubtitle>
            <SocialContainer delay={1.4} loaded={pageLoaded}>
              <SocialItem
                href="https://www.linkedin.com/in/baraky"
                rel="noopener"
                target="_blank"
              >
                <span className="fab fa-linkedin-in fa-stack-2x" />
              </SocialItem>
              <SocialItem
                href="https://github.com/jfbaraky"
                rel="noopener"
                target="_blank"
              >
                <span className="fab fa-github-alt fa-stack-2x" />
              </SocialItem>
              <SocialItem
                href="https://www.instagram.com/jfbaraky"
                rel="noopener"
                target="_blank"
              >
                <span className="fab fa-instagram fa-stack-2x" />
              </SocialItem>
              <SocialItem
                href="https://www.facebook.com/jbaraky"
                rel="noopener"
                target="_blank"
              >
                <span className="fab fa-facebook-f fa-stack-2x" />
              </SocialItem>
            </SocialContainer>
          </BannerTitleContainer>
        </Banner>
        <Container paddingTop="70px">
          <Title gutter>About me</Title>
          <Text>
            Graduated in Mechatronics Engineering and Javascript Developer at
            App Masters for two years, I love to code and learn new things. I’m
            very responsible, been able to handle hard tasks and work
            simultaneously in multiple projects, always focusing my efforts on
            user experience. With good communications skills, I’m always willing
            to share my knowledge with my colleagues and the community and
            helping the team work to flow the best way.
          </Text>
        </Container>
        <Container>
          <Title gutter>Hobbies</Title>
          <HobbieContainer>
            <HobbieItem>
              <span className="fa fa-cat fa-stack-2x" />
            </HobbieItem>
            <HobbieItem>
              <span className="fas fa-chess-pawn fa-stack-2x" />
            </HobbieItem>
            <HobbieItem>
              <span className="fas fa-dice fa-stack-2x" />
            </HobbieItem>
            <HobbieItem>
              <span className="fas fa-gamepad fa-stack-2x" />
            </HobbieItem>
          </HobbieContainer>
        </Container>
        <Container>
          <Text center>Using: react, next.js, styled-components</Text>
        </Container>
      </Background>
    </React.Fragment>
  );
};
