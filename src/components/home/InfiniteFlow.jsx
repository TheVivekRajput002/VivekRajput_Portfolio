

export default function InfiniteFlow() {
  const images = [
    { id: 1, src: '/assets/SS/JlugSummerSS.webp', alt: "Jlug Summer" },
    { id: 2, src: '/assets/SS/VoiceScribeSS.png', alt: "Voice Scribe" },
    { id: 3, src: '/assets/SS/GDPortfolioSS.png', alt: "GD Portfolio" },
    { id: 4, src: '/assets/SS/KrishiMitraSS.webp', alt: "Krishi Mitra" },
    { id: 5, src: '/assets/SS/NoteBlocSS.webp', alt: "Note Bloc" },
    { id: 6, src: '/assets/SS/HireButSmarterSS.png', alt: "HireButSmarter" },
    { id: 7, src: '/assets/SS/OchiDesignSS.png', alt: "Ochi Design" },
    { id: 8, src: '/assets/SS/BrainFoodSS.png', alt: "BrainFood" },
  ];

  return (
    <div className="w-full overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        .scroll-trackk {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
          will-change: transform;
        }

        .scroll-trackk:hover {
          animation-play-state: paused;
        }

             .hover-pause-container:hover .scroll-trackk {
          animation-play-state: paused;
        }

        
      `}</style>

      <div className="scroll-trackk hover-pause-container space-x-8 max-md:p-2">
        {[...images, ...images].map((image, idx) => (
          <div
            key={idx}
            className=" flex-shrink-0 p-3 rounded-2xl bg-[var(--color-infiniteimgbg)] backdrop-blur-xl border border-[var(--color-infiniteimgbg)]"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-64 max-md:h-50 w-auto rounded-xl border border-[var(--color-lightgray)] object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}



// export default function InfiniteFlow() {
//   const images = [
//     { id: 1, src: JlugSummerSS2, alt: "Jlug Summer" },
//     { id: 2, src: KrishiMitraSS, alt: "Krishi Mitra" },
//     { id: 3, src: NoteBlocSS, alt: "Note Bloc" },
//     { id: 4, src: TheZenWebsiteSS, alt: "Note Bloc" },
//     { id: 5, src: JlugSummerSS2, alt: "Note Bloc" },
//     { id: 6, src: NoteBlocSS, alt: "Note Bloc" },
//     { id: 7, src: NoteBlocSS, alt: "Note Bloc" },
//     { id: 8, src: NoteBlocSS, alt: "Note Bloc" },
//     { id: 9, src: NoteBlocSS, alt: "Note Bloc" },
//     { id: 10, src: NoteBlocSS, alt: "Note Bloc" },
//   ];

//   return (
//     <div className="w-full flex items-center overflow-hidden">
//       <style>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-100%);
//           }
//         }
        
//         .animate-scroll {
//           animation: scroll 15s linear infinite;
//           display: flex;
//           gap: 2rem;
//         }

// .animate-scroll:hover {
//   animation-play-state: paused;
// }

//       `}</style>

//       <div className="animate-scroll">
//         {/* First set of images */}
//         {images.map((image) => (
//           <div
//             key={`first-${image.id}`}
//             className="flex-shrink-0"
//           >
//             <div className="max-md:p-2 flex-shrink-0 backdrop-blur-xl bg-[var(--color-infiniteimgbg)] border-1 border-[var(--color-infiniteimgbg)] rounded-2xl p-3 ">
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className='h-70 max-md:h-50 w-auto rounded-xl border-1 border-solid border-[var(--color-lightgray)]'
//               />
//             </div>
//           </div>
//         ))}

//         {/* Duplicate set for seamless loop */}
//         {images.map((image) => (
//           <div
//             key={`second-${image.id}`}
//             className="flex-shrink-0"
//           >
//             <div className="mx-8 flex-shrink-0 backdrop-blur-xl bg-[var(--color-darkgray)] border-1 border-[var(--color-gray)] rounded-2xl p-3 ">
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className='h-70 w-auto rounded-xl border-1 border-solid border-[#e3e3e3bb]'
//               />
//             </div>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// }