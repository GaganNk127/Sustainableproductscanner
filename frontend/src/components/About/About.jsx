import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="./images/ecosneeko.jpeg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            About Us
                        </h2>
                        <p className="mt-6 text-gray-800 text-left">
                        "We are a team of passionate individuals dedicated to promoting sustainable living. We recognize the growing importance of environmental consciousness and the need for accessible tools to help consumers make informed choices. Our sustainability scorer utilizes advanced AI algorithms to analyze product data, considering factors like sourcing, production methods, and packaging. We strive to provide accurate and transparent information to empower you on your journey towards a more sustainable lifestyle."
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}