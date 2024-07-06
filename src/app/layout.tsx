"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-gray-200`}>
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col items-center justify-center min-h-screen"
          >
            <div className="flex flex-col md:flex-row gap-6 p-6 w-full max-w-7xl">
              <div className="bg-zinc-800 p-8 rounded-lg shadow-2xl w-full md:w-1/3 lg:w-1/4 flex flex-col items-center text-center">
                <img
                  src="https://placehold.co/140x140"
                  alt="Profile Picture"
                  className="rounded-full mb-5 shadow-md"
                />
                <h2 className="text-3xl font-bold mb-2 text-white">Richard Hanrick</h2>
                <span className="bg-zinc-700 text-sm px-6 py-2 rounded-full mb-4 text-zinc-300">
                  Web Developer
                </span>
                <div className="mt-10 space-y-6 text-left w-full">
                  <hr className="border-gray-500 my-4" />
                  <div className="mb-6">
                    <span className="block font-extrabold text-white">EMAIL</span>
                    <span className="text-zinc-300">richard@example.com</span>
                  </div>
                  <div className="mb-6">
                    <span className="block font-semibold text-white">PHONE</span>
                    <span className="text-zinc-300">+1 (213) 352-2795</span>
                  </div>
                  <div className="mb-6">
                    <span className="block font-semibold text-white">BIRTHDAY</span>
                    <span className="text-zinc-300">June 23, 1982</span>
                  </div>
                  <div className="mb-6">
                    <span className="block font-semibold text-white">LOCATION</span>
                    <span className="text-zinc-300">Sacramento, California, USA</span>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-800 p-8 rounded-lg shadow-2xl w-full md:w-2/3 lg:w-3/4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-4xl font-bold text-white">Your Profile</h2>
                  <nav className="space-x-4">
                    <a
                      href="/"
                      className="text-zinc-300 hover:text-yellow-500 transition"
                    >
                      About
                    </a>
                    <a
                      href="/Resume"
                      className="text-zinc-300 hover:text-yellow-500 transition"
                    >
                      Resume
                    </a>
                    <a
                      href="#"
                      className="text-zinc-300 hover:text-yellow-500 transition"
                    >
                      Portfolio
                    </a>
                    <a
                      href="/posts"
                      className="text-zinc-300 hover:text-yellow-500 transition"
                    >
                      Posts
                    </a>
                    <a
                      href="/contact"
                      className="text-zinc-300 hover:text-yellow-500 transition"
                    >
                      Contact
                    </a>
                  </nav>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg shadow-inner text-zinc-200">
                  {children}
                </div>
              </div>
            </div>
          </motion.div>
        </AuroraBackground>
      </body>
    </html>
  );
}
