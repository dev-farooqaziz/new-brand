import dynamic from "next/dynamic"

const AutoPlaySlider = dynamic(() => import('./slider/AutoPlaySlider'))
const AutoScrollSlider = dynamic(() => import('./slider/AutoScrollSlider'))
const Hero = dynamic(() => import('./hero/Hero'))
const Who = dynamic(() => import('./who/Who'))
const What = dynamic(() => import('./what/What'))
const Industry = dynamic(() => import('./industry/Industry'))
const Work = dynamic(() => import('./work/Work'))
const Publication = dynamic(() => import('./publication/Publication'))
const Startup = dynamic(() => import('./startup/Startup'))
const Technologies = dynamic(() => import('./technologies/Technologies'))
const Feedback = dynamic(() => import('./feedback/Feedback'))
const Solution = dynamic(() => import('./solution/Solution'))
const Choose = dynamic(() => import('./choose/Choose'))
const Contact = dynamic(() => import('./contact/Contact'))
const Faqs = dynamic(() => import('./faq/Faqs'))
const AwardLogos = dynamic(() => import('./awardlogos/AwardLogos'))
const Hero2 = dynamic(() => import('./hero/Hero2'))
const Trun = dynamic(() => import('./trun/Trun'))
const Hurdles = dynamic(() => import('./hurdles/Hurdles'))
const Expert = dynamic(() => import('./expert/Expert'))
const Journey = dynamic(() => import('./journey/Journey'))
const Trust = dynamic(() => import('./trust/Trust'))
const Recognition = dynamic(() => import('./recognition/Recognition'))

export {
    AutoPlaySlider,
    AutoScrollSlider,
    Hero,
    Who,
    What,
    Industry,
    Work,
    Publication,
    Startup,
    Technologies,
    Feedback,
    Solution,
    Choose,
    Contact,
    Faqs,
    AwardLogos,
    Hero2,
    Trun,
    Hurdles,
    Expert,
    Journey,
    Trust,
    Recognition,
}