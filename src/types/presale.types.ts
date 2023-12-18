import { Lang } from "./types"

export type PresaleProsTexts = {
    mainTitle: Record<Lang, string>
    mainDescription: Record<Lang, string>
    buyArtWorkTitle: Record<Lang, string>
    buyArtWorkDescription: Record<Lang, string>
    exclusiveBenefitsTitle: Record<Lang, string>
    exclusiveBenefitsDescription: Record<Lang, string>
    bonusTitle: Record<Lang, string>
    bonusDescription: Record<Lang, string>
}

export type PresaleProsButtons = {
    buyArtWork: Record<Lang, string>
    buyArtWorkLink: string
    exclusiveBenefits: Record<Lang, string>
    exclusiveBenefitsLink: string
    bonus: Record<Lang, string>
    bonusLink: string
}