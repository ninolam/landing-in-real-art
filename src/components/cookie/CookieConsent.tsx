import { useState, useEffect } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import styles from './CookieConsent.module.scss'
import { Box, Button, ButtonGroup, Center, Flex, Heading, Text, VStack, useColorModeValue  } from '@chakra-ui/react';
import classNames from 'classnames';

function CookieConsent() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['cookieConsent']);

  const bg = useColorModeValue('gray.100', 'gray.700');
  useEffect(() => {
    if (cookies['cookieConsent']) {
      setCookiesAccepted(true);
      setShowCookieBanner(false);
    }
  }, []);

  const acceptAllCookies = () => {
    // Set appropriate cookies with necessary parameters (domain, expiration, Secure flag)
    /*
    setCookie('cookieConsent', 'all', {
      domain: window.location.hostname,
      path: '/',
      secure: true,
      expires: 365 * 24 * 60 * 60, // One year
    })
    */
    setCookie('cookieConsent', '', {
        path: '/'
    })
    setShowCookieBanner(false)
    setCookiesAccepted(true)
  };

  const manageCookies = () => {
    // Implement logic to open a modal or page where users can manage specific cookie categories
    // ...
  }

  /*
  const declineCookies = () => {
    // Set a minimal essential cookie (if required)
    setCookie('essential_cookie', 'true', {
      domain: window.location.hostname,
      path: '/',
      secure: true,
      expires: 30 * 24 * 60 * 60, // One month
    });
    setShowCookieBanner(false)
    setCookiesAccepted(false)
  }*/

  const [showConsent, setShowConsent] = useState(true);

  const handleAccept = () => {
    // Store acceptance in localStorage or a cookie here
    localStorage.setItem('acceptedCookies', 'true');
    setShowConsent(false);
  };

  const handleDecline = () => {
    // Handle declining cookies, e.g., disable analytics
    setShowConsent(false);
  };

  const handleClose = () => {
    // Optionally, store a temporary dismissal preference
    localStorage.setItem('dismissedCookies', 'true');
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <CookiesProvider>
      {showCookieBanner && (

          <>
          <div className={styles.cookieContainer}>
          <div className={styles.cookieBanner}>
            <div className={styles.cookieBannerInner}>
              <div style={{gridTemplateColumns: '1fr'}}>
                <div id="banner-inner-description">
                  <div id="banner-description" className="banner-description">
                    <div>
                      This site uses tracking technologies. You may opt in or opt out of the use of these technologies.
                    </div>
                  </div>
                </div>
              </div>  

              <div className={styles.cookieButtonGroup}>
                <div style={{display: 'flex'}}>
                  <button type="button" 
                    className={classNames(styles.cookieBannerButton, styles.buttonSecondary, styles.preferencesbutton )} 
                    data-testid="Consent Settings-btn">Consent Settings
                  </button>
                </div>
                <div className={styles.cookieButtonGroup}>
                  <button type="button" onClick={handleDecline}
                    className={classNames(styles.cookieBannerButton, styles.buttonSecondary, styles.preferencesbutton )}>
                    Deny
                  </button>
                  <button type="button" onClick={handleAccept}
                    className={classNames(styles.cookieBannerButton, styles.buttonSecondary, styles.preferencesbutton )}>
                    Accept all
                  </button>
                </div>
              </div>
            </div>  
          </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
          </div>
          </>


      )}
      {/* Rest of your Next.js application */}
    </CookiesProvider>
  );
}

export default CookieConsent;
