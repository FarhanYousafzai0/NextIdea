"use client"
import React, { useState } from 'react'

const Error = () => {
    const [click, setClick] = useState(false);
    
    return (
        <>
            {/* Bug Report Panel */}
            <div className={`w-[270px] h-[350px] transition-all duration-300 transform ${click ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} bg-gray-900 fixed right-3 bottom-5 rounded-lg p-4 flex flex-col z-50 border border-gray-700 shadow-xl`}>
                {/* Title */}
                <div className="text-white text-lg font-semibold mb-4 font-sans">Report a Bug 🐞</div>
                
                {/* Name Input */}
                <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="mt-3 p-2  bg-gray-800 text-white text-sm border border-transparent focus:border-gradient focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 placeholder-gray-400"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #1a1a1a, #1a1a1a)',
                        borderImage: 'linear-gradient(45deg, #6366f1, #ec4899) 1',
                        marginTop:"10px"
                    }}
                />
                
                {/* Email Input */}
                <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="mb-3 p-2 rounded-lg  bg-gray-800 text-white text-sm border border-transparent focus:border-gradient focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 placeholder-gray-400"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #1a1a1a, #1a1a1a)',
                        borderImage: 'linear-gradient(45deg, #6366f1, #ec4899) 1',
                          marginTop:"10px"
                    }}
                />
                
                {/* Description Textarea */}
                <textarea 
                    placeholder="Describe the bug..." 
                    className="mb-4 p-2 rounded-lg bg-gray-800 text-white text-sm h-32 resize-none border border-transparent focus:border-gradient focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 placeholder-gray-400"
                    style={{
                        backgroundImage: 'linear-gradient(to right, #1a1a1a, #1a1a1a)',
                        borderImage: 'linear-gradient(45deg, #6366f1, #ec4899) 1',
                         marginTop:"10px",
                         borderRadius:"20px"
                    }}
                />
                
                {/* Buttons */}
                <div className="flex flex-col gap-2 mt-2">
                    <button 
                        onClick={() => setClick(false)}
                        className="px-3 py-2 bg-gray-700 text-white rounded-lg text-sm hover:bg-gray-600 transition-all duration-200 font-medium cursor-pointer active:scale-95"
                    >
                        Cancel
                    </button>
                    <button className="px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-medium cursor-pointer active:scale-95 shadow-md">
                        Send Bug Report
                    </button>
                </div>
            </div>
            
            {/* Toggle Button */}
            <span 
                onClick={() => setClick(!click)}
                className={`fixed bottom-5 right-3 transition-all duration-300 bg-black rounded-full cursor-pointer text-white text-sm px-3 py-2 hover:from-blue-700 hover:to-purple-700 z-40 shadow-lg flex items-center ${click ? "translate-y-16 opacity-0" : "translate-y-0 opacity-100"}`}
            >
                <span>Report Bug</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
            </span>
        </>
    )
}

export default Error