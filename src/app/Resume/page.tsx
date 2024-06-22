import React from 'react';

function Page() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4 md:flex md:space-x-4">
      <div className="w-full bg-zinc-800 p-7 rounded-lg mx-auto">
      <h1 className="text-3xl font-extrabold mb-4">Resume</h1>
      <hr className="w-20 border-t-4 border-yellow-500 my-5"></hr>
        
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Education</h2>
          <div className="relative pl-6 mb-4">
            <span className="absolute left-0 top-0 h-full border-l-2 border-yellow-500">
 
            </span>
            <div className="relative mb-4">
             
              <h3 className="font-bold">University School Of The Arts</h3>
              <p className="text-sm text-zinc-400">2007 — 2008</p>
              <p>
                Nemo enim ipsam voluptatem, blanditiis praesentium voluptatum delenit atque corrupti,
                quos dolores et quas molestias exceptur.
              </p>
            </div>
            <div className="relative mb-4">

              <h3 className="font-bold">New York Academy Of Art</h3>
              <p className="text-sm text-zinc-400">2006 — 2007</p>
              <p>
                Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis
                voluptas assumenda est omnis.
              </p>
            </div>
            <div className="relative mb-4">

              <h3 className="font-bold">High School Of Art And Design</h3>
              <p className="text-sm text-zinc-400">2002 — 2004</p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut
                fugit, sed consequuntur magni dolores eos.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Experience</h2>
          <div className="relative pl-6 mb-4">
            <span className="absolute left-0 top-0 h-full border-l-2 border-yellow-500"></span>
            <div className="relative mb-4">

              <h3 className="font-bold">Creative Director</h3>
              <p className="text-sm text-zinc-400">2015 — Present</p>
              <p>
                Nemo enim ipsam voluptatem blanditiis praesentium voluptatum delenit atque corrupti,
                quos dolores et quas molestias exceptur.
              </p>
            </div>
            <div className="relative mb-4">

              <h3 className="font-bold">Art Director</h3>
              <p className="text-sm text-zinc-400">2013 — 2015</p>
              <p>
                Nemo enim ipsam voluptatem, blanditiis praesentium voluptatum delenit atque corrupti,
                quos dolores et quas molestias exceptur.
              </p>
            </div>
            <div className="relative mb-4">
  
              <h3 className="font-bold">Web Designer</h3>
              <p className="text-sm text-zinc-400">2010 — 2013</p>
              <p>
                Nemo enim ipsam voluptatem, blanditiis praesentium voluptatum delenit atque corrupti,
                quos dolores et quas molestias exceptur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
