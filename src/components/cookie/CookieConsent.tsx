"use client";
import { useState, useEffect } from "react";
import { setCookie, hasCookie, deleteCookie } from "cookies-next";
import styles from "./CookieConsent.module.scss";
import classNames from "classnames";

function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  let date = new Date();
  date.setMonth(date.getMonth() + 6);

  const manageCookies = () => {
    // Implement logic to open a modal or page where users can manage specific cookie categories
    // ...
  };

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

  const handleAccept = () => {
    setCookie("cookieConsent", "accepted", {
      path: "/",
      expires: date,
    });
    setShowConsent(false);
  };

  const handleDecline = () => {
    // Handle declining cookies, e.g., disable analytics
    setCookie("cookieConsent", "declined", {
      path: "/",
      expires: date,
    });
    setShowConsent(false);
  };

  // const handleClose = () => {
  //   // Optionally, store a temporary dismissal preference
  //   localStorage.setItem("dismissedCookies", "true");
  //   setShowConsent(false);
  // };

  useEffect(() => {
    setShowConsent(!hasCookie("cookieConsent"));
  }, []);

  if (!showConsent) {
    return null;
  }

  return (
    <>
      <div className={styles.cookieContainer}>
        <div className={styles.cookieBanner}>
          <div className={styles.cookieBannerInner}>
            <div style={{ gridTemplateColumns: "1fr" }}>
              <div id="banner-inner-description">
                <div id="banner-description" className="banner-description">
                  <div>
                    This site uses tracking technologies. You may opt in or opt
                    out of the use of these technologies.
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.cookieButtonGroup}>
              {/* <div style={{ display: "flex" }}>
                <button
                  type="button"
                  className={classNames(
                    styles.cookieBannerButton,
                    styles.buttonSecondary,
                    styles.preferencesbutton
                  )}
                  data-testid="Consent Settings-btn"
                >
                  Consent Settings
                </button>
              </div> */}
              <div className={styles.cookieButtonGroup}>
                <button
                  type="button"
                  onClick={handleDecline}
                  className={classNames(
                    styles.cookieBannerButton,
                    styles.buttonSecondary,
                    styles.preferencesbutton
                  )}
                >
                  Deny
                </button>
                <button
                  type="button"
                  onClick={handleAccept}
                  className={classNames(
                    styles.cookieBannerButton,
                    styles.buttonSecondary,
                    styles.preferencesbutton
                  )}
                >
                  Accept all
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CookieConsent;
