import React from 'react';

export default function Widget() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4 flex flex-col md:flex-row md:space-x-4">
      <div className="w-full bg-zinc-800 p-6 rounded-lg flex-grow">
      <h1 className="text-3xl font-extrabold mb-4">Contact Form</h1>
      <hr className="w-20 border-t-4 border-yellow-500 my-5"></hr>
        <div className="h-48 bg-zinc-700 rounded-lg mb-6"></div>
        <h2 className="text-2xl font-bold mb-4">Contacts</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full name"
              className="w-full p-3 bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full p-3 bg-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-500 text-zinc-900 px-4 py-2 rounded-lg hover:bg-yellow-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
