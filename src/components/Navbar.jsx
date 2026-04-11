
import { motion } from 'motion/react';
import { House, Instagram, FileText, Sun, Moon, Folders, Linkedin, NotepadText } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar({ isDark, onToggleTheme }) {

  const strokeWidth = 1.2

  return (
    <>

      {/* laptop view  */}

      <motion.nav
        initial={{
          scale: 0,
          y: -50
        }}
        animate={{
          scale: 1,
          y: 0
        }}
        transition={{
          delay: 1.4,
          duration: 0.8
        }}
        className="max-md:hidden fixed top-7 z-100 left-1/2 -translate-x-1/2 flex items-center gap-4 px-3 py-1.5 rounded-3xl transparent-2 bg-[var(--color-navbg)] border border-[var(--color-darkgray)] h-17">

        {/* Home */}
        <Link to="/" className="-mr-2 relative group h-auto flex items-center gap-2 px-3 py-1 rounded-2xl hover:bg-[var(--color-darkgray)] hover:px-4 hover:py-3 transition-all ease-in-out duration-150">
          <House strokeWidth={strokeWidth} size={20} color='var(--color-maintext)' />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-[var(--color-maintext)] bg-[var(--color-darkgray)] px-2 py-1 rounded whitespace-nowrap">Home</span>
        </Link>

        <div className="border-l-1 border-solid border-[var(--color-darkgray)] h-6 mx-1" > </div>


            {/* Linkedin */}
        {/* <a href="https://www.linkedin.com/in/vivek-rajput-tvr002/" target="_blank" className="relative group flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-[var(--color-darkgray)] hover:px-4 hover:py-3 transition-all ease-in-out duration-150">
          <Linkedin stroke='var(--color-maintext)' strokeWidth={strokeWidth} size={20} />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-[var(--color-maintext)] bg-[var(--color-darkgray)] px-2 py-1 rounded whitespace-nowrap">LinkedIn</span>
        </a> */}


        {/* projects */}
        <Link to="/projects" className="relative group flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-[var(--color-darkgray)] hover:px-4 hover:py-3 transition-all ease-in-out duration-150">
          <Folders strokeWidth={strokeWidth} size={20} color='var(--color-maintext)' />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-[var(--color-maintext)] bg-[var(--color-darkgray)] px-2 py-1 rounded whitespace-nowrap">Projects</span>
        </Link>

        {/* CV  */}
        {/* <a href="https://drive.google.com/file/d/1aZA4kjRiai7IGK_iU6WaPuDjvWe_Wtq4/view?usp=sharing" target="_blank" className="flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-[var(--color-darkgray)] hover:px-4 hover:py-3 transition-all ease-in-out duration-150">
          <FileText strokeWidth={1.5} color='var(--color-maintext)' />
        </a> */}
        <Link to="https://drive.google.com/drive/folders/1uHIPEDG3dbhgkYVedqrApzGmxoRXrAqu?usp=sharing" target="_blank" className="relative group flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-[var(--color-darkgray)] hover:px-4 hover:py-3 transition-all ease-in-out duration-150">
          <FileText strokeWidth={strokeWidth} size={20} color='var(--color-maintext)' />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-[var(--color-maintext)] bg-[var(--color-darkgray)] px-2 py-1 rounded whitespace-nowrap">Resume</span>
        </Link>
        
        {/* Blogs */}
        <Link to="/blogs" className=" relative group h-auto flex items-center gap-2 px-3 py-1 rounded-2xl hover:bg-[var(--color-darkgray)] hover:px-4 hover:py-3 transition-all ease-in-out duration-150">
          <NotepadText strokeWidth={strokeWidth} color='var(--color-maintext)' size={20} />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-[var(--color-maintext)] bg-[var(--color-darkgray)] px-2 py-1 rounded whitespace-nowrap">Blogs</span>
        </Link>

        <div className="border-l-1 border-solid border-[var(--color-darkgray)] h-6 " > </div>

        {/* Dark Light Mode */}
        <button
          onClick={onToggleTheme}
          className={`relative rounded-full flex items-center align-middle justify-center transition-all duration-300 px-3 transform `}
          aria-label="Toggle theme"
        >
          <div className="relative w-6 h-7">
            <Sun
              className={`absolute inset-0 w-6 h-7 text-yellow-500 transition-all duration-300 ${isDark
                ? 'opacity-0 rotate-90 scale-0'
                : 'opacity-100 rotate-0 scale-100'
                }`}
              strokeWidth={strokeWidth}

            />
            <Moon
              className={`absolute inset-0 w-6 h-7 text-blue-400 transition-all duration-300 ${isDark
                ? 'opacity-100 rotate-0 scale-100'
                : 'opacity-0 -rotate-90 scale-0'
                }`}
              strokeWidth={strokeWidth}

            />
          </div>
        </button>
      </motion.nav>

      {/* phone view: navbar from top   */}



      {/* <motion.nav
        initial={{
          scale: 0,
          y: -50
        }}
        animate={{
          scale: 1,
          y: 0
        }}
        transition={{
          delay: 1.3,
          duration: 0.7
        }}
        className="md:hidden fixed top-[3vh] left-1/2 -translate-x-1/2 flex items-center gap-4 px-4 py-4 rounded-3xl transparent-2 bg-[var(--color-navbg)] border border-[var(--color-darkgray)] ">

        <a href="https://read.cv/" target="_blank" className="flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-[var(--color-darkgray)] hover:px-5 hover:py-4 transition">
          <FileText strokeWidth={1.5} color='var(--color-maintext)' />
        </a>

        <div className="border-l-1 border-solid border-[var(--color-maintext)] h-6 " > </div>

        <a href="https://x.com/tvr002" target="_blank" className="flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-[var(--color-darkgray)] hover:px-5 hover:py-4 transition">
          <svg fill='var(--color-maintext)' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="20" viewBox="0 0 30 30">
            <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
          </svg>
        </a>

        <a href="https://www.instagram.com/tvr002/" target="_blank" className="flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-[var(--color-darkgray)] hover:px-5 hover:py-4 transition">
          <Instagram strokeWidth={1.5} color='var(--color-maintext)' />
        </a>


        <div className="border-l-1 border-solid border-[var(--color-maintext)] h-6 " > </div>

        <button
          onClick={onToggleTheme}
          className={`relative rounded-full flex items-center justify-center transition-all duration-300 px-3 transform `}
          aria-label="Toggle theme"
        >
          <div className="relative w-8 h-8">
            <Sun
              className={`absolute inset-0 w-7 h-8 text-yellow-500 transition-all duration-300 ${isDark
                ? 'opacity-0 rotate-90 scale-0'
                : 'opacity-100 rotate-0 scale-100'
                }`}
              strokeWidth={1.5}
            />
            <Moon
              className={`absolute inset-0 w-7 h-8 text-blue-400 transition-all duration-300 ${isDark
                ? 'opacity-100 rotate-0 scale-100'
                : 'opacity-0 -rotate-90 scale-0'
                }`}
              strokeWidth={1.5}
            />
          </div>
        </button>

      </motion.nav> */}

      {/* phone view  */}

      <motion.nav
        initial={{
          scale: 0,
          y: -50
        }}
        animate={{
          scale: 1,
          y: 0
        }}
        transition={{
          delay: 1.3,
          duration: 0.7
        }}
        className="z-60 md:hidden fixed bottom-[3vh] left-1/2 -translate-x-1/2 flex items-center justify-around gap-[3vw] px-4 py-4 rounded-3xl transparent-2 bg-[var(--color-navbg)] border border-[var(--color-darkgray)] backdrop-blur-8xl">

        <Link to="/" className="relative group h-auto flex items-center gap-2 px-2 py-1 rounded-2xl">
          <House strokeWidth={1.5} color='var(--color-maintext)' />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-[var(--color-maintext)] bg-[var(--color-darkgray)] px-2 py-1 rounded whitespace-nowrap">Home</span>
        </Link>


        <div className="border-l-1 border-solid border-[var(--color-maintext)] h-6 " > </div>

        {/* cv  */}
        {/* <a href="https://drive.google.com/file/d/1aZA4kjRiai7IGK_iU6WaPuDjvWe_Wtq4/view?usp=sharing" target="_blank" className="flex items-center gap-2 px-2 py-1 rounded-xl ">
          <FileText strokeWidth={1.5} color='var(--color-maintext)' />
        </a> */}
        <Link to="/pagenotfound" className="relative group flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-[var(--color-darkgray)] hover:px-4 hover:py-3 transition-all ease-in-out duration-150">
          <FileText strokeWidth={strokeWidth} color='var(--color-maintext)' />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-[var(--color-maintext)] bg-[var(--color-darkgray)] px-2 py-1 rounded whitespace-nowrap">Resume</span>
        </Link>

        {/* Blogs */}
        <Link to="/blogs" className=" relative group h-auto flex items-center gap-2 px-3 py-1 rounded-2xl hover:bg-[var(--color-darkgray)] hover:px-4 hover:py-3 transition-all ease-in-out duration-150">
          <NotepadText strokeWidth={strokeWidth} color='var(--color-maintext)' />
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-[var(--color-maintext)] bg-[var(--color-darkgray)] px-2 py-1 rounded whitespace-nowrap">Blogs</span>
        </Link>

        {/* projects  */}

        <Link to="/projects" className="relative group flex items-center gap-2 px-2 py-1 rounded-xl">
          <Folders strokeWidth={strokeWidth} color='var(--color-maintext)' />
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-[var(--color-maintext)] bg-[var(--color-darkgray)] px-2 py-1 rounded whitespace-nowrap">Projects</span>
        </Link>


        <div className="border-l-1 border-solid border-[var(--color-maintext)] h-6 " > </div>

        <button
          onClick={onToggleTheme}
          className={`relative rounded-full flex items-center justify-center transition-all duration-300 px-3 transform `}
          aria-label="Toggle theme"
        >
          <div className="relative w-5 h-8">
            <Sun
              className={`absolute inset-0 w-7 h-8 text-yellow-500 transition-all duration-300 ${isDark
                ? 'opacity-0 rotate-90 scale-0'
                : 'opacity-100 rotate-0 scale-100'
                }`}
              strokeWidth={strokeWidth}
            />
            <Moon
              className={`absolute inset-0 w-7 h-8 text-blue-400 transition-all duration-300 ${isDark
                ? 'opacity-100 rotate-0 scale-100'
                : 'opacity-0 -rotate-90 scale-0'
                }`}
              strokeWidth={strokeWidth}
            />
          </div>
        </button>

      </motion.nav>

    </>
  );
}
