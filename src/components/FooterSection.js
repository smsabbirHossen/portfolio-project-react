import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
  padding-top: 5rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col4 {
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;

    .para {
      margin-left: 0;
      max-width: 750px;
    }
    .copyright__content {
      width: 90%;
      max-width: 1200px;
      margin: 0 auto;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0;
    }
    .footer__col1,
    .footer__col2,
    .footer__col3,
    .footer__col4 {
    margin-top:3rem;
  }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copy
  }
`;
function FooterSection() {
  return (
    <Fade bottom>
      <FooterStyles>
        <div className="container">
          <Fade right>
            <div className="footer__col1">
              <h1 className="footer__col1__title">Sabbir Hossain</h1>
              <PText className="para">
                I am working as a freelance website deisgner and developer from
                Gazipur, Bangladesh . I create professional websites .
              </PText>
            </div>
          </Fade>
          <div className="footer__col2">
            <FooterCol
              heading="Impotrant Links"
              links={[
                {
                  type: 'Link',
                  title: 'Home',
                  path: '/home',
                },
                {
                  type: 'Link',
                  title: 'About',
                  path: '/about',
                },
                {
                  type: 'Link',
                  title: 'Projects',
                  path: '/projcts',
                },
                {
                  type: 'Link',
                  title: 'Contact',
                  path: '/contacts',
                },
              ]}
            />
          </div>
          <div className="footer__col3">
            <FooterCol
              heading="Contact Info"
              links={[
                {
                  title: '+8801303238290',
                  path: 'tel:+8801303238290',
                },
                {
                  title: 'smsabbir925@gmail.com',
                  path: 'mailto:smsabbir925@gmail.com',
                },
                {
                  title: 'GFC Circle , Gazipur, Bangladesh',
                  path: 'https://google.com/maps',
                },
              ]}
            />
          </div>
          <div className="footer__col4">
            <FooterCol
              heading="Social Links"
              links={[
                {
                  title: 'Facebook',
                  path: 'https://facebook.com',
                },
                {
                  title: 'Twitter',
                  path: 'https://twitter.com',
                },
                {
                  title: 'Instagram',
                  path: 'https://instagram.com',
                },
              ]}
            />
          </div>
        </div>
        <div className="copyright">
          <div className="copyright__content">
            <PText>© 2021 - Portfolio | Designed By Sabbir Hossain </PText>
          </div>
        </div>
      </FooterStyles>
    </Fade>
  );
}

export default FooterSection;
