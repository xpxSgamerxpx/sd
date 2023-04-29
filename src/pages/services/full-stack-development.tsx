import Image from 'next/image'
import Section from '@/components/Section'
import PageTitle from '@/components/PageTitle'
import Grid from '@/components/Grid'
import SuccessCTASection from '@/components/SuccessCTASection'
import BottomCTASection from '@/components/BottomCTASection'
import ArchitectureIcon from '@/components/icons/ArchitectureIcon'
import ApplicationIcon from '@/components/icons/ApplicationIcon'
import ModernizationIcon from '@/components/icons/ModernizationIcon'

import banner from '@/public/services/full-stack-banner.jpg'
import solutions from '@/public/services/solutions-for-technology-needs.jpg'
import ctaBg from '@/public/services/full-stack-cta.jpg'
import ctaMobile from '@/public/services/full-stack-cta-mobile.jpg'
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

export default function FullStackDevelopment({setShowContact}: any) {
    return (
        <>
            <PageTitle image={banner}>
                Soulution!
            </PageTitle>

            <Section>
                <Grid>
                    <FadeIn className="order-2 md:order-1">
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">WE answered your prayer</h2>
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

            <Section className="bg-black text-white">
                <div className="grid md:grid-cols-3 gap-5 text-center">
                    <SlideUp className="bg-white/20 p-10">
                        <ArchitectureIcon className="mx-auto mb-4 w-16 fill-white" />

                        <h2 className="text-xl font-bold mb-2"></h2>
                        <p></p>
                    </SlideUp>

                    <SlideUp className="bg-white/20 p-10">
                        <ApplicationIcon className="mx-auto mb-4 w-16 fill-white" />

                        <h2 className="text-xl font-bold mb-2"></h2>
                        <p></p>
                    </SlideUp>

                    <SlideUp className="bg-white/20 p-10">
                        <ModernizationIcon className="mx-auto mb-4 w-16 fill-white" />

                        <h2 className="text-xl font-bold mb-2"></h2>
                        <p> </p>
                    </SlideUp>
                </div>
            </Section>




            <BottomCTASection setShowContact={setShowContact} />
        </>
    )
}