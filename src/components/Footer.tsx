import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/components/Logo'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone} from '@fortawesome/free-solid-svg-icons/faPhone'
import {faMapMarker} from '@fortawesome/free-solid-svg-icons/faMapMarker'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons/faLinkedinIn'

import aws from '@/public/aws-white.png'
import gcp from '@/public/gc-white.png'
import azure from '@/public/azure-white.png'

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="container px-4 py-12 mx-auto lg:flex">
                <div className="px-4 lg:w-2/5 lg:pl-0 lg:pr-16 mb-8 lg:mb-0">
                    <div className="w-full max-w-[230px] mb-10 mx-auto lg:mx-0">
                        
                    </div>

                    <div className="flex items-center lg:px-0 md:px-16">
                        <div className="w-1/3 pr-4">
                           
                        </div>
                        <div className="w-1/3 px-4 border-l border-r border-white/10">
                            
                        </div>
                        <div className="w-1/3 pl-4">
                        </div>
                    </div>
                </div>
                <div className="grow text-center lg:text-left mb-8 md:mb-0">
                    <h3 className="text-lg font-bold mb-3">Who We Are</h3>
                    <nav className="leading-loose">
                        <ul>
                            <li>
                                <Link className="hover:text-accent" href="/">Home</Link>
                            </li>
                            <li>
                                <Link className="hover:text-accent" href="/about">About</Link>
                            </li>
                            <li>
                                <Link className="hover:text-accent" href="/careers">soon</Link>
                            </li>
                            <li>
                                <Link className="hover:text-accent" href="/insights">a bit later</Link>
                            </li>
                            <li>
                                <Link className="hover:text-accent" href="/case-studies">later</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="grow text-center lg:text-left mb-8 md:mb-0">
                    <h3 className="text-lg font-bold mb-3">Our Services</h3>
                    <nav className="leading-loose">
                        <ul>
                            <li>
                                <Link className="hover:text-accent" href="/services/cloud-transformation">Problem</Link>
                            </li>
                            <li>
                                <Link className="hover:text-accent" href="/services/full-stack-development">Solution</Link>
                            </li>
                            <li>
                                <Link className="hover:text-accent" href="/services/data-engineering">future</Link>
                            </li>
                            <li>
                                <Link className="hover:text-accent" href="/services/data-science">future</Link>
                            </li>
                            <li>
                                <Link className="hover:text-accent" href="/services/strategy-execution">future</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="grow text-center lg:text-left">
                    <h3 className="text-lg font-bold mb-3">Get In Touch</h3>

                    <div className="mb-3">
                        <a className="flex items-center justify-center lg:justify-start hover:text-accent" href="tel:(314) 384-3225">
                            <FontAwesomeIcon className="mr-4" icon={faPhone} />
                            <div>your number</div>
                        </a>
                    </div>

                    <div className="mb-3">
                        <a className="flex items-center justify-center lg:justify-start hover:text-accent" href="https://goo.gl/maps/AGhk1LsPnY66R3VL8">
                            <FontAwesomeIcon className="mr-4" icon={faMapMarker} />
                            <div>
                            Pricing Insight Partners Consulting<br />
                                someplace<br />
                               somewhere<br />
                                idk where
                            </div>
                        </a>
                    </div>

                    <div>
                        <a className="flex items-center justify-center lg:justify-start hover:text-accent" href="">
                            <FontAwesomeIcon className="mr-4" icon={faLinkedinIn} />
                            <div>LinkedIn</div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-dark-gray p-4 text-xs">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between">
                    <div className="text-center">
                        &copy; {(new Date()).getFullYear()}
                    </div>
                </div>
            </div>
        </footer>
    )
}