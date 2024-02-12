import { useState, useEffect } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import styles from './CookieConsent.module.scss'
import { Box, Button, ButtonGroup, Center, Flex, Heading, Text, VStack, useColorModeValue  } from '@chakra-ui/react';

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

      <VStack as="div" bg={bg} borderRadius="md" boxShadow="md" p={4} position="fixed" bottom="0" left="0" right="0" zIndex={9999} height="50%">
        {/* Title */}
        <Heading as="h3" size="md" mb={2}>
            Cookie Policy
          </Heading>

          {/* Description */}
          <Text>
            This website uses cookies to improve your user experience. 
            <br/>
            By using this website, you consent to the use of all cookies in
            accordance with our Privacy Policy.
          </Text>

          {/* Buttons */}
          <Box display="flex" justifyContent="space-between" mt={4}>
            <Button colorScheme="teal" onClick={handleAccept} >Accept</Button>
            <Button variant="ghost" onClick={handleDecline}>Decline</Button>
          </Box>
      </VStack>
      )}
      {/* Rest of your Next.js application */}
    </CookiesProvider>
  );
}

export default CookieConsent;
