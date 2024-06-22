
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="min-h-screen bg-zinc-900 text-white p-4 md:flex md:space-x-4">
      <div className="bg-zinc-800 p-6 w-full md:w-1/3 lg:w-1/4 flex flex-col items-center">
      <div className="items-center justify-center">
    <img src="https://placehold.co/140x140" alt="Profile Picture" className="mr-10 rounded-full items-center justify-center mb-5"/>
    <h2 className="text-2xl font-semibold mb-4">Richard Hanrick</h2>
    <span className="bg-zinc-700 text-sm px-6 py-3 rounded-full mb-4">Web Developer</span>
    </div>
    <div className="mt-10 space-y-6">
    <hr className="w-36 border-t-2 border-gray-500 my-4"></hr>

      <div className="mb-9">
        <span className="block font-extrabold">EMAIL</span>
        <span>richard@example.com</span>
      </div>
      <div>
        <span className="block font-semibold">PHONE</span>
        <span>+1 (213) 352-2795</span>
      </div>
      <div>
        <span className="block font-semibold">BIRTHDAY</span>
        <span>June 23, 1982</span>
      </div>
      <div>
        <span className="block font-semibold">LOCATION</span>
        <span>Sacramento, California, USA</span>
      </div>
    </div>
  </div>
  <div className=" p-4 rounded-lg mt-4 md:mt-0 md:w-3/4">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-4xl font-bold"> Your Profile</h2>
          
      <nav className="space-x-4">
        <a href="/" className="text-zinc-400 hover:text-yellow-500">About</a>
        <a href="/Resume" className="text-zinc-400 hover:text-yellow-500">Resume</a>
        <a href="#" className="text-zinc-400 hover:text-yellow-500">Portfolio</a>
        <a href="/posts" className="text-zinc-400 hover:text-yellow-500">Posts</a>
        <a href="/contact" className="text-zinc-400 hover:text-yellow-500">Contact</a>
      </nav>
    </div>
    {children}

  </div>
        </div>
    
     </body>
    </html>
  );
}
