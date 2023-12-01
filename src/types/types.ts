export interface FooterData {
    twitterUrl: string
    instagramUrl: string
    linkedInUrl: string
    homeLinkUrl: string
    aboutLinkUrl: string
    marketPlaceLinkUrl: string
    faqLinkUrl: string
    teamLinkUrl: string
    partnersLinkUrl: string
    Email: string
    Telephone: string
    Adresse: string
    text: {
        [key: string]: string
    }
    ourPagesTitle: {
        [key: string]: string
    }
    ourCompanyTitle: {
        [key: string]: string
    }
    homeLinkText: {
        [key: string]: string
    }
    aboutLinkText: {
        [key: string]: string
    }
    marketPlaceLinkText: {
        [key: string]: string
    }
    faqLinkText: {
        [key: string]: string
    }
    teamLinkText: {
        [key: string]: string
    }
    partnersLinkText: {
        [key: string]: string
    }
    contactTitle: {
        [key: string]: string
    }        
  }

export interface NewsletterData {
    title: {
      [key: string]: string;
    };
    description: {
      [key: string]: string;
    };
    email_placeholder: {
      [key: string]: string;
    };
  }

export interface HelpIraData {
    faqMain: {
      [key: string]: string
    }
    question1: {
      [key: string]: string
    }
    question2: {
      [key: string]: string
    }
    question3: {
      [key: string]: string
    }
    answer1: {
      [key: string]: string
    }
    answer2: {
      [key: string]: string
    }
    answer3: {
      [key: string]: string
    }
    readFaq: {
      [key: string]: string
    }
  }

export interface ArtistsData {
    title: {
      [key: string]: string
    }
    description: {
      [key: string]: string
    }    
  }
