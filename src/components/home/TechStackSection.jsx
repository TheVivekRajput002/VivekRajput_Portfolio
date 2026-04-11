import { BadgeCheckIcon } from "lucide-react"
import { Badge } from "../ui/badge"
import { motion } from "motion/react"
import techStackData from "../../data/TechStackData"

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
        <div className="flex flex-col items-center gap-6 ">

            {
                techStackData.map((techStack) => (
                    <motion.div
                        key={techStack.id}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="flex w-full flex-wrap gap-3"
                    >
                        <MotionBadgeWrap><Badge>
                            {techStack.id === 2 && <BadgeCheckIcon color="var(--color-maintext)" />}
                            {techStack.title}
                        </Badge></MotionBadgeWrap>
                        {
                            techStack.stack.map(stack => (
                                <MotionBadgeWrap key={`${techStack.id}-${stack.name}`}>
                                    <Badge variant="outline" className="gap-1.5">
                                        {stack.icon && <stack.icon className="inline-block" />}
                                        {stack.name}
                                    </Badge>
                                </MotionBadgeWrap>
                            ))
                        }
                    </motion.div>
                ))
            }


        </div>
    )
}
