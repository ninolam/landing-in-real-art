declare global {
    interface Window {
        gtag: (type: string, action: string, options: { 'analytics_storage'?: string, 'page_path'?: string }) => void;
    }
}
export type Lang = 'CN' | 'EN' | 'FR'

export const defaultLangObject = {
    'CN': '',
    'EN': '',
    'FR': ''
}

export const defaultLangObjectArray = {
    'CN': [''],
    'EN': [''],
    'FR': ['']
}
export type TranslatedTexts = Record<Lang, string>

export type TranslatedArrayTexts = Record<Lang, Array<string>>

export type HeaderButtons = {
    button1: Record<Lang, string>,
    button2: Record<Lang, string>
    button1Link: string,
    button2Link: string
}

export type HeaderTexts = {
    title1: Record<Lang, string>
    title2: Record<Lang, string>
    text1: Record<Lang, string>
}


export type HeaderData = HeaderButtons & HeaderTexts

export interface FooterTexts {
    emailTitle: Record<Lang, string>,
    emailPlaceHolder: Record<Lang, string>
}

export interface FooterData<T extends string> {
    twitterUrl: T
    instagramUrl: T
    linkedInUrl: T
    teamLinkUrl: T
    partnersLinkUrl: T
    Email: string
    Telephone: T
    Adresse: T
    text: Record<Lang, T>
    ourCompanyTitle: Record<Lang, T>
    teamLinkText: Record<Lang, T>
    partnersLinkText: Record<Lang, T>
    contactTitle: Record<Lang, T>
    block1: FooterBlock
    block2: FooterBlock,
    emailTitle: Record<Lang, T>,
    emailPlaceHolder: Record<Lang, T>,
}

export interface FooterBlock {
    title: Record<Lang, string>
    lines: Array<FooterBlockLine>
}

export interface FooterBlockLine {
    text: Record<Lang, string>
    url: string

}


export type NewsletterText<T extends Record<Lang, string>> = {
    title: T
    description: T
    email_placeholder: T
    checkboxNewsLetter: T
    checkboxPrivateSale: T
    checkboxCollectionNfts: T
    sendEmailErrorMsg: T
    msgSuccessNewsLetter: T
    msgSuccessPrivateSale: T
    msgSuccessNfts: T
}

export type PartnersTexts<T extends Record<Lang, string>> = {
    mainTitle: T
}

export type PartnersData = PartnersTexts<Record<Lang, string>>

export type PrivateSaleText = {
    title: Record<Lang, string>
    description: Record<Lang, string>
    email_placeholder: Record<Lang, string>
}

export type NewsletterData = NewsletterText<Record<Lang, string>>

export type PrivateSaleData = PrivateSaleText

export type FaqHeroSection = {
    mainTitle: Record<Lang, string>
}

export type FaqButtons = {
    readFaq: Record<Lang, string>
    readFaqLink: string
}

export type FaqTexts<T extends Record<Lang, string>> = {
    faqTitle: T
    faqMain: T
    question1: T
    question2: T
    question3: T
    answer1: T
    answer2: T
    answer3: T
}

export type FaqPageMenu = {
    items: Array<FaqQuestion>,
    textButton: Record<Lang, string>
}

export type FaqPage = {
    faqNFT: FaqPageMenu,
    faqProject: FaqPageMenu
}


export type FaqQuestion = {
    answer: Record<Lang, string>,
    question: Record<Lang, string>
}

export type FaqQuestions = {
    items: Array<FaqQuestion>
}

export type AboutTexts = {
    mainTitle: Record<Lang, string>
    mainDescription: Record<Lang, string>
}

export type PresaleNftJoinMovementTexts = {
    mainTitle: Record<Lang, string>
    mainDescription: Record<Lang, string>
}

export type PresaleNftJoinMovementButtons = {
    buyNft: Record<Lang, string>
}

export type PresaleNftAboutArtistTexts = {
    mainTitle: Record<Lang, string>
    secondaryTitle: Record<Lang, string>
    description: Record<Lang, string>
}

export type PresaleNftCollectionTexts = {
    mainTitle: Record<Lang, string>
    secondaryTitle: Record<Lang, string>
    msgSuccessEmail: Record<Lang, string>
    msgErrorEmail: Record<Lang, string>
}

export type PresaleNftCollectionButtons = {
    buyLeloluceNft: Record<Lang, string>
    preBuyLeloluceNft: Record<Lang, string>
    viewMoreNfts: Record<Lang, string>
}

export type PresaleNftAboutArtistButtons = {
    discoverCollection: Record<Lang, string>
}

export type PresaleNftTopCreators = {
    card1: PresaleNftTopCreator
    card2: PresaleNftTopCreator
    card3: PresaleNftTopCreator
}

export type PresaleNftTopCreator = {
    artistDescription: Record<Lang, string>
    artistName: string
    photo: string
    urlPhoto: string
}

export type PresaleNftTopCreatorsTexts = {
    mainDescription: Record<Lang, string>
    mainTitle: Record<Lang, string>
}

export type PresaleNftTopCreatorsButtons = {
    discoverRwa: Record<Lang, string>
}

export type TosTexts = {
    mainTitle: Record<Lang, string>
    mainContent: Record<Lang, string>
}

export interface TosContentProps {
    mainContent: string
}

export type LegalNoticeTexts = {
    mainTitle: Record<Lang, string>
    mainContent: Record<Lang, string>
}

export type HelpIraData = FaqButtons & FaqTexts<Record<Lang, string>>


export interface ArtistsData {
    title: Record<Lang, string>
    description: Record<Lang, string>
}

export interface ArtistNameDesc {
    name: string
    desc: Record<Lang, string>
    image: string
}

export type ArtistCarouselElement = Record<string, ArtistNameDesc>


export type Artists = Array<ArtistNameDesc>

export interface JoinIraDataButton {
    JoinIRA: Record<Lang, string>
    StartIRA?: Record<Lang, string>
    JoinIRALink: string
    StartIRALink: Record<Lang, string>
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
    Resources: Record<Lang, string>
    AboutLink: string
    CommunityLink: string
    TeamLink: string
    ResourcesLink: string
}


export type MenuData = MenuButtons & MenuElements


export type MemberData = {
    text1: Record<Lang, string>
    text2: Record<Lang, string>
    role: Record<Lang, string>
    name: string
    photo: string
}[];


export interface TeamMemberProps {
    name: string
    photo: string
    role: string
    text1: string
    text2: string
}

export interface ArtistMemberProps {
    name: string
    image: string
    desc: string
}

export interface PresaleDataTexts {
    title1: Record<Lang, string>
    title2: Record<Lang, string>
    description: Record<Lang, string>
}

export interface PresaleDataButtons {
    seeDrop: Record<Lang, string>
    seeDropLink: string
}

export interface PresaleDropPanelArtworks {
    artworks: PresaleArtWorks
}

export type PresaleArtWorks = Array<PresaleArtWork>

export type PresaleArtWork = {
    artistName: string
    description: Record<Lang, string>
    image: string
    image2: string
    url: string
    url2: string
    price: number
    size: Record<Lang, string>
    name: Record<Lang, string>
    order: number
    mockups: string[]
    noBorder: boolean
    desactivate: boolean
}

export type CollectionLeloluceNfts = Array<LeloluceNft>

export type LeloluceNft = {
    description: Record<Lang, string>
    image: string
    video: string
    name: Record<Lang, string>
    price: string
    urlImage: string
    urlVideo: string
}

export type PresaleInvestmentsTexts = {
    card1: PresaleInvestmentsCard
    card2: PresaleInvestmentsCard
    card3: PresaleInvestmentsCard
}

export type PresaleInvestmentsCard = {
    number: TranslatedTexts
    details: TranslatedTexts
    details1: TranslatedArrayTexts
    details2: TranslatedArrayTexts
    title1: TranslatedTexts
    title2: TranslatedTexts
    backgroundImage: string
}

export type TestnetProsTexts = {
    card1: TestnetProsCard
    card2: TestnetProsCard
    card3: TestnetProsCard
    card4: TestnetProsCard
}

export type TestnetProsCard = {
    number: TranslatedTexts
    title1: TranslatedTexts
    urlLink: string
    backgroundImage: string
}

export interface PresaleDropPanelButtons {
    acquireArtWork: Record<Lang, string>,
    seeMoreImages: Record<Lang, string>,
    buyArtworkNow: Record<Lang, string>,
    closeArtworkDetail: Record<Lang, string>,
    detailArtWork: Record<Lang, string>,
    viewMoreArtworks: Record<Lang, string>
}

export type EndDateTimestamp = {
    seconds: number;
    nanoseconds: number;
}
export interface PresaleDropPanelTexts {
    endDrop: Record<Lang, string>
    countDown: {
        endDate: EndDateTimestamp
    }
    msgErrorEmail: Record<Lang, string>
    msgSuccessEmail: Record<Lang, string>
    titleFormEmail: Record<Lang, string>
}

export type PresaleDropPanelData = PresaleDropPanelArtworks & PresaleDropPanelButtons & PresaleDropPanelTexts

export interface ModalProps {
    title: string
    description: string
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    showModal: boolean
}

export interface AcquireModalProps {
    buttonBuyStripe: string,
    description: string
    imagePath: string
    imageUrl: string
    name: string
    size: string
    price: number
    msgSuccessEmail: string
    msgErrorEmail: string
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export interface BuyModalProps {
    showBuyModal: boolean
    setShowBuyModal: React.Dispatch<React.SetStateAction<boolean>>
    nftName: string
    description: string
    imagePath: string
    imageUrl: string
    videoUrl: string
    price: string,
    msgSuccessEmail: string,
    msgErrorEmail: string,
    buy: (() => void) | undefined
}

export interface NftProps {
    artistName: string
    nftName: string
    imagePath: string
    imageUrl: string
    videoUrl: string
    msgSuccessEmail: string
    msgErrorEmail: string
    price: string
    buttonBuy: string
    buttonPreBuy: string
}

export interface VideoNftProps {
    urlVideo: string
}