import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
            <form className="bg-white p-6 shadow-lg w-full max-w-lg">
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input type="text" className="w-full border border-gray-300 p-2" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input type="email" className="w-full border border-gray-300 p-2" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Message</label>
                    <textarea className="w-full border border-gray-300 p-2"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2">Send</button>
            </form>
        </section>
    );
}

export default Contact;
