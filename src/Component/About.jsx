import React from 'react';

const About = () => {
    return (
        <div className='mx-auto w-11/12 text-[#ffffff]'>
            <div className="text-5xl font-bold mb-4 text-center">About Me</div>
            <div className="mt-5 flex items-center justify-between sm:flex-row flex-col">
                <div className='sm:w-[45%]'>
                    <img src="" alt="img" className='w-[300px] h-[250px] border border-blue-500' />
                </div>
                <div className='sm:w-[45%]'>
                    <div className="text-base">
                    Hi, I'm Abu Obaed, a frontend developer with a passion for creating visually stunning and user-friendly web experiences. I specialize in crafting responsive and dynamic designs using technologies like HTML, CSS, React.js, and Tailwind CSS. Beyond coding, I love exploring new places and diving into captivating books. These hobbies not only fuel my creativity but also inspire my approach to design and problem-solving. Let’s create something amazing together!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;