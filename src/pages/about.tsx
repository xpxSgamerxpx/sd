import * as path from 'path'
import { promises as fs } from 'fs'
import Image from 'next/image'
import PageTitle from '@/components/PageTitle'
import Section from '@/components/Section'
import Button from '@/components/Button'
import BottomCTASection from '@/components/BottomCTASection'
import TeamMember, {TeamMemberProps} from '@/components/about/TeamMember'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp} from '@fortawesome/free-regular-svg-icons/faThumbsUp'
import {faThumbsDown} from '@fortawesome/free-regular-svg-icons/faThumbsDown'

import banner from '@/public/about/about-banner.jpg'
import ourOrigins from '@/public/about/our-origins.jpg'
import leaders from '@/public/about/leaders.jpg'
import weMeetYou from '@/public/about/we-meet-you.jpg'
import ctaBg from '@/public/about/about-cta.jpg'
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

export default function About({team, setShowContact}: any) {
    return (
        <>
        <PageTitle image={banner}>
            About us
        </PageTitle>


       

        <Section className="bg-black text-white">
            <div className="grid md:grid-cols-2 gap-5">
      
            </div>
            <FadeIn className="flex flex-col justify-center md:w-2/5 md:min-h-[1000px] text-center md:text-center">
                <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4"></h2>
                <p className="mb-2"></p>
                <p className="mb-4"></p>

                <div >
                </div>
            </FadeIn>
        </Section>
        <Section>
            <h2 className="text-3xl lg:text-5xl font-bold text-black text-center mb-8">
                Meet the Csuite leaders
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {team.map((teamMember: TeamMemberProps) => (
                    <TeamMember
                        key={teamMember.name}
                        image={teamMember.image}
                        name={teamMember.name}
                        title={teamMember.title}
                        Education={teamMember.Education}
                        Experience={teamMember.Experience}
                    />
                ))}
            </div>
        </Section>

        <BottomCTASection setShowContact={setShowContact} />
        </>
    )
}

export async function getStaticProps() {
    const dataDirectory = path.join(process.cwd(), 'data')
    const teamJson = await fs.readFile(dataDirectory + '/team.json', 'utf8')

    const team = (JSON.parse(teamJson) as any[]).map<any>(_ => ({
        name: `${_.firstName} ${_.lastName}`,
        sortBy: `${_.lastName},${_.firstName}`,
        image: `${_.firstName.replaceAll(' ', '_')}_${_.lastName.replaceAll("’", '').replaceAll("'", '')}.jpeg`,
        ..._
    }))

    team.sort((a, b) => a.sortBy.localeCompare(b.sortBy))

    return {
        props: {
            team
        }
    }
}