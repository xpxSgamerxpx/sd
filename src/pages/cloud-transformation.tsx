import Image from 'next/image'
import Section from '@/components/Section'
import PageTitle from '@/components/PageTitle'
import Grid from '@/components/Grid'
import BottomCTASection from '@/components/BottomCTASection'
import SuccessCTASection from '@/components/SuccessCTASection'
import CloudGearIcon from '@/components/icons/CloudGearIcon'
import GearWrenchIcon from '@/components/icons/GearWrenchIcon'
import CloudMoneyIcon from '@/components/icons/CloudMoneyIcon'
import NetworkShieldIcon from '@/components/icons/NetworkShieldIcon'

import banner from '@/public/services/cloud-transformation-top-banner.jpg'
import datacenter from '@/public/services/design-a-cloud.jpg'
import ctaBg from '@/public/services/cloud-cta.jpg'
import ctaMobile from '@/public/services/cloud-transformation-cta-mobile.jpg'
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

export default function CloudTransformation({setShowContact}: any) {
    return (
        <>
            <PageTitle image={banner}>
            The problem with hiring consultants
            </PageTitle>

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
                        <h2 className="text-xl font-bold mb-4"><a href="#my-section" style={{ color: 'blue', textDecoration: 'underline' }}>Solution:</a></h2>
                        <p> Don't let your company's success be determined by social media trends or marketing "gurus". There is a solution to achieve your business goals without wasting time and money.</p>
                      
                    </SlideUp>
                </div>
            </Section>


            <BottomCTASection setShowContact={setShowContact} />
        </>
    )
}