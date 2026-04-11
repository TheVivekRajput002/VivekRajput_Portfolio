import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

// https://www.emailjs.com/  NOTTTT tt
//  web3forms used 

const GetInTouch = ({ conclusion }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const accessKey = "49577ea2-c74f-43fe-a2b7-b2ba5190ccf2"

    const HandleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.target);
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                e.target.reset(); // Clear form HERE
                console.log('Message sent successfully!');
                setIsVisible(true);
                setTimeout(() => setIsVisible(false), 3000);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    // popup 

    const [isVisible, setIsVisible] = useState(false);


    return (
        <>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.7 }}
            >
                <h2 className='font-[500] text-[var(--color-maintext)] text-3xl max-md:text-2xl mb-4 mt-9 '>Get in touch</h2>
                <p className='text-[var(--color-sidetext)] text-md max-md:text-sm mt-[15px] mb-10 '>{conclusion.para}</p>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    onSubmit={HandleSubmit}
                >
                    <fieldset className='flex flex-col gap-3 max-md:gap-2'>
                        <div className='w-100% flex max-md:flex-col gap-3 max-md:gap-2'>
                            <input type="hidden" name="access_key" value={accessKey}></input>
                            <input type="hidden" name="subject" value="New Portfolio Message"></input>
                            <input name='from_name'
                                required
                                type="text" placeholder='Full Name' className=' bg-[var(--color-lightgray)] h-14 w-[50%] max-md:w-[100%] text-md max-md:text-sm font-[500] text-[var(--color-maintext)] p-3 border rounded-2xl border-[var(--color-gray)]' />
                            <input name='email'
                                required
                                type="email" placeholder='Email Address' className='  bg-[var(--color-lightgray)] h-14 w-[50%] max-md:w-[100%] text-md max-md:text-sm font-[500] text-[var(--color-maintext)] p-3 border rounded-2xl border-[var(--color-gray)]' />
                            {/* <input name='Email' type="email" placeholder='Email Address' className=' bg-[#f5f3f3b3] h-14 w-[50%] text-md font-[500] text-[#000000b3] p-3 border rounded-2xl border-[#dbdbdb]' /> */}

                        </div>
                        <textarea
                            required
                            placeholder='Write your message'
                            name="message" className='  bg-[var(--color-lightgray)] h-42 w-[100%] text-md max-md:text-sm font-[500] text-[var(--color-maintext)] p-4 border rounded-2xl border-[var(--color-gray)]' />
                        <button type='submit' className='h-14 w-auto hover:bg-[#383838] bg-black text-white rounded-2xl max-md:text-md font-[600]'>Send Message</button>

                    </fieldset>

                </motion.form >
            </motion.div>

            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-4 right-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3"
                    >
                        <CheckCircle className="text-green-500" size={20} />
                        <span className="text-gray-800 font-medium text-sm">Message sent successfully</span>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    )
}

export default GetInTouch