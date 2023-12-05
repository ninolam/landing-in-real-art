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
    text: Record<Lang, string>
    ourPagesTitle: Record<Lang, string>
    ourCompanyTitle: Record<Lang, string>
    homeLinkText: Record<Lang, string>
    aboutLinkText: Record<Lang, string>
    marketPlaceLinkText: Record<Lang, string>
    faqLinkText: Record<Lang, string>
    teamLinkText: Record<Lang, string>
    partnersLinkText: Record<Lang, string>
    contactTitle: Record<Lang, string>
  }

export type NewsletterText = {
    title: Record<Lang, string>
    description: Record<Lang, string>
    email_placeholder: Record<Lang, string>
}  

export type NewsletterData = NewsletterText

export type FaqButtons = {
    readFaq: Record<Lang, string>
}  

export type FaqTexts = {
    faqMain: Record<Lang, string>
    question1: Record<Lang, string>
    question2: Record<Lang, string>
    question3: Record<Lang, string>
    answer1: Record<Lang, string>
    answer2: Record<Lang, string>
    answer3: Record<Lang, string>
  
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
    desc: Record<Lang, string>
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
    text1: Record<Lang, string>
    text2: Record<Lang, string>
    headerText: Record<Lang, string>
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


export type MemberData = {
    text1: Record<Lang,string>
    text2: Record<Lang,string>
    role: Record<Lang,string>
    name: string
    photo: string
  }[];
