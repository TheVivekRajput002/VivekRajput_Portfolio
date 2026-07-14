import React, { useState, useEffect } from 'react';
import { Home, Search, ArrowLeft } from 'lucide-react';
import {Link} from 'react-router-dom'

export default function NotFound() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.className = savedTheme;
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.className = newTheme;
    };

    return (
        <>
            <style>{`
        :root {
          --bg-primary: #ffffff;
          --bg-secondary: #f3f4f6;
          --text-primary: #111827;
          --text-secondary: #6b7280;
          --accent-primary: #8b5cf6;
          --accent-secondary: #a78bfa;
          --border-color: #e5e7eb;
        }

        .dark {
          --bg-primary: #0f172a;
          --bg-secondary: #1e293b;
          --text-primary: #f1f5f9;
          --text-secondary: #94a3b8;
          --accent-primary: #a78bfa;
          --accent-secondary: #8b5cf6;
          --border-color: #334155;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .glitch {
          animation: glitch 1s infinite;
        }
      `}</style>

            <div
                className="pt-[10vh] pb-[24vh] max-md:pb-[24vh] max-md:pt-[13vh] flex items-center justify-center transition-colors duration-300"
                // style={{ backgroundColor: 'var(--bg-primary)' }}
            >
                {/* Theme Toggle */}
                {/* <button
                    onClick={toggleTheme}
                    className="absolute top-6 right-6 p-3 rounded-full transition-all duration-300 hover:scale-110"
                    style={{
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-primary)'
                    }}
                >
                    {theme === 'light' ? '🌙' : '☀️'}
                </button> */}

                <div className="text-center px-6 max-w-3xl">
                    {/* 404 Number */}
                    <div
                        className="text-5xl font-bold mb-6 glitch"
                        style={{ color: 'var(--accent-primary)' }}
                    >
                        404
                    </div>

                    {/* Main Heading */}
                    <h1
                        className="text-2xl font-bold mb-4 fade-in-up"
                        style={{
                            color: 'var(--text-primary)',
                            animationDelay: '0.2s',
                            opacity: 0
                        }}
                    >
                        Page Not Found
                    </h1>

                    {/* Description */}
                    <p
                        className="text-md mb-8 fade-in-up"
                        style={{
                            color: 'var(--text-secondary)',
                            animationDelay: '0.4s',
                            opacity: 0
                        }}
                    >
                        Oops! The page you're looking for seems to have wandered off into the digital void.
                    </p>

                    {/* Illustration */}
                    <div className="mb-12 fade-in-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
                        <div className="inline-block float-animation">
                            <Search
                                size={100}
                                strokeWidth={1.5}
                                style={{ color: 'var(--accent-secondary)' }}
                            />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div
                        className="flex gap-4 justify-center flex-wrap fade-in-up"
                        style={{ animationDelay: '0.8s', opacity: 0 }}
                    >
                        <button
                            className=" px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            style={{
                                backgroundColor: 'var(--accent-primary)',
                                color: '#ffffff'
                            }}
                            
                        >
                            
                            <Link to="/" className='flex items-center gap-2'>
                                <ArrowLeft size={20} />
                                Go Back
                            </Link>
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}