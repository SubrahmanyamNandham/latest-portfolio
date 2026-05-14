import profileImg from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0a0a0f] text-white flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
      style={{ fontFamily: "'Sora', sans-serif" }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(rgba(99,179,237,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,0.5) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Glow blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }} />

      {/* Navbar */}
      <header className="absolute top-0 w-full flex items-center justify-between px-8 sm:px-12 py-5 z-10">
        <div className="text-[#3b82f6] font-bold text-xl tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
          SN<span className="text-white">.</span>
        </div>

        <nav className="hidden sm:flex gap-8 text-sm text-gray-400">
          {["home","about","projects","contact"].map(s => (
            <a key={s} href={`#${s}`}
              className="hover:text-[#3b82f6] transition capitalize tracking-wide">{s}</a>
          ))}
        </nav>

        <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-gray-300 bg-white/5 border border-white/10 hover:border-[#3b82f6]/50 transition">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Open to Opportunities
        </button>
      </header>

      {/* Profile */}
      <div className="relative z-10 mb-8">
        <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-[#3b82f6]/40 shadow-2xl shadow-blue-500/20 mx-auto">
          <img src={profileImg} alt="Balasubrahmanyam Nandham" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bottom-0 right-2 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#0a0a0f]" />
      </div>

      {/* Text */}
      <div className="relative z-10 max-w-3xl">
        <p className="text-[#3b82f6] text-sm tracking-[0.3em] uppercase mb-3 font-medium">Full Stack Engineer</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-4">
          Balasubrahmanyam<br />
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #93c5fd 100%)' }}>
            Nandham
          </span>
        </h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Full Stack Engineer with 2.5+ years building scalable, high-performance applications.
          Specialising in React.js, Node.js, PostgreSQL, NoSQL — and shipping systems that serve <span className="text-white font-medium">50K+ users</span>.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.linkedin.com/in/balasubrahmanyam-nandham-859968155/" target="_blank" rel="noopener noreferrer"
            className="px-7 py-3 rounded-full bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold text-sm transition shadow-lg shadow-blue-500/30">
            Let's Connect
          </a>
          <a href="https://drive.google.com/file/d/1pOhEEkpOsJp7IZbo5nWFy4n0fVHyiM9P/view?usp=sharing"
            className="px-7 py-3 rounded-full border border-white/15 text-gray-300 hover:border-[#3b82f6] hover:text-white text-sm font-semibold transition">
           My Resume
          </a>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap gap-6 sm:gap-12 justify-center text-center">
          {[["2.5+", "Years Experience"], ["50K+", "Users Served"], ["40%", "Perf Gains"], ["3+", "Enterprise Integrations"]].map(([num, label]) => (
            <div key={label}>
              <div className="text-2xl sm:text-3xl font-bold text-white">{num}</div>
              <div className="text-xs text-gray-500 mt-1 tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
