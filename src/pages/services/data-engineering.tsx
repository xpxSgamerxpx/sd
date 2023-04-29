import path from 'path'
import {promises as fs} from 'fs'
import Image from 'next/image'
import CloudGearIcon from '@/components/icons/CloudGearIcon'
import GearWrenchIcon from '@/components/icons/GearWrenchIcon'
import CloudMoneyIcon from '@/components/icons/CloudMoneyIcon'
import NetworkShieldIcon from '@/components/icons/NetworkShieldIcon'
import Link from 'next/link'
import solutions from '@/public/services/solutions-for-technology-needs.jpg'
import Button from '@/components/Button'
import Section from '@/components/Section'
import Grid from '@/components/Grid'
import HeroSlider from '@/components/index/HeroSlider'
import BottomCTASection from '@/components/BottomCTASection'
import Waves from '@/components/Waves'
import CaseStudyCarousel from '@/components/index/CaseStudyCarousel'
import ContactButton from '@/components/ContactButton'
import SlideUp from '@/components/animations/SlideUp'
import FadeIn from '@/components/animations/FadeIn'
import ArrowIcon from '@/components/icons/ArrowIcon'
import datacenter from '@/public/services/design-a-cloud.jpg'
import fastest50 from '@/public/fast-50.png'
import services from '@/public/index/services.jpg'
import automate from '@/public/index/automate.jpg'
import automateMobile from '@/public/index/automate-mobile.jpg'
import empower from '@/public/index/empower.jpg'
import empowerMobile from '@/public/index/empower-mobile.jpg'

export default function Home({cards, setShowContact}: any) {
  return (
    <>
    <div className="relative">
      <Section
        backLayer={<HeroSlider />}
        className="md:min-h-[678px]"
        containerClassName="z-20"
      >
        <div className="z-20 lg:w-1/2 text-white text-center lg:text-left">

          <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Achieving profitable revenue growth, without breaking the bank.
          </h1>

        </div>
      </Section>

      <Waves className="absolute -bottom-10 left-0 right-0 z-10" />
    </div>

    <Section
        style={{backgroundImage: `url(${services.src})`}}
        className={`md:mx-5 bg-left bg-no-repeat bg-[length:65%_auto] md:!py-0 px-0 sm:bg-none`}
    >
      <div className="grid lg:grid-cols-2">
        <div>
          <Image
            className="mb-4 lg:hidden"
            src={services}
            alt=''
          />
        </div>
        
      </div>
    </Section>

    <Section>
                <Grid>
                    <FadeIn className="order-2 md:order-1">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">Problem</h2>

                        <p><strong> 
                        You’re here because you want to grow your business. 

You want more money coming in the door, more often, more consistently. 

</strong></p>
                        <p className="mb-2">You’ve been thinking of hiring someone to help you out with all this stuff, but they’re just too expensive. 

Many consultants and firms use the word “senior” as an excuse to charge outrageous rates, but don’t deliver on their price tag. 

Entrepreneurs’ reluctance to spend hundreds of dollars on a consultant is understandable. 
z
Nobody wants to throw so much money at someone just to get next to nothing in return. 

So without clear guidance, many entrepreneurs get overwhelmed.

They turn to the newest fads on social media and marketing ‘gurus’.

But they soon realise that their efforts were in vain. 

We’re here to let you know that there is a solution. 

No longer will your company’s success be dictated by the new hottest thing on your LinkedIn feed. </p>

                    </FadeIn>
                    <div className="md:order-2">
                        <Image src={datacenter} alt="" />
                    </div>
                </Grid>
            </Section>

            <Section className="bg-black text-white">
                <div className="grid md:grid-cols-2 gap-5 text-center">
                    <SlideUp className="bg-white/20 p-10">
                        <CloudGearIcon className="mx-auto mb-4 w-16 fill-white" />
                        <h2 className="text-xl font-bold mb-4">Growing Your Business:</h2>
                        <p>You're motivated to grow your business and bring in more money on a consistent basis. </p>
                    </SlideUp>

                    <SlideUp className="bg-white/20 p-10">
                        <GearWrenchIcon className="mx-auto mb-4 w-16 fill-white" />
                        <h2 className="text-xl font-bold mb-4">Cost of Hiring:</h2>
                        <p>Hiring someone to help you may seem too expensive, especially when consultants and firms use the "senior" label to justify high rates without delivering results.</p>
                    </SlideUp>



                    <SlideUp className="bg-white/20 p-10">
                        <NetworkShieldIcon className="mx-auto mb-4 w-16 fill-white" />
                        <h2 className="text-xl font-bold mb-4">Overwhelmed Entrepreneur:</h2>
                        <p>Entrepreneurs can feel overwhelmed and turn to ineffective marketing tactics without clear guidance. </p>
                    </SlideUp>

                    <SlideUp className="bg-white/20 p-10">
                        <CloudMoneyIcon className="mx-auto mb-4 w-16 fill-white" />
                        <h2 className="text-xl font-bold mb-4"><a href="" style={{ color: '', textDecoration: '' }}>Scam</a></h2>
                        <p> Don't let your company's success be determined by social media trends or marketing "gurus". There is a solution to achieve your business goals without wasting time and money.</p>
                      
                    </SlideUp>
                </div>
            </Section>

            <Section>
                <Grid>
                    <FadeIn className="order-2 md:order-1">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">Soulution</h2>
                        <p className="mb-2"><strong>Decades of experience in revenue management, pricing, and consulting & operations have allowed us to pull millions of dollars for our clients.</strong></p>
                        <p>That’s because the strategies we use are battle-tested and data-driven. 

When they’re implemented properly, you are sure to see results. 

And don’t worry, we won’t be messing with all the infrastructure your business has already put in-place.

We work with our customers to make sure that their goals are met and their visions can finally come true. 

We promise, by implementing our science-backed revenue growth strategies, your company will see results.

We don’t just plan. We execute. You can be sure that the campaigns we implement will deliver. 

Get your growth back on track, with Pricing Insight Partners.

</p>
                    </FadeIn>
                    <div className="md:order-2">
                        <Image src={solutions} alt="" />
                    </div>
                </Grid>
            </Section>

  
    <BottomCTASection setShowContact={setShowContact} />
    </>
  )
}

export async function getStaticProps() {
  const dataDirectory = path.join(process.cwd(), 'data')
  const cardsJson = await fs.readFile(dataDirectory + '/smallCards.json', 'utf8')

  return {
    props: {
      cards: JSON.parse(cardsJson)
    }
  }
}
