import React, { useRef } from 'react'
import BlogCard from '../components/blogs/BlogCard'
import BlogsData from '../data/BlogsData.json'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom';


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
                            <Link key={blog.id} to={`/blog/${blog.slug}`}>
                                <BlogCard title={blog.title} description={blog.description} id={blog.id} category={blog.category} date={blog.date} img_url={blog.img_url} />
                            </Link>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Blogs
