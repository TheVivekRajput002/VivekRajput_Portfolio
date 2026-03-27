import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react"
import { Badge } from "./ui/badge"
import { motion } from "motion/react"

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        transition: { type: "spring", stiffness: 350, damping: 25 } 
    }
}

const MotionBadgeWrap = ({ children }) => (
    <motion.div variants={itemVariants}>
        {children}
    </motion.div>
)

export default function TechSection() {
    return (
        <div className="flex flex-col items-center gap-2 ">
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex w-full flex-wrap gap-3"
            >
                <MotionBadgeWrap>
                    <Badge>
                        <BadgeCheckIcon color="var(--color-maintext)" />
                        Frontend
                    </Badge>
                </MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Javascript</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Tailwind CSS</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Framer Motion</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">React.js</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Next.js</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Typescript</Badge></MotionBadgeWrap>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex w-full flex-wrap gap-2 mt-4"
            >
                <MotionBadgeWrap><Badge>Backend</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Node.js</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Express.js</Badge></MotionBadgeWrap>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex w-full flex-wrap gap-2 mt-4"
            >
                <MotionBadgeWrap><Badge>Database</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">mySQL</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">PostgreSQL</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">MongoDB</Badge></MotionBadgeWrap>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex w-full flex-wrap gap-2 mt-4"
            >
                <MotionBadgeWrap><Badge>Coding Languages</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">JavaScript</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Typescript</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Python</Badge></MotionBadgeWrap>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex w-full flex-wrap gap-2 mt-4"
            >
                <MotionBadgeWrap><Badge>UI/UX Designer</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Figma</Badge></MotionBadgeWrap>
                <MotionBadgeWrap><Badge variant="outline">Canva</Badge></MotionBadgeWrap>
            </motion.div>
        </div>
    )
}
