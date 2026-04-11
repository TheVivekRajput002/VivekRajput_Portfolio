import React from 'react'
import { motion } from 'motion/react';
import vivek_rajput_pfp from '/assets/vr_professional_pfp.png'
import vr_pfp from '/assets/vr_pfp.png'

const HeroSection = ({ Name, Role, Description }) => {
    return (
        <>

            <main >

                <motion.img
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 1.1 }}
                    // src={vr_pfp}
                    src={vivek_rajput_pfp}
                    className='h-[110px] mb-[20px] max-md:h-[85px]'
                />


                {/* <h2 className='font-[600] mb-[5px] text-5xl'>Hey, I’m Vivek Rajput.</h2> */}
                {/* <h2 className='font-[600] text-5xl'>Dreamer & Designer</h2> */}

                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 2.3
                    }}
                    className='font-[800] text-[var(--color-maintext)] max-md:text-3xl text-4xl clash'

                >
                    {Name}
                </motion.p>

                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 2.3
                    }}
                    className='font-[650] text-[var(--color-maintext)] text-4xl max-md:text-2xl clash '>
                    {Role}
                </motion.p>



                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 2
                    }}
                    className='text-[var(--color-sidetext)] text-md max-lg:text-sm mt-4 max-md:mt-2 mb-7 leading-relaxed poppins'>
                    {Description}
                </motion.p>

                <motion.span
                    initial={{
                        opacity: 0,
                        y: 40
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeIn",
                        delay: 1.8
                    }}
                    className='bg-[var(--color-green)] px-6 py-3 rounded-full text-center max-md:px-4 max-md:py-2'>
                    <span className='text-sm font-medium text-[#178D00] max-md:text-xs poppins' >
                        <span className="pulse-container">
                            <span className="pulse-dot"></span>
                            <span className="pulse-ring"></span>
                        </span>
                        Available For new project
                    </span>
                </motion.span>



            </main>

            <style jsx>{`
 .clash{
 font-family: 'Clash Grotesk', sans-serif;
font-weight: 500; /* or 600 */

 }

 .cabinet{
 font-family: 'Cabinet Grotesk', sans-serif;
 }



                   .pulse-container {
            position: relative;
            display: inline-block;
            width: 8px;
            height: 8px;
            vertical-align: middle;
            margin-right: 14px;
        }

        .pulse-dot {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgb(23, 141, 0);
            border-radius: 50%;
            z-index: 2;
        }

        .pulse-ring {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgb(23, 140, 0);
            border-radius: 50%;
            animation: pulse 2s ease-out infinite;
            z-index: 1;
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
                opacity: 0.7;
            }
            100% {
                transform: scale(2.5);
                opacity: 0;
            }
        }
            `}</style>

        </>
    )
}

export default HeroSection
