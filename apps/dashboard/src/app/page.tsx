import Link from "next/link";
import React from "react";

export default async function Page() {
  return (
    <div className="relative flex flex-col items-center h-screen w-full bg-gradient-to-b from-[#0C0B0A] to-[#180c22] text-white overflow-hidden px-[5%]">
      <header className="w-full flex justify-between items-center p-4 gap-16">
        <div className="text-2xl font-bold">
          <img src="/bayez-logo.png" alt="bayez-logo" />
        </div>
        <nav className="flex space-x-4 flex-1 shrink items-start gap-8">
          <a href="#" className="hover:underline">
            Services
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
        </nav>
        <div className="flex space-x-4 items-center">
          <Link href={"/signin"} legacyBehavior>
            <a className="hover:underline cursor-pointer">LOGIN</a>
          </Link>
          <Link href={"/signup"} legacyBehavior>
            <a className="flex justify-center items-center bg-[linear-gradient(192.58deg,rgba(124,124,124,0.3)47.99%,rgba(167,248,24,0.4)94.9%)] px-4 py-2 rounded-full cursor-pointer">
              SIGN UP
            </a>
          </Link>
        </div>
      </header>
      <main className="flex flex-col items-start text-center mt-24 w-full p-4">
        <h1 className="text-4xl font-bold">Bayez.AI</h1>
        <h1 className="text-4xl">PROTOCOL</h1>
        <p className="mt-4 text-2xl max-w-[50%] text-left">
          World’s First autonomous ESG orchestrator platform using Informatica
          data integration.
        </p>
        <button className="mt-8 bg-[linear-gradient(192.58deg,rgba(124,124,124,0.3)47.99%,rgba(167,248,24,0.4)94.9%)] px-4 py-2 rounded-full min-w-[300px]">
          WELCOME
        </button>
        <p className="mt-16 text-2xl max-w-[400px] text-left">Services :</p>
        <div className="mt-4 flex space-x-4">
          <img src="/informatica1.png" alt="Informatica" className="h-12" />
          <img src="/aws.png" alt="AWS" className="h-12" />
          <img src="/snowflake.png" alt="Snowflake" className="h-12" />
          <img
            src="/informatica2.png"
            alt="Informatica Cloud"
            className="h-12"
          />
        </div>
      </main>
      <div className="absolute bottom-0 right-4 w-[45%] ">
        <img
          className="w-full h-full object-cover mix-blend-lighten"
          src="/ai-image.png"
          alt="ai-illustration"
        />
      </div>
    </div>
  );
}
