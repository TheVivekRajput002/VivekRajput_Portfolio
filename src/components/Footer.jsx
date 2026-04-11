import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Instagram, Mail, Earth, X, Linkedin, Github } from 'lucide-react'

const Footer = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (

        <div className='md:pt-20 pb-10 max-md:pb-[16vh]'>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
            >

                <p className='text-center text-md max-md:text-sm font-[400] text-[var(--color-maintext)] opacity-50 mb-6'>Copyright © 2025 TheVivekRajput002. All rights reserved.</p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='flex gap-5 justify-center'
                >
                    <div className='hover:scale-108 transition-all ease-in-out duration-120'>
                        <a target="_blank" href="https://www.instagram.com/tvr002/" ><Instagram height={20} stroke='var(--color-maintext)' strokeWidth={1.5} /></a>
                    </div>
                    <div className='hover:scale-108 transition-all ease-in-out duration-120'>
                        <a target="_blank" href="mailto:work.tvivekrajput@gmail.com"  ><Mail height={20} stroke='var(--color-maintext)' strokeWidth={1.5} /></a>
                    </div>
                    <div className='hover:scale-108 transition-all ease-in-out duration-120'>
                        <a target="_blank" href="https://www.linkedin.com/in/vivek-rajput-tvr002/"  ><Linkedin height={20} stroke='var(--color-maintext)' strokeWidth={1.5} /></a>
                    </div>
                    <div className='hover:scale-108 transition-all ease-in-out duration-120'>

                        <a target="_blank" href="https://github.com/TheVivekRajput002" ><Github height={20} stroke='var(--color-maintext)' strokeWidth={1.5} /></a>
                    </div>
                    <div className='hover:scale-108 transition-all ease-in-out duration-120'>
                        <a target="_blank" href="https://x.com/tvr002" >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="18"
                                height="23"
                                viewBox="0 0 30 30"
                            >
                                <path
                                    d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"
                                    fill='var(--color-maintext)'
                                    stroke='var(--color-maintext)'
                                    strokeWidth="0.001"
                                />
                            </svg>
                        </a>
                    </div>


                </motion.div>

            </motion.div>
        </div>
    )
}

export default Footer