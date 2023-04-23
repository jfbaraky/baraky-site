import React, { useState, useEffect } from 'react';
import {
  Background,
  Picture,
  Banner,
  PictureContainer,
  BannerTitleContainer,
  BannerTitle,
  BannerSubtitle,
  BannerPresentation,
  SocialContainer,
  SocialItem,
} from '../src/components/styles';
import { startPool } from '../src/utils/geneticGenerator';
import { NextSeo } from 'next-seo';
import { FaGithubAlt, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import { TbMeeple } from 'react-icons/tb';

const Home = () => {
  // State
  const [pageLoaded, setPageLoaded] = useState(false);
  const [generatedTitle, setGeneratedTitle] = useState('');
  const [generatedName, setGeneratedName] = useState('');
  const pageTitle = React.useMemo(
    () => (typeof window === 'undefined' ? 'Baraky Website' : `${generatedName} Website`),
    [generatedName],
  );
  const pageDescription = 'Follow me on all my social networks to know more about me';

  // Hooks
  useEffect(() => {
    setPageLoaded(true);
    startPool(10, setGeneratedTitle, `Hello! My name is`);
    startPool(10, setGeneratedName, `Baraky`, 5);
  }, []);
  return (
    <React.Fragment>
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        canonical="https://baraky.com.br"
        openGraph={{
          url: 'https://baraky.com.br',
          title: pageTitle,
          description: pageDescription,
          images: [{ url: '/working-robot.png' }],
          siteName: pageTitle,
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Background>
        <Banner>
          <PictureContainer>
            <Picture src="/selfie.png" />
          </PictureContainer>
          <BannerTitleContainer>
            <BannerPresentation delay={0.5} loaded={pageLoaded}>
              <strong>{generatedTitle}</strong>
            </BannerPresentation>
            <BannerTitle delay={1} loaded={pageLoaded}>
              João Fernando <strong>{generatedName}</strong>
            </BannerTitle>
            <BannerSubtitle delay={1.2} loaded={pageLoaded}>
              Javascript developer and mechatronics engineer
            </BannerSubtitle>
            <SocialContainer delay={1.4} loaded={pageLoaded}>
              <SocialItem href="https://www.linkedin.com/in/baraky" rel="noopener" target="_blank">
                <FaLinkedinIn size="50px" />
              </SocialItem>
              <SocialItem href="https://github.com/jfbaraky" rel="noopener" target="_blank">
                <FaGithubAlt size="50px" />
              </SocialItem>
              <SocialItem href="https://www.instagram.com/jfbaraky" rel="noopener" target="_blank">
                <FaInstagram size="50px" />
              </SocialItem>
              <SocialItem href="https://twitter.com/jfbaraky" rel="noopener" target="_blank">
                <FaTwitter size="50px" />
              </SocialItem>
              <SocialItem
                href="https://www.instagram.com/contando.os.pontos"
                rel="noopener"
                target="_blank"
              >
                <TbMeeple size="50px" />
              </SocialItem>
            </SocialContainer>
          </BannerTitleContainer>
        </Banner>
      </Background>
    </React.Fragment>
  );
};

export default Home;
