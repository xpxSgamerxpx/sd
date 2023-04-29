import Image from "next/image";

export interface TeamMemberProps {
    image: string
    name: string
    title: string
    Education: string
    Experience: string
}

export default function TeamMember({image, name, title, Experience, Education,}: TeamMemberProps) {
    return (
        <div className="text-center">
            <Image className="rounded-full mx-auto mb-2 max-h-[180px]" src={`/assets/team/${image}`} alt={name} width={180} height={180} />
            <h3 className="text-xl font-bold text-black">{name}</h3>
            <h1 className="text-3xl lg:text-2xl font-bold">Possition</h1>
            <p>{title}</p>
            <h1 className="text-3xl lg:text-2xl font-bold">Education</h1>
            <p>{Education}</p>
            <h1 className="text-3xl lg:text-2xl font-bold">Experience</h1>
            <p>{Experience}</p>
        </div>
    )
}