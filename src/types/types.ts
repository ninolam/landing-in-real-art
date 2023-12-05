export type Lang = 'CN' | 'EN' | 'FR'

export const defaultLangObject = {
    'CN': '',
    'EN': '',
    'FR': ''
}
export type HeaderButtons = {
    JoinIRA: Record<string,string>,
    StartIRA: Record<string,string>
}

export type HeaderTexts = {
    text1: Record<string,string>
}


export type HeaderData = HeaderButtons & HeaderTexts

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

export type FaqButtons = {
    readFaq: {
        [key: string]: string
      }  
}  

export type FaqTexts = {
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
  
}  

export type HelpIraData = FaqButtons & FaqTexts


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

export interface JoinIraDataButton {
    JoinIRA: {
        [key: string]: string
    }
    StartIRA: {
        [key: string]: string
    }
}

export interface JoinIraDataText {
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


export type JoinIraData = JoinIraDataButton & JoinIraDataText

export type JoinTrendButtons = {
    artgallery_join: Record<Lang, string>
    artgallery_join_link: string
    aas_join: Record<Lang, string>
    aas_join_link: string
    marketplace_join: Record<Lang, string>
    marketplace_join_link: string    
}

export type JoinTrendTexts = {
    title: Record<Lang, string>
    artgallery_title: Record<Lang, string>
    artgallery_description: Record<Lang, string>
    aas_title: Record<Lang, string>
    aas_description: Record<Lang, string>
    marketplace_title: Record<Lang, string>
    marketplace_description: Record<Lang, string>
}

export type JoinTrendData = JoinTrendButtons & JoinTrendTexts

export type MenuButtons = {
    Presale: Record<Lang, string>,
    Testnet: Record<Lang, string>
}

export type MenuElements = {
    About: Record<Lang, string>,
    Community: Record<Lang, string>
    Team: Record<Lang, string>
}


export type MenuData = MenuButtons & MenuElements