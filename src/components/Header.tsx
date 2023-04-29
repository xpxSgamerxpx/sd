import {Dispatch, SetStateAction} from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'
import MenuIcon from '@/components/icons/MenuIcon'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons/faChevronDown'

export interface HeaderProps {
    setShowMenu: Dispatch<SetStateAction<boolean>>
    setShowContact: Dispatch<SetStateAction<boolean>>
}

export default function Header({setShowMenu, setShowContact}: HeaderProps) {
    return (
        <header className="bg-black py-3 px-4 sticky top-0 z-30">
            <div className="container mx-auto flex justify-between items-center">
                
        

                <button onClick={e => setShowMenu(true)}>
                    <MenuIcon className="w-6 lg:hidden fill-white" />
                </button>

                <nav className="hidden lg:block text-white">
                    <ul className="flex">
                        <li className="group px-8 py-4 text-lg relative">
                            <Link href="/index">
                                Home
                            </Link>

                        </li>
                        <li className="px-8 py-4 text-lg">
                            <Link href="/about">
                                About
                            </Link>
                        </li>
                        <li className="xl:px-8 py-4 text-lg">
                            <Link href="/case-studies">
                                Testimonials
                            </Link>
                        </li>
                        
                        <li className="pl-8 py-4 text-lg">
                            <a
                                href="#"
                                onClick={e => {
                                    e.preventDefault()
                                    setShowContact(true)
                                }}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
