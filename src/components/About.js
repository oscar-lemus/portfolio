import React from "react"; 
import ReactRotatingText from 'react-rotating-text'; 

export default function About() {
    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Oscar,
                        <br className="hidden lg:inline-block" />
                        <ReactRotatingText items={['Web Developer', 'Full Stack Software Engineer', 'Cybersecurity Professional', 'Cloud Solutions Architect', 'Penetration Tester', 'Lifelong Learner']} />
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I'm a graduate of the Oregon State University's School of Electrical Engineering and Computer Science and the Universiy of New Mexico's Anderson School of Management. I'm a Cybersecurity analyst and a Freelance Software Engineer.
                        I enjoy finding creative ways to automate boring tasks, and I love to see software come to life!
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me 
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        src={process.env.PUBLIC_URL +"/coding.jpg"}
                        alt="hero"
                    />
                </div>
            </div>
        </section>
    )
}