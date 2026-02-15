import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ReactIcon from '/assets/icons/ReactIcon.png'
import SupabaseIcon from '/assets/icons/SupabaseIcon.png'
import MysqlIcon from '/assets/icons/MysqlIcon.png'
import PostgresqlIcon from '/assets/icons/PostgresqlIcon.png'
import HtmlIcon from '/assets/icons/HtmlIcon.png'
import CssIcon from '/assets/icons/CssIcon.png'
import JavascriptIcon from '/assets/icons/JavascriptIcon.png'
import GithubIcon from '/assets/icons/GithubIcon.png'
import PythonIcon from '/assets/icons/PythonIcon.png'
import FramermotionIcon from '/assets/icons/FramermotionIcon.png'
import FigmaIcon from '/assets/icons/FigmaIcon.png'
import TailwindcssIcon from '/assets/icons/TailwindcssIcon.png'
import NextjsIcon from '/assets/icons/NextjsIcon.png'
import ExpressjsIcon from '/assets/icons/expressjs_.png'
import NodejsIcon from '/assets/icons/nodejs_.png'
import MongoDBIcon from '/assets/icons/mongodb_.png'
import TypescriptIcon from '/assets/icons/TypescriptIcon.png'


<img src="" />


export default function IconsFlow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const icons = [
    { id: 1, img: HtmlIcon },
    { id: 2, img: CssIcon },
    { id: 3, img: ReactIcon },
    { id: 4, img: NextjsIcon },
    { id: 5, img: SupabaseIcon },
    { id: 6, img: PostgresqlIcon },
    { id: 7, img: MysqlIcon },
    { id: 8, img: JavascriptIcon },
    { id: 9, img: PythonIcon },
    { id: 10, img: FramermotionIcon },
    { id: 11, img: FigmaIcon },
    { id: 12, img: TailwindcssIcon },
    { id: 13, img: NodejsIcon },
    { id: 14, img: ExpressjsIcon },
    { id: 15, img: MongoDBIcon },
    { id: 16, img: TypescriptIcon },
  ];

  // Duplicate once for seamless loop
  const items = [...icons, ...icons];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7 }}
      className="flex items-center justify-center"
    >
      <div className="w-full max-w-6xl relative overflow-hidden">
        {/* Left shadow overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-innerbg)] to-transparent z-10 pointer-events-none"></div>

        {/* Right shadow overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-innerbg)] to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling container */}
        <div className="hover-pause-container">
          <div className="scroll-track gap-12 flex">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-auto flex items-center justify-center shadow-xl transition-transform"
              >
                <img
                  src={item.img}
                  alt=""
                  className="h-10 max-md:h-8 w-auto select-none"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        .scroll-track {
          animation: scroll 15s linear infinite;
          will-change: transform;
          width: max-content;
        }

        .hover-pause-container:hover .scroll-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .scroll-track {
            animation: none;
          }
        }
      `}</style>
    </motion.div>
  );
}
