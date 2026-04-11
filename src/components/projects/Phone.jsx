import React, { useState } from 'react';
import { RefreshCw, Wifi, Signal } from 'lucide-react';

export default function PhoneMockup({ PhoneWidth, PhoneHeight, WebUrl }) {
    const [url, setUrl] = useState('https://www.othrwrld.studio/');
    const [iframeUrl, setIframeUrl] = useState(`${WebUrl}`);
    const [isLoading, setIsLoading] = useState(false);

    const handleLoadUrl = () => {
        setIsLoading(true);
        setIframeUrl(url);
        setTimeout(() => setIsLoading(false), 800);
    };

    const handleRefresh = () => {
        setIsLoading(true);
        setIframeUrl(iframeUrl + '?t=' + Date.now());
        setTimeout(() => setIsLoading(false), 800);
    };

    const getCurrentTime = () => {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className=" flex items-center justify-center scale-90">
            <div className="flex flex-col items-center gap-5">
                {/* URL Input Control */}
                {/* <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-white/20">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleLoadUrl()}
                            placeholder="Enter URL to display"
                            className="px-4 py-3 bg-white/90 text-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-96"
                        />
                        <button
                            onClick={handleLoadUrl}
                            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
                        >
                            Load URL
                        </button>
                    </div>
                </div> */}

                {/* iPhone Device Container */}
                <div className={`relative transform transition-transform duration-300 ${PhoneWidth} ${PhoneHeight}`}>
                    {/* iPhone Outer Frame with Notch */}
                    <div className="absolute inset-0 bg-[var(--color-phone)] border-solid border-1 border-[var(--color-gray)] rounded-[55px] p-2">
                        {/* iPhone Screen */}
                        <div className="relative w-full h-full bg-white rounded-[48px] overflow-hidden border-solid border-[0.05px] border-[var(--color-gray)]">

                            {/* Status Bar */}
                            <div className="absolute top-0 left-0 right-0 h-7 bg-[#414141] z-20">
                                <div className="flex items-center justify-between px-8 h-full text-white font-semibold">
                                    <span className='text-xs'>{getCurrentTime()}</span>
                                    <div className="flex items-center gap-1">
                                        <Signal size={12} />
                                        <Wifi size={12} />
                                        <div className="w-6 h-3 border border-white/60 rounded-sm relative">
                                            <div className="absolute inset-0.5 bg-white rounded-sm"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-25 h-5 bg-black rounded-b-3xl z-30"></div>


                            {/* Iframe Content Area */}
                            <div className="absolute top-7 left-0 right-0 bottom-22 bg-[var(--color-maintext)] overflow-hidden">
                                {isLoading ? (
                                    <div className="flex items-center justify-center h-full bg-gray-50">
                                        <div className="text-center">
                                            <RefreshCw size={32} className="animate-spin text-purple-500 mx-auto mb-2" />
                                            <p className="text-gray-500 text-sm">Loading...</p>
                                        </div>
                                    </div>
                                ) : (
                                    <iframe
                                        src={iframeUrl}
                                        className="w-full h-full border-0"
                                        title="Website Preview"
                                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            border: 'none',
                                            overflow: 'auto',
                                            WebkitOverflowScrolling: 'touch'
                                        }}
                                    />
                                )}
                            </div>

                            {/* Safari-like Browser Bar */}
                            <div className="absolute bottom-10 left-0 right-0 bg-gradient-to-b from-gray-100 to-white z-10 px-2 py-1 shadow-sm">
                            </div>


                            {/* bottom bar  */}

                            <div className="absolute bottom-0 left-0 right-0 h-22 opacity-80 bg-[var(--color-maintext)] border-gray-200 z-10">
                                <div className="bg-white rounded-lg my-1 px-3 py-2 flex items-center gap-2 shadow-sm w-[90%] mx-auto">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="text-gray-500">
                                        <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z" fill="currentColor" />
                                    </svg>
                                    <span className="text-xs text-gray-600 flex-1 truncate">
                                        {iframeUrl.replace(/^https?:\/\//, '')}
                                    </span>
                                    <button
                                        onClick={handleRefresh}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        <RefreshCw size={14} className={isLoading ? 'animate-spin' : ''} />
                                    </button>
                                </div>
                                <div className="flex items-center justify-around h-9 px-8">
                                    <button className="text-gray-700 hover:text-purple-600">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button className="text-gray-700 hover:text-purple-600">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button className="text-gray-700 hover:text-purple-600">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button className="text-gray-700 hover:text-purple-600">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button className="text-gray-700 hover:text-purple-600">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <rect x="14" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="h-6 bg-[var(--color-maintext)] rounded-t-3xl mx-auto w-40"></div>
                            </div>

                        </div>
                    </div>


                    {/* Side Buttons */}
                    <div className="absolute left-0 top-32 w-1 h-12 bg-gray-700 rounded-r"></div>
                    <div className="absolute left-0 top-48 w-1 h-16 bg-gray-700 rounded-r"></div>
                    <div className="absolute left-0 top-68 w-1 h-16 bg-gray-700 rounded-r"></div>
                    <div className="absolute right-0 top-40 w-1 h-20 bg-gray-700 rounded-l"></div>
                </div>
            </div>
        </div>
    );
}