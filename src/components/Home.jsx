import React from "react";
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
    return(
        <div name='home' className="bg-[#0a192f] w-full h-screen">
            {/*Container*/}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-[#009867] text-3xl">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Govind S Nair</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Front-End Developer.</h2>
                <p className="text-[#ccd6f6] text-xl py-4 max-w-[700px]">
                I'm an aspiring data analyst with a keen eye for detail and a passion for problem-solving. 
                I strive to provide meaningful insights by continuously learning and staying up to date with industry trends. 
                Dedicated to acquiring in-depth knowledge and practical skills in data analysis, I am committed to exploring the fascinating world of data.
                </p>
                <div>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#009867] hover:border-[#009867]">View Work
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3"/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;
