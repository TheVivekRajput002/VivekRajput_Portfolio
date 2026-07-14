import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import JlugSummerSS from '/assets/SS/JlugSummerSS.png'
import KrishiMitraSS from '/assets/SS/KrishiMitraSS.webp'
import InvoicePlatformSS from '/assets/SS/InvoicePlatformSS.png'
import HireButSmarterSS from '/assets/SS/HireButSmarterSS.png'
import AIN2NSS from '/assets/SS/AIN2NSS.png'
import BrainFoodSS from '/assets/SS/BrainFoodSS.png'
import { Link } from 'react-router-dom'
import IconsFlow from './IconsFlow'



const ProjectsSection = ({ projects }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        if (isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isExpanded]);

    const imageMap = {
        "HireButSmarterSS": HireButSmarterSS,
        "InvoicePlatformSS": InvoicePlatformSS,
        "AIN2NSS": AIN2NSS,
        "BrainFoodSS": BrainFoodSS
    };

    const projectData = projects;

    return (

        <>
            <motion.h2
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6 }}
                className=' font-[600] text-[var(--color-maintext)] text-4xl max-md:text-2xl mt-18 max-md:mt-[8vh] mb-10 max-md:mb-[6vh] text-center'
            >
                Here's What I've <br />Been Up To.
            </motion.h2>

               <div className='mt-8 mb-8'>
                    <IconsFlow />
            </div>

            <div className='flex flex-col gap-2'>

                {projectData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 60 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className='border-[var(--color-gray)] border-solid border-[0.5px] rounded-3xl p-4 max-md:p-3 pb-6 flex flex-col max-md:pb-5 gap-4 m-2 max-md:m-0 max-md:mb-4 hover:shadow-md hover:scale-101 transition-all ease-in-out duration-120 bg-[var(--color-projectcardbg)]'
                    >

                        <img className='rounded-2xl w-full h-auto border-[var(--color-darkgray)] border-solid border' src={imageMap[project.img] || project.img} alt="" />
                        <div className='flex flex-col gap-5 mx-auto w-[90%]'>
                            <p className='font-[600] text-[var(--color-maintext)] text-2xl max-md:text-xl'>{project.title}</p>
                            <p className=' text-sm text-[var(--color-p2text)] mt-[-10px] max-md:text-xs'>{project.para}</p>
                            <span>
                                <button className='bg-[var(--color-lightgray)] text-[var(--color-maintext)] rounded-2xl px-6 py-3 h-full font-[500] text-md max-md:text-sm border-[var(--color-gray)] border-[0.2px] hover:shadow-lg hover:scale-101 transition-all ease-in-out duration-120'>
                                    <a href={project.link} target="_blank">View Project &gt;</a>
                                    {/* <Link to="/pagenotfound">View Project &gt;</Link> */}
                                </button>
                            </span>
                        </div>

                    </motion.div>
                ))}

            </div>
        </>
    )
}

export default ProjectsSection