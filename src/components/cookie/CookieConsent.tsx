import { useState, useEffect } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import styles from './CookieConsent.module.scss'
import { Box, Button, ButtonGroup, Center, Flex, Heading, Icon, Spacer, Text  } from '@chakra-ui/react';
import * as evaiconsOutline from '@emotion-icons/evaicons-outline'
import { IoClose, IoNotificationsOutline } from 'react-icons/io5';

function CookieConsent() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['cookieConsent']);

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
        <div className={styles["cookie-banner"]}>
          <Center width="100%">
            <Box
              bg="white"
              boxShadow="md"
              borderRadius="sm"
              p={4}
              width="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              position="fixed"
              bottom="0"
              left="0"
              right="0"
              zIndex="8888"
              height="700px"
            >
              <Text fontWeight="semibold">This website uses cookies...</Text>
              <Flex align="center">
                <Text mx={2}>
                  We use cookies to enhance your experience, analyze site usage, and
                  personalize ads. Please read our
                  <a href="/cookie-policy">Cookie Policy</a> to learn more.
                </Text>
                {/*<IoNotificationsOutline/>*/}
                
              </Flex>
              <Flex>
                <Button mr={2} onClick={handleAccept} variant="outline">
                  Accept
                </Button>
                <Button variant="outline" onClick={handleDecline}>
                  Decline
                </Button>
              </Flex>
              {/*<IoClose onClick={handleClose}/>*/}
              
            </Box>
    </Center>
          
          
        </div>
      )}
      {/* Rest of your Next.js application */}
    </CookiesProvider>
  );
}

export default CookieConsent;
