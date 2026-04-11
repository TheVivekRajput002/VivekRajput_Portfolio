import { Link } from 'react-router-dom';

export default function BlogCard({ id, title, description, category, date, img_url }) {
    return (
        <div className="flex items-center justify-center ">
            <article className="bg-[var(--color-projectcardbg)] border-[0.5px] border-[var(--color-darkgray)] rounded-[42px] p-6 max-w-[510px] w-full shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)]">

                <div className="mx-1 mt-1">

                    {/* Header Tags */}
                    <div className="flex justify-between items-center mb-5">
                        <div className="bg-[var(--color-lightgray)] text-[var(--color-maintext)] py-1 px-3 rounded-full shadow-sm">
                            <span className="text-[9px] align-middle font-medium tracking-tight">{category}</span>
                        </div>
                        <div className="flex items-center bg-[var(--color-lightgray)] rounded-full p-[2px] shadow-sm">
                            <div className="px-2 py-0.5 text-center">
                                <span className="align-middle text-[8px] uppercase tracking-widest font-bold text-[var(--color-maintext)]">
                                    {date.split("-")[0]}
                                </span>
                            </div>

                            <div className="bg-[var(--color-maintext)] px-2 py-0.5 text-center rounded-full">
                                <span className="align-middle text-[9px] font-bold text-[var(--color-lightgray)]">
                                    {date.split("-")[1]}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Typography */}
                    <div className="space-y-2 mb-6 mx-1">
                       
                            <h1 className="text-[25px] font-medium text-[var(--color-maintext)] tracking-tight leading-[1.1]">
                                {title}
                            </h1>
                        
                        <p className="text-gray-400 text-[13px] leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative rounded-3xl overflow-hidden aspect-[0.6/0.3] group">
                    <img
                        src={img_url}
                        alt="Lush green mountains under morning mist"
                        className="w-full h-full object-cover"
                    />
                    {/* Location Overlay */}
                    {/* <div className="absolute bottom-10 left-10 flex flex-col gap-0.5">
                        <div className="flex items-center gap-2 text-white/90">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span className="text-[17px] font-medium tracking-tight">Blue Ridge</span>
                        </div>
                        <span className="text-[17px] font-medium tracking-tight text-white/90 ml-7">
                            Virginia, USA
                        </span>
                    </div> */}
                </div>

            </article>
        </div>
    );
}