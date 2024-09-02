import React from 'react';

export default function ContactUs() {
  return (
    <>
      {/* Banner Section */}
      <div className="relative w-full h-96 bg-cover bg-center " style={{ backgroundImage: 'url(https://raikwarrishtey.com/img/about-us.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl text-white font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6 ">
        {/* Header Section */}
        <h1 className="text-4xl font-bold mb-6 text-center">Get in Touch</h1>
        
        {/* Contact Form and Image Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="md:w-3/4">
            <img
              className="w-full h-auto rounded-lg shadow-md"
              src="https://www.wedgatematrimony.com/wp-content/uploads/2022/01/wedding-women-bride.jpg"
              alt="Contact Us"
            />
          </div>
          
          {/* Contact Form Section */}
          <div className="md:w-3/4 bg-white p-8 rounded-lg shadow-lg">
            <form>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300 ease-in-out"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
