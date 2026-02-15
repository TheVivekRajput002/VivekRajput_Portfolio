import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react"

import { Badge } from "./ui/badge"

export default function TechSection() {
    return (
        <div className="flex flex-col items-center gap-2 ">
            <div className="flex w-full flex-wrap gap-3">
                <Badge
             
                >
                <BadgeCheckIcon color="var(--color-maintext)" />
                    Frontend
                </Badge>
                <Badge variant="outline">HTML</Badge>
                <Badge variant="outline">CSS</Badge>
                <Badge variant="outline">Javascript</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
                <Badge variant="outline">Framer Motion</Badge>
                <Badge variant="outline">React.js</Badge>
                <Badge variant="outline">NextJS</Badge>
                <Badge variant="outline">Typescript</Badge>
            </div>
            <div className="flex w-full flex-wrap gap-2 mt-4">
                <Badge
                >Backend</Badge>
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">Express.js</Badge>
                <Badge variant="outline">NextJS</Badge>
            </div>
            <div className="flex w-full flex-wrap gap-2 mt-4">
                <Badge
                >Database</Badge>
                <Badge variant="outline">mySQL</Badge>
                <Badge variant="outline">PostgreSQL</Badge>
                <Badge variant="outline">MongoDB</Badge>
            </div>
            <div className="flex w-full flex-wrap gap-2 mt-4">
                <Badge
                >Coding Languages</Badge>
                <Badge variant="outline">JavaScript</Badge>
                <Badge variant="outline">Typescript</Badge>
                <Badge variant="outline">Python</Badge>
             
            </div>
            <div className="flex w-full flex-wrap gap-2 mt-4">
                <Badge>UI/UX Designer</Badge>
                <Badge variant="outline">Figma</Badge>
                <Badge variant="outline">Canva</Badge>
            </div>
        </div>
    )
}
