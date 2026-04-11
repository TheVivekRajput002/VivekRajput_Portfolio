

import Home from './pages/Home'
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import { Routes, Route } from 'react-router-dom'
import LocomotiveScroll from 'locomotive-scroll';


function App() {

  return (
    <>

      < div
        className='bg-[var(--color-bg)] '
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-infiniteimgbg) 1px, transparent 0.5px), linear-gradient(to bottom, var(--color-infiniteimgbg) 1px, transparent 0.5px)",
          backgroundSize: "40px 40px",
        }}
      >

        <div className="bg-[var(--color-innerbg)] pt-[9%] min-h-screen border-t-0 border-b-0 max-md:w-[95%] max-xl:w-[80%] w-[55%] pr-[3%] pl-[3%] max-md:pt-[1%] m-auto border-[1.5px] border-r-[var(--color-lightgray)] border-l-[var(--color-lightgray)] overflow-x-hidden flex flex-col" >

          <Navbar />

          <main className='flex-1'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/blogs' element={<Blog />} />
              <Route path='/pagenotfound' element={<NotFound />} />
            </Routes>
          </main>

          <Footer />

        </div>
      </div>


    </>

  )
}

export default App
