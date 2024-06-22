import React from 'react';

function Page() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4 md:flex md:space-x-4">
      <div className="w-full bg-zinc-800 p-7 rounded-lg mx-auto">
      <h1 className="text-3xl font-extrabold mb-4">Posts</h1>
      <hr className="w-20 border-t-4 border-yellow-500 my-5"></hr>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="bg-zinc-700 p-6 rounded-lg">
            <img src="https://placehold.co/600x400" alt="Design Conferences In 2022" className="rounded-lg mb-4"/>
            <p className="text-zinc-400">Design • Feb 23, 2022</p>
            <h2 className="text-xl font-bold text-yellow-400 mb-2">Design Conferences In 2022</h2>
            <p className="text-zinc-400">Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
          </article>
          <article className="bg-zinc-700 p-6 rounded-lg">
            <img src="https://placehold.co/600x400" alt="Best Fonts Every Designer" className="rounded-lg mb-4"/>
            <p className="text-zinc-400">Design • Feb 23, 2022</p>
            <h2 className="text-xl font-bold text-yellow-400 mb-2">Best Fonts Every Designer</h2>
            <p className="text-zinc-400">Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.</p>
          </article>
          <article className="bg-zinc-700 p-6 rounded-lg">
            <img src="https://placehold.co/600x400" alt="Design Digest #80" className="rounded-lg mb-4"/>
            <p className="text-zinc-400">Design • Feb 23, 2022</p>
            <h2 className="text-xl font-bold text-yellow-400 mb-2">Design Digest #80</h2>
            <p className="text-zinc-400">Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.</p>
          </article>
          <article className="bg-zinc-700 p-6 rounded-lg">
            <img src="https://placehold.co/600x400" alt="UI Interactions Of The Week" className="rounded-lg mb-4"/>
            <p className="text-zinc-400">Design • Feb 23, 2022</p>
            <h2 className="text-xl font-bold text-yellow-400 mb-2">UI Interactions Of The Week</h2>
            <p className="text-zinc-400">Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.</p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Page;
