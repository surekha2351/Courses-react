import React from 'react';

const Courses = () => {
    return (
        <section id="courses" className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h2 className="text-4xl font-bold mb-8">Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Example course cards */}
                <div className="bg-white p-6 shadow-lg">
                    <h3 className="text-2xl font-bold">Full-Stack JavaScript</h3>
                    <p>Learn the latest JavaScript frameworks and tools to become a full-stack developer.</p>
                </div>
                <div className="bg-white p-6 shadow-lg">
                    <h3 className="text-2xl font-bold">React & Node.js</h3>
                    <p>Master React.js for front-end and Node.js for back-end development.</p>
                </div>
                <div className="bg-white p-6 shadow-lg">
                    <h3 className="text-2xl font-bold">HTML & CSS</h3>
                    <p>Understand the basics of web development with HTML and CSS.</p>
                </div>
            </div>
        </section>
    );
}

export default Courses;
