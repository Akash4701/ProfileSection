import React from 'react';

export default function Widget() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4 flex md:flex-row flex-col md:space-x-4">
      <div className="w-full p-8 rounded-lg mt-4 md:mt-0 bg-zinc-800 shadow-lg">
        <h1 className="text-4xl font-extrabold mb-4">About Me</h1>
        <hr className="w-20 border-t-4 border-yellow-500 my-5" />
        <div className="mb-8 p-6 bg-zinc-700 rounded-lg shadow-lg">
          <p className="text-zinc-100">
            I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
          </p>
          <p className="text-zinc-100 mt-4">
            My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
          </p>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">What I'm Doing</h2>
          <h3 className='text-xl font-semibold mb-4'>Primary Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Web Design</h3>
              <p className="text-zinc-300">The most modern and high-quality design made at a professional level.</p>
            </div>
            <div className="bg-zinc-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-zinc-300">High-quality development of sites at the professional level.</p>
            </div>
            <div className="bg-zinc-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
              <p className="text-zinc-300">Professional development of applications for iOS and Android.</p>
            </div>
            <div className="bg-zinc-700 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Photography</h3>
              <p className="text-zinc-300">I make high-quality photos of any category at a professional level.</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Secondary Skills</h2>
          <div className="space-y-6">
            <div className="bg-zinc-700 p-6 rounded-lg shadow-lg flex items-center">
              <img src="https://placehold.co/50x50" alt="Daniel Lewis" className="rounded-full mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-zinc-100">Daniel Lewis</h3>
                <p className="text-zinc-300">Richard was hired to create a corporate identity. We were very pleased with the work done.</p>
              </div>
            </div>
            <div className="bg-zinc-700 p-6 rounded-lg shadow-lg flex items-center">
              <img src="https://placehold.co/50x50" alt="Jessica Miller" className="rounded-full mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-zinc-100">Jessica Miller</h3>
                <p className="text-zinc-300">Richard was hired to create a corporate identity. We were very pleased with the work done.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
