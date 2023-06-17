import React from 'react';

const About = () => {
    return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#009867]'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hey there, I'm Govind. It's a pleasure to meet you. Feel free to take a look around!</p>
                </div>
                <div>
                    <p className='text-xl'>
                        I am currently enrolled in the BCA Data Science program at Amrita Vishwa Vidyapeetham, and I have discovered a strong passion for web development as a hobby. 
                        Despite being a beginner, I'm determined to excel in both fields, embracing challenges and eagerly anticipating future opportunities.
                    </p>
                </div>
            </div>
        </div>
    </div>);
};

export default About;