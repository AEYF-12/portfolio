import React from 'react';

const About = () => {
    return (
        <section className="relative min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 py-16 overflow-hidden">
            {/* Background Orb */}
            <div className="absolute left-4 sm:left-10 bottom-20 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-gradient-to-br from-pink-400 to-blue-500 blur-xl opacity-70 z-0" />

            {/* Dot Grid */}
            <div className="absolute right-4 sm:right-10 bottom-24 grid grid-cols-4 gap-2 opacity-40 z-0">
                {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full" />
                ))}
            </div>

            {/* Content */}
            <div className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-6xl w-full z-10">
                {/* Left Text */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        About <br />
                        <span className="text-purple-400">me</span>
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                        Hi, I'm Rahul Son Boro, a passionate Computer Science Engineering student at Central Institute of Technology Kokrajhar, currently in my 3rd year. With a strong foundation in technology and a drive for innovation, I love exploring the world of coding, problem-solving, and software development.

                        As an aspiring developer, I actively contribute to projects on GitHub and continuously expand my skills in programming, algorithms, and web technologies. My goal is to leverage technology to create impactful solutions while growing as a collaborative and adaptable engineer.

                        When I'm not coding, you’ll find me learning new tech trends, collaborating with peers, or working on personal projects. I’m eager to connect, learn, and take on new challenges—let’s build something great together!
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center md:justify-start">
                        <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold px-6 py-3 rounded-full transition-all">
                            Contact me
                        </button>
                        <span className="text-fuchsia-400 text-3xl sm:text-4xl font-bold">&rarr;</span>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-xl">
                    <img
                        src="./compute.jpg"
                        alt="Developer Working"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
