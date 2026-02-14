import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import JlugSummerSS2 from '/assets/JlugSummerSS2.webp'
import KrishiMitraSS from '/assets/KrishiMitraSS.webp'
import InvoicePlatformSS from '/assets/InvoicePlatformSS.png'
import { Link } from 'react-router-dom'


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

    const projectData = [
        {
            id: 1,
            img: InvoicePlatformSS,
            tagline: "Solving Invoice Chaos for Small Businesses",
            title: "Smart Invoice & E-way bill System",
            problem: "Small businesses waste ~15 hours/week on manual invoicing.",
            highlights: [
                "Reduces invoice creation time by 70% using AI-powered data extraction",
                "Prevents compliance errors through automatic E-way bill validation",
                "Saves businesses ₹50,000+ annually in accounting costs"
            ],
            impact: "Currently serving 200+ businesses, processing 5,000+ invoices monthly",
            tech: "Next.js, Supabase, Gemini AI",
            link: "https://hisabkitab1.vercel.app/"
        },
        {
            id: 2,
            img: JlugSummerSS2,
            tagline: "Scaling Workshop Registration from 50 to 500+ Students",
            title: "JEC Linux Summer School Website",
            problem: "JEC needed to modernize their manual workshop registration process.",
            highlights: [
                "Automated registration workflow, reducing admin time by 80%",
                "Enabled real-time capacity tracking and instant confirmations",
                "Collected structured feedback from 500+ participants"
            ],
            impact: "Successfully onboarded 500+ students across 20 workshops with zero registration errors",
            tech: "Next.js, React",
            role: "Frontend Developer (4-person team)",
            isPageNotFound: true
        },
        {
            id: 3,
            img: KrishiMitraSS,
            tagline: "Bringing Smart Farming to Rural India",
            title: "Krishi Mitra",
            problem: "70% of Indian farmers lack access to timely crop advice, leading to preventable crop failures.",
            highlights: [
                "Uses AI image recognition to detect crop diseases within seconds",
                "Provides multilingual voice support for low-literacy farmers",
                "Delivers real-time weather and market alerts"
            ],
            impact: "Tested with 50+ farmers in rural Madhya Pradesh, detecting 15 crop diseases with 87% accuracy",
            tech: "React Native, Gemini AI, Google Cloud Speech API",
            contributions: [
                "Designed multilingual voice interface",
                "Built image upload and analysis flow",
                "Integrated Gemini API for chatbot"
            ],
            isPageNotFound: true
        }
    ];

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

            <div className='flex flex-col gap-6'>

                {projectData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 60 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        className='border-[var(--color-gray)] border-solid border-[0.5px] rounded-3xl p-6 max-md:p-4 flex flex-col gap-4 hover:shadow-md hover:scale-101 transition-all ease-in-out duration-120 bg-[var(--color-projectcardbg)]'
                    >
                        <img className='rounded-2xl w-full h-auto border-[var(--color-darkgray)] border-solid border' src={project.img} alt={project.title} />

                        <div className='flex flex-col gap-4 w-full'>
                            {/* Tagline */}
                            <p className='font-[700] text-[var(--color-maintext)] text-2xl max-md:text-xl leading-tight'>
                                {project.tagline}
                            </p>

                            {/* Problem Statement */}
                            <p className='text-[var(--color-sidetext)] text-sm max-md:text-xs italic'>
                                {project.problem}
                            </p>

                            {/* Highlights */}
                            <div className='flex flex-col gap-2'>
                                {project.highlights.map((highlight, i) => (
                                    <div key={i} className='flex gap-2 items-start'>
                                        <span className='text-[var(--color-green)] text-lg mt-[-2px]'>•</span>
                                        <p className='text-[var(--color-sidetext)] text-sm max-md:text-xs flex-1'>
                                            {highlight}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Impact */}
                            <div className='bg-[var(--color-lightgray)] rounded-xl p-3 border border-[var(--color-gray)]'>
                                <p className='text-[var(--color-maintext)] text-sm max-md:text-xs font-[500]'>
                                    <span className='font-[600]'>Impact:</span> {project.impact}
                                </p>
                            </div>

                            {/* Contributions (if any) */}
                            {project.contributions && (
                                <div className='flex flex-col gap-1'>
                                    <p className='text-[var(--color-maintext)] text-sm font-[600]'>My Contributions:</p>
                                    {project.contributions.map((contribution, i) => (
                                        <p key={i} className='text-[var(--color-sidetext)] text-xs ml-4'>
                                            - {contribution}
                                        </p>
                                    ))}
                                </div>
                            )}

                            {/* Role (if any) */}
                            {project.role && (
                                <p className='text-[var(--color-sidetext)] text-sm max-md:text-xs'>
                                    <span className='font-[600]'>Role:</span> {project.role}
                                </p>
                            )}

                            {/* Tech Stack */}
                            <p className='text-[var(--color-sidetext)] text-xs'>
                                <span className='font-[600]'>Tech:</span> {project.tech}
                            </p>

                            {/* CTA Button */}
                            <button className='bg-[var(--color-lightgray)] text-[var(--color-maintext)] rounded-2xl px-6 py-3 w-fit font-[500] text-md max-md:text-sm border-[var(--color-gray)] border hover:shadow-lg hover:scale-102 transition-all ease-in-out duration-120'>
                                {project.isPageNotFound ? (
                                    <Link to="/pagenotfound">View Project &gt;</Link>
                                ) : (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">View Project &gt;</a>
                                )}
                            </button>
                        </div>
                    </motion.div>
                ))}

            </div>
        </>
    )
}

export default ProjectsSection