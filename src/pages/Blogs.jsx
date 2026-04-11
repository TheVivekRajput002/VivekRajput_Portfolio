import React, { useRef } from 'react'
import BlogCard from '../components/blogs/BlogCard'
import Footer from '../components/Footer'
import BlogsData from '../data/BlogsData.json'
import { motion, useInView } from 'framer-motion'


function Blogs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return (
        <>
            <div className=''>

                <motion.h2
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className=' font-[800] text-[var(--color-maintext)] text-5xl max-md:text-2xl mt-8 max-md:mt-[8vh] mb-10 max-md:mb-[6vh] text-center'
                >
                    Blogs.
                </motion.h2>

                <div className='flex flex-col gap-10 mt-14'>

                    {
                        BlogsData.map(blog => (
                            <BlogCard key={blog.id} title={blog.title} description={blog.description} />
                        ))
                    }
                </div>

                <div className='max-md:pt-[10vh] pt-20 pb-10 max-md:pb-[4vh]'>
                    <Footer />
                </div>

            </div>
        </>
    )
}

export default Blogs
