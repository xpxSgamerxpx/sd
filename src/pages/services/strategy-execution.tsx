import Image from 'next/image'
import PageTitle from '@/components/PageTitle'
import Section from '@/components/Section'
import Grid from '@/components/Grid'
import SuccessCTASection from '@/components/SuccessCTASection'
import BottomCTASection from '@/components/BottomCTASection'
import StrategyIcon from '@/components/icons/StrategyIcon'
import DatalakesIcon from '@/components/icons/DatalakesIcon'
import StreamingDataIcon from '@/components/icons/StreamingDataIcon'

import develop from '@/public/services/develop-a-plan.jpg'
import chart from '@/public/services/strategy-execution_1.png'
import ctaBg from '@/public/services/strategy-cta.jpg'
import ctaMobile from '@/public/services/strategy-cta-mobile.jpg'
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

export default function StrategyAndExecution({setShowContact}: any) {
    return (
        <>
        <PageTitle image={develop}>
            something here &amp; put here
        </PageTitle>

        <Section>
            <Grid>
                <FadeIn className="order-2 md:order-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-2"></h2>

                    <p className="mb-2"> </p>

                    <p><strong></strong></p>
                </FadeIn>

                <div className="md:order-2">
                    <Image src={develop} alt="" />
                </div>
            </Grid>
        </Section>

        <Section className="bg-black text-white text-center">
            <div className="grid md:grid-cols-3 gap-5">
                <SlideUp className="bg-white/20 p-10">
                    <StrategyIcon className="mx-auto mb-4 w-16 fill-white" />

                    <h2 className="text-xl font-bold mb-2"></h2>
                    <p></p>
                </SlideUp>
                <SlideUp className="bg-white/20 p-10">
                    <DatalakesIcon className="mx-auto mb-4 w-16 fill-white" />

                    <h2 className="text-xl font-bold mb-2"></h2>
                    <p> </p>
                </SlideUp>
                <SlideUp className="bg-white/20 p-10">
                    <StreamingDataIcon className="mx-auto mb-4 w-16 fill-white" />

                    <h2 className="text-xl font-bold mb-2"></h2>
                    <p></p>
                </SlideUp>
            </div>
        </Section>

        <Section>
            <Grid>
                <FadeIn className="order-2 md:order-1 text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-2"></h2>

                    <p className="mb-2"></p>

                    <p className="mb-2"> </p>

                    <p className="mb-2"><strong> </strong></p>

                    <p></p>
                </FadeIn>

                <div className="md:order-2">
                    
                </div>
            </Grid>
        </Section>

        <Section
            style={{backgroundImage: `url(${ctaBg.src})`}}
            className="bg-cover bg-center max-lg:!bg-none bg-med-gray"
        >
            <Grid>
                <div>
                    <Image className="object-cover lg:hidden md:h-[500px]" src={ctaMobile} alt="" />
                </div>
                <div className="flex flex-col justify-center md:min-h-[500px] text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">See what we can accomplish together</h2>

                    <p className="text-xl leading-relaxed">
                        
                    </p>
                </div>
            </Grid>
        </Section>

        <SuccessCTASection />

        <BottomCTASection setShowContact={setShowContact} />
        </>
    )
}