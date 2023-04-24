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
import { FaGithubAlt, FaLinkedinIn, FaTwitter, FaInstagram, FaMediumM } from 'react-icons/fa';
import { TbMeeple } from 'react-icons/tb';

const Home = () => {
  // State
  const [pageLoaded, setPageLoaded] = useState(false);
  const [generatedTitle, setGeneratedTitle] = useState('');
  const [generatedName, setGeneratedName] = useState('');
  const pageTitle = React.useMemo(
    () =>
      typeof window === 'undefined'
        ? 'Baraky Website | Javascript developer and Mechatronics engineer'
        : `${generatedName} Website | Javascript developer and Mechatronics engineer`,
    [generatedName],
  );
  const pageDescription = `Greetings! I'm Baraky, and I'm passionate about technology, development, games and cats. Follow me on social media to stay in touch!`;

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
          images: [
            { url: 'https://baraky.com.br/thumb.png', alt: 'Website Thumbnail' },
            { url: 'https://baraky.com.br/portrait.png', alt: 'Baraky Portrait' },
            { url: 'https://baraky.com.br/working-robot.png', alt: 'Working Robot' },
          ],
          siteName: pageTitle,
        }}
        twitter={{
          handle: '@jfbaraky',
          site: '@jfbaraky',
          cardType: 'summary_large_image',
        }}
      />
      <Background>
        <Banner>
          <PictureContainer delay={0.2} loaded={pageLoaded}>
            <Picture src="/selfie.png" alt="Face photo of João Baraky" title="That's me!" />
          </PictureContainer>
          <BannerTitleContainer>
            <BannerPresentation delay={0.5} loaded={pageLoaded}>
              <strong>{generatedTitle}</strong>
            </BannerPresentation>
            <BannerTitle delay={1} loaded={pageLoaded}>
              João Fernando <strong>{generatedName}</strong>
            </BannerTitle>
            <BannerSubtitle delay={1.2} loaded={pageLoaded}>
              Javascript developer and Mechatronics engineer
            </BannerSubtitle>
            <SocialContainer delay={1.4} loaded={pageLoaded}>
              <SocialItem
                href="https://www.linkedin.com/in/baraky"
                title="My LinkedIn"
                rel="noopener"
                target="_blank"
                time={2.5}
              >
                <FaLinkedinIn size="50px" />
              </SocialItem>
              <SocialItem
                href="https://github.com/jfbaraky"
                title="My GitHub"
                rel="noopener"
                target="_blank"
                time={3}
              >
                <FaGithubAlt size="50px" />
              </SocialItem>
              <SocialItem
                href="https://www.instagram.com/jfbaraky"
                title="My Instagram"
                rel="noopener"
                target="_blank"
                time={2}
              >
                <FaInstagram size="50px" />
              </SocialItem>
              <SocialItem
                href="https://twitter.com/jfbaraky"
                title="My Twitter"
                rel="noopener"
                target="_blank"
                time={3.5}
              >
                <FaTwitter size="50px" />
              </SocialItem>
              <SocialItem
                href="https://www.instagram.com/contando.os.pontos"
                title="Boardgame Instagram"
                rel="noopener"
                target="_blank"
                time={4}
              >
                <TbMeeple size="50px" />
              </SocialItem>
              <SocialItem
                href="https://medium.com/@jfbaraky"
                title="My Medium"
                rel="noopener"
                target="_blank"
                time={1.5}
              >
                <FaMediumM size="50px" />
              </SocialItem>
            </SocialContainer>
          </BannerTitleContainer>
        </Banner>
      </Background>
    </React.Fragment>
  );
};

export default Home;
