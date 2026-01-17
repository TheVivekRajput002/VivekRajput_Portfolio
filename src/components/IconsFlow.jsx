import React from 'react';
import ReactIcon from '/assets/ReactIcon.png'
import SupabaseIcon from '/assets/SupabaseIcon.png'
import MysqlIcon from '/assets/MysqlIcon.png'
import PostgresqlIcon from '/assets/PostgresqlIcon.png'
import HtmlIcon from '/assets/HtmlIcon.png'
import CssIcon from '/assets/CssIcon.png'
import JavascriptIcon from '/assets/JavascriptIcon.png'
import GithubIcon from '/assets/GithubIcon.png'
import PythonIcon from '/assets/PythonIcon.png'
import FramermotionIcon from '/assets/FramermotionIcon.png'
import FigmaIcon from '/assets/FigmaIcon.png'
import TailwindcssIcon from '/assets/TailwindcssIcon.png'
import NextjsIcon from '/assets/NextjsIcon.png'


<img src="" />


export default function InfiniteFlow() {
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
    { id: 13, img: GithubIcon },
  ];

  // Duplicate once for seamless loop
  const items = [...icons, ...icons];

  return (
    <div className="flex items-center justify-center">
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
    </div>
  );
}
