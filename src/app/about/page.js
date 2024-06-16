import React from "react";
import Link from "next/link";

const About = () => (
  <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-backgroundDark">
    <header className="bg-darkGreen text-textLight p-4 w-full">
      <nav className="flex justify-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main className="flex flex-col items-center justify-center flex-grow">
      <h1 className="mb-6 text-4xl font-bold text-deepOrange">
        About Most Played Games of 2024
      </h1>
      <p className="mb-6 text-lg text-textLight">
        This is the about page of Most Played Games of 2024.
      </p>
    </main>
    <footer className="bg-darkGreen text-textLight text-center p-4 w-full">
      &copy; 2024 Ace Chianni
    </footer>
  </div>
);

export default About;
