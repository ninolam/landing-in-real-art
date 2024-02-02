import { Lang, defaultLangObject } from "./types"

export type PresaleProsTexts = {
    mainTitle: Record<Lang, string>
    mainDescription: Record<Lang, string>
    buyArtWorkTitle: Record<Lang, string>
    buyArtWorkDescription: Record<Lang, string>
    buyArtWorkDetail: Record<Lang, string>
    exclusiveBenefitsTitle: Record<Lang, string>
    exclusiveBenefitsDescription: Record<Lang, string>
    exclusiveBenefitsDetail: Record<Lang, string>
    bonusTitle: Record<Lang, string>
    bonusDescription: Record<Lang, string>
    bonusDetail: Record<Lang, string>
}

export type PresaleProsButtons = {
    buyArtWork: Record<Lang, string>
    buyArtWorkLink: string
    exclusiveBenefits: Record<Lang, string>
    exclusiveBenefitsLink: string
    bonus: Record<Lang, string>
    bonusLink: string
}

export type PresaleBuyingProcessTexts = {
    mainTitle: Record<Lang, string>
    mainDescription: Record<Lang, string>
    steps: Record<string, PresaleBuyingProcessStep>
}

export type PresaleBuyingProcessStep = {
    description: Record<Lang, string>
    title: Record<Lang, string>
    stepNumber: Record<Lang, string>
}


export type PresaleBuyingProcessButtons = {
    next: Record<Lang, string>
    previous: Record<Lang, string>
}

export const defaultStepObject = {
    'description': defaultLangObject,
    'title': defaultLangObject,
    'stepNumber': defaultLangObject
}

export const defaultStepsObject = {
    'step1': defaultStepObject,
    'step2': defaultStepObject,
}

