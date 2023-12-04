export type Lang = 'CN' | 'EN' | 'FR'

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

export interface AtristNameDesc {
    name: string
    desc: Record<string, string>
}  

export interface ArtistCarouselElement {
    artist1: AtristNameDesc,
    artist2: AtristNameDesc,
    artist3: AtristNameDesc,
    artist4: AtristNameDesc,
    artist5: AtristNameDesc,
    artist6: AtristNameDesc,
    artist7: AtristNameDesc,
    artist8: AtristNameDesc
}

export type Artists  = Array<ArtistCarouselElement>


export interface JoinIraData {
    JoinIRA: {
        [key: string]: string
    }
    StartIRA: {
        [key: string]: string
    }    
    text1: {
        [key: string]: string
    }
    text2: {
        [key: string]: string
    }    
    headerText: {
        [key: string]: string
    }    
}

export interface JoinTrendData {
    title: {
        [key: string]: string
    }
    artgallery_title: {
        [key: string]: string
    }    
    artgallery_description: {
        [key: string]: string
    }
    aas_title: {
        [key: string]: string
    }    
    aas_description: {
        [key: string]: string
    }    

    marketplace_title: {
        [key: string]: string
    }
    marketplace_description: {
        [key: string]: string
    }    
    artgallery_join: {
        [key: string]: string
    }
    artgallery_join_link: {
        [key: string]: string
    }
    aas_join: {
        [key: string]: string
    }    
    aas_join_link: {
        [key: string]: string
    }    
    marketplace_join: {
        [key: string]: string
    }    
    marketplace_join_link: {
        [key: string]: string
    }    
}

export interface MenuData {
    Presale: {
        [key: string]: string
    }
    Testnet: {
        [key: string]: string
    }    
    Community: {
        [key: string]: string
    }
    Team: {
        [key: string]: string
    }    
    About: {
        [key: string]: string
    }    
}