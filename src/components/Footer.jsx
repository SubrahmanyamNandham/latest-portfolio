import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import { quotes } from "../utils/constants";

const Footer = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const pick = () => setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    pick();
    const interval = setInterval(pick, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#0a0a0f] text-white py-10 border-t border-white/10"
      style={{ fontFamily: "'Sora', sans-serif" }}>
      <div className="max-w-6xl mx-auto px-8 flex flex-col sm:flex-row justify-between items-center gap-8 text-center">

        <div className="flex-1 text-xs text-gray-600 italic max-w-xs">
          {quote && `"${quote}"`}
        </div>

        <div className="flex-1 flex flex-col items-center gap-4">
          <p className="text-2xl font-bold text-white tracking-tight">
            Subrahm<span className="text-[#3b82f6]">anyam</span>
          </p>
          <nav className="flex flex-wrap justify-center gap-5 text-gray-500 text-sm">
            {["home","about","projects","contact"].map(s => (
              <a key={s} href={`#${s}`} className="hover:text-[#3b82f6] capitalize transition">{s}</a>
            ))}
          </nav>
          <div className="flex gap-5 text-xl text-gray-500">
            <a href="https://github.com/SubrahmanyamNandham" target="_blank" rel="noopener noreferrer" className="hover:text-[#3b82f6] transition"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/balasubrahmanyam-nandham-859968155/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3b82f6] transition"><FaLinkedin /></a>
            <a href="mailto:subrahmanyam.nandham@gmail.com" className="hover:text-[#3b82f6] transition"><FaEnvelope /></a>
          </div>
        </div>

        <div className="flex-1" />
      </div>

      <p className="text-gray-600 text-xs text-center mt-8 px-4">
        &copy; {new Date().getFullYear()} Balasubrahmanyam Nandham. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
