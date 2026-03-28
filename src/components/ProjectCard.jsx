

import React from 'react'
import Phone from './Phone'
import isDark from '../components/Navbar'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Github } from "lucide-react"

const ProjectCard = ({ Url, Head, SS, tagline, problem, highlights, impact, tech, role, contributions, icons, year, github }) => {

    return (
        <div>
            <div className='mt-6  flex flex-col gap-3 mt-2'>

                <div className='grid grid-cols-[250px_auto] max-md:grid-cols-1 -mb-14 max-md:mb-0 gap-2'>

                    {/* phone  */}
                    <motion.div
                        initial={{
                            x: 220,
                        }}
                        animate={{
                            x: 0
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.9
                        }}
                        className='max-md:hidden scale-78 -mt-23 -mb-5'
                    >
                        <Phone PhoneWidth={`w-[335px]`} PhoneHeight={`h-[96vh]`} WebUrl={Url} />
                    </motion.div>

                    <div className='flex gap-2 flex-col'>
                        {/* Title Card */}
                        <motion.div
                            initial={{
                                y: -100,
                                opacity: 0
                            }}
                            animate={{
                                y: 0,
                                opacity: 1
                            }}
                            transition={{
                                delay: 2.2,
                                duration: 0.4
                            }}
                            className="relative z-5 py-5 px-6 bg-[var(--color-projectcardbg)] rounded-xl hover:scale-101 shadow-lg hover:shadow-xl transition-all"
                        >
                            <p className='font-[700] text-[var(--color-maintext)] text-3xl max-md:text-xl leading-tight mb-2'>
                                {Head}
                            </p>
                            <p className='mt-1 font-[400] text-[var(--color-sidetext)] text-xs max-md:text-xs'>
                                {year}
                            </p>
                            <div className='flex items-center gap-3 mt-4'>
                                <button className='bg-[var(--color-lightgray)] text-[var(--color-maintext)] rounded-2xl px-6 py-3 font-[500] text-sm max-md:text-sm hover:shadow-md hover:scale-102 transition-all border border-[var(--color-gray)]'>
                                    <Link to={Url} target="_blank" >View Project &gt;</Link>
                                </button>
                                {github && (
                                    <Link to={github} target="_blank" className="hover:scale-110 transition-all text-[var(--color-maintext)] relative top-[2px]">
                                        <Github height={18} stroke='var(--color-maintext)' strokeWidth={1.5} />
                                    </Link>
                                )}
                            </div>
                        </motion.div>

                        {/* Screenshot */}
                        <motion.div
                            initial={{
                                y: -170,
                                opacity: 0
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,

                            }}
                            transition={{
                                delay: 3,
                                duration: 0.4
                            }}
                            className='relative z-4 rounded-xl p-2 bg-[var(--color-projectcardbg)] shadow-sm hover:shadow-lg hover:scale-101 transition-all'
                        >
                            <img src={SS} alt={Head} className='w-[100%] -py-10 rounded-lg border-[var(--color-darkgray)] border-solid border-[0.5px]' />
                        </motion.div>
                    </div>

                </div>


                {/* Problem & Details */}
                <motion.div
                    initial={{
                        y: -100,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,

                    }}
                    transition={{
                        delay: 3.8,
                        duration: 0.4
                    }}
                    className='relative z-3 p-5 bg-[var(--color-projectcardbg)] rounded-xl shadow-sm hover:shadow-lg hover:scale-101 transition-all flex flex-col gap-4'
                >
                    {/* Problem Statement */}
                    {problem && (
                        <p className='text-[var(--color-sidetext)] text-sm max-md:text-xs italic border-l-2 border-[var(--color-gray)] pl-3'>
                            {problem}
                        </p>
                    )}

                    {/* Highlights */}
                    {highlights && highlights.length > 0 && (
                        <div className='flex flex-col gap-2'>
                            {highlights.map((highlight, i) => (
                                <div key={i} className='flex gap-2 items-start'>
                                    <span className='text-[var(--color-green)] text-lg mt-[-2px] flex-shrink-0'>•</span>
                                    <p className='text-[var(--color-sidetext)] text-sm max-md:text-xs flex-1'>
                                        {highlight}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Impact Box */}
                    {impact && (
                        <div className='bg-[var(--color-lightgray)] rounded-lg p-3 border border-[var(--color-gray)]'>
                            <p className='text-[var(--color-maintext)] text-sm max-md:text-xs font-[500]'>
                                <span className='font-[600]'>Impact:</span> {impact}
                            </p>
                        </div>
                    )}

                    {/* Contributions */}
                    {contributions && contributions.length > 0 && (
                        <div className='flex flex-col gap-1'>
                            <p className='text-[var(--color-maintext)] text-sm font-[600]'>My Contributions:</p>
                            {contributions.map((contribution, i) => (
                                <p key={i} className='text-[var(--color-sidetext)] text-xs ml-4'>
                                    - {contribution}
                                </p>
                            ))}
                        </div>
                    )}

                    {/* Role */}
                    {role && (
                        <p className='text-[var(--color-sidetext)] text-sm max-md:text-xs'>
                            <span className='font-[600]'>Role:</span> {role}
                        </p>
                    )}

                    {/* Tech */}
                    {tech && (
                        <p className='text-[var(--color-sidetext)] text-xs'>
                            <span className='font-[600]'>Tech:</span> {tech}
                        </p>
                    )}
                </motion.div>

                {/* Tech Stack Icons */}
                <motion.div
                    initial={{
                        y: -100,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,

                    }}
                    transition={{
                        delay: 4.6,
                        duration: 0.4
                    }}
                    className='relative z-2 p-4 bg-[var(--color-projectcardbg)] rounded-xl shadow-sm hover:shadow-lg hover:scale-101 transition-all'
                >
                    <p className='text-sm text-[var(--color-sidetext)] max-md:text-xs mb-3'><b>Tech Stack</b></p>
                    <div className='flex'>
                        <div className='flex items-center gap-2 flex-wrap'>
                            {
                                icons.map((icon) => (
                                    <img className='h-8' key={icon.id} src={icon.img} alt="tech icon" />
                                ))
                            }
                        </div>
                    </div>
                </motion.div>


            </div>

            <div className='my-10 h-[0.05px] opacity-40 w-[80%] bg-[var(--color-maintext)] mx-auto'></div>


        </div>
    )
}

export default ProjectCard