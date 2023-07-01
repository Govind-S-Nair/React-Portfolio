import React from "react";
import HTML from '../assets/HTML.png';
import CSS from '../assets/CSS.png';
import JavaScript from '../assets/JavaScript.png';
import ReactJs from '../assets/React.png';
import NodeJs from '../assets/Node.png';
import Tailwind_CSS from '../assets/Tailwind_CSS.png';
import Git from '../assets/Git.png';
import GitHub from '../assets/GitHub.png';

const Skills = () => {
    return (
        <div name='skills' className="w-full h-screen bg-[#0a192f] text-gray-300">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-[#009867]">Skills</p>
                    <p className="text-xl py-4">Here are a few of the technologies I work with.</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={HTML} alt="HTML" />
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={CSS} alt="CSS" />
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript" />
                        <p className="my-4">JavaScript</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={ReactJs} alt="ReactJs" />
                        <p className="my-4">React.Js</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={NodeJs} alt="NodeJs" />
                        <p className="my-4">Node.Js</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Tailwind_CSS} alt="Tailwind CSS" />
                        <p className="my-4">Tailwind CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={Git} alt="Git" />
                        <p className="my-4">Git</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={GitHub} alt="GitHub" />
                        <p className="my-4">GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
