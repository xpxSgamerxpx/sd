import Image from 'next/image'
import PageTitle from '@/components/PageTitle'
import Section from '@/components/Section'
import Grid from '@/components/Grid'
import MLOpsIcon from '@/components/icons/MLOpsIcon'
import StrategyIcon from '@/components/icons/StrategyIcon'
import ModelBuildingIcon from '@/components/icons/ModelBuildingIcon'
import SuccessCTASection from '@/components/SuccessCTASection'
import BottomCTASection from '@/components/BottomCTASection'

import banner from '@/public/services/data-science-banner.jpg'
import insights from '@/public/services/insights-you-need-from-key-data.jpg'
import ctaBg from '@/public/services/data-science-cta.jpg'
import ctaMobile from '@/public/services/data-science-cta-mobile.jpg'
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

export default function DataScience({setShowContact}: any) {
    return (
        <>
        <PageTitle image={banner}>
            Why us
        </PageTitle>

        <Section>
            <Grid>
                <FadeIn className="order-2 md:order-1">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">
                        Why
                    </h2>

                    <p className="mb-2"><strong>catching thing</strong></p>

                    <p>talk more about why us</p>
                </FadeIn>

                <div className="md:order-2">
                    <Image className="object-cover md:h-[400px]" src={insights} alt="" />
                </div>
            </Grid>
        </Section>

        <Section className="bg-black text-white text-center">
            <div className="grid md:grid-cols-3 gap-5">
                <SlideUp className="bg-white/20 p-10">
                    <MLOpsIcon className="mx-auto mb-4 w-16 fill-white" />

                    <h2 className="text-xl font-bold mb-2">COMMERCIAL STRATEGY</h2>
                    <p> Define target customer segments based on size (TAM), behavior,
needs, price elasticity, and geography; develop the right product
strategy, proposition and positioning that resonates with target
segments.</p>
                </SlideUp>
                <SlideUp className="bg-white/20 p-10">
                    <StrategyIcon className="mx-auto mb-4 w-16 fill-white" />

                    <h2 className="text-xl font-bold mb-2">MONETIZATION STRATEGY</h2>
                    <p> Set the packaging and pricing strategy that will accelerate
prospect acquisition and customer expansion, maximize value
delivery, upsell and cross-sell, optimize time to value, recurring
value delivery for end customers.</p>
                </SlideUp>
                <SlideUp className="bg-white/20 p-10">
                    <ModelBuildingIcon className="mx-auto mb-4 w-16 fill-white" />

                    <h2 className="text-xl font-bold mb-2">CUSTOMER VALUE MANAGEMENT</h2>
                    <p> Achieve profitable growth and maximize value delivery to and
from existing customers by optimizing list and target prices and
creating retention and win-back frameworks.</p>
                </SlideUp>
            
                <SlideUp className="bg-white/20 p-10">
                    <MLOpsIcon className="mx-auto mb-4 w-16 fill-white" />

                    <h2 className="text-xl font-bold mb-2">GO-TO-MARKET MOTION</h2>
                    <p>Develop implementation strategy with prioritized GTM plan,
channel strategy, migration strategy, price book updates, value
selling guidance, and post-launch KPIs such as Win Rates, ACVs,
NRR, LTV/CAC, ARPU/ARPA etc.</p>
</SlideUp>
            </div>
        </Section>

       
        <BottomCTASection setShowContact={setShowContact} />
        </>
    )
}