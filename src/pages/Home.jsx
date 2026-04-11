
import Footer from '../components/Footer'
import { motion } from 'motion/react';
import HeroSection from '../components/home/HeroSection';
import GetInTouch from '../components/home/GetInTouch';
import InfiniteFlow from '../components/home/InfiniteFlow';
import About from '../components/home/About';
import ProjectsSection from '../components/home/ProjectsSection';
import HomeData from '../data/HomeData.json'
import WorkExperience from '../components/home/WorkExperience';
import TechStackSection from '../components/home/TechStackSection';


const Home = () => {
    return (
        < div className='mx-[14%] max-md:pt-[24%] max-md:mx-[5%] pb-90' data-scroll-section>
            {/* 
            <div className='bg-[var(--color-innerbg)] text-[var(--color-maintext)] max-md:pt-[7vh] pt-45 border-t-0 border-b-0 pb-25 max-md:pb-15 max-md:w-[95%] max-xl:w-[80%] w-[55%] pr-[9%] pl-[9%] m-auto border-[1.5px] border-r-[var(--color-lightgray)] border-l-[var(--color-lightgray)] overflow-hidden'>
            </div> */}

            <div className='relative max-md:bottom-10 md:min-h-screen -mt-[12%] pt-[20%]'>
                <HeroSection Name={HomeData[0].Name} Role={HomeData[0].Role} Description={HomeData[0].Description} />
            </div>

            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    delay: 2.8
                }}
                className='absolute left-0 right-0 '>
                {/* <InfiniteScroll /> */}
                <InfiniteFlow />
            </motion.div>

            <div className='relative top-84 max-md:top-65'>

         

            <About Para1={HomeData[1].AboutPara1} Para2={HomeData[1].AboutPara2} />

            <div className='mt-8'>

              <TechStackSection />
            </div>
               


                <ProjectsSection projects={HomeData[2]} />

                <WorkExperience experience={HomeData[3]} />

                <div className='border-solid border-[var(--color-sidetext)] border-b-[0.5px] w-[90%] mx-auto mt-[5vh]'></div>

                {/* section : how can I help - skipped  */}

                {/* section : testimonials - skipped  */}

                <GetInTouch conclusion={HomeData[4]} />

                <div className='max-md:pt-[10vh] pt-30 pb-10 max-md:pb-[4vh]'>
                    <Footer />
                </div>



            </div>


            {/* </div> */}



            <style jsx>{`
 .rubik{
 
/* font-family: "Rubik", sans-serif; */
font-family: "Rubik", sans-serif;
font-weight: 450;
 }
 `}</style>


        </div>
    )
}

export default Home
