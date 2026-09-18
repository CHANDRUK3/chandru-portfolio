const Footer = () => {
  return (
    <footer className="relative bg-[#050505] text-white py-8 md:py-10 px-6 md:px-12 overflow-hidden border-t border-white/10">
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col justify-between gap-8">

        {/* Two Top-Level Containers: Left (Personal Info + Navigation/Icons) & Right (CTA) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          
          {/* Container 1 (Left): Personal Info + Navigation & Icons */}
          <div className="flex flex-col items-start w-full md:w-auto">
            
            {/* CHANDRU K Block */}
            <h2 className="text-xl md:text-2xl font-black tracking-widest uppercase text-white mb-1">
              CHANDRU K
            </h2>
            <p className="text-gray-400 text-xs md:text-sm font-light max-w-xs leading-relaxed">
              Aspiring Software Engineer<br />
              building innovative solutions
            </p>

            {/* ~2 Lines Vertical Space + Navigation & Icons */}
            <div className="mt-6 flex flex-col gap-3">
              <div className="grid grid-cols-4 gap-6 md:gap-10 text-left">
                
                {/* Home + Resume */}
                <div className="flex flex-col items-start gap-2.5">
                  <a href="#home" className="text-xs md:text-sm text-gray-300 font-medium uppercase tracking-wider hover:text-white transition-colors">
                    Home
                  </a>
                  <a 
                    href="/Chanru_Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="Resume"
                    className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:text-white hover:border-white/30 transition-all cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                    </svg>
                  </a>
                </div>

                {/* About + Email */}
                <div className="flex flex-col items-start gap-2.5">
                  <a href="#about" className="text-xs md:text-sm text-gray-300 font-medium uppercase tracking-wider hover:text-white transition-colors">
                    About
                  </a>
                  <a 
                    href="mailto:chandru.k.26062005@gmail.com" 
                    title="Email"
                    className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:text-white hover:border-white/30 transition-all cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>

                {/* Services + LinkedIn */}
                <div className="flex flex-col items-start gap-2.5">
                  <a href="#service" className="text-xs md:text-sm text-gray-300 font-medium uppercase tracking-wider hover:text-white transition-colors">
                    Services
                  </a>
                  <a 
                    href="https://linkedin.com/in/chandru-k-67b2a8329/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="LinkedIn"
                    className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:text-white hover:border-white/30 transition-all cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>
                </div>

                {/* Projects + GitHub */}
                <div className="flex flex-col items-start gap-2.5">
                  <a href="#project" className="text-xs md:text-sm text-gray-300 font-medium uppercase tracking-wider hover:text-white transition-colors">
                    Projects
                  </a>
                  <a 
                    href="https://github.com/CHANDRUK3" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="GitHub"
                    className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:text-white hover:border-white/30 transition-all cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* Container 2 (Right): CTA Block */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right w-full md:w-auto">
            <h3 className="text-base md:text-xl font-medium mb-1">Let's build something</h3>
            <p className="text-gray-400 text-xs md:text-sm mb-4 max-w-xs">
              Open for full stack development opportunities and collaborations.
            </p>
            <a href="#contact" className="bg-white text-black px-5 py-2 rounded-full text-xs md:text-sm font-medium hover:bg-gray-200 transition-colors inline-block">
              Get in touch
            </a>
          </div>

        </div>

        {/* Bottom Horizontal Divider */}
        <div className="w-full border-t border-white/10"></div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Chandru K. All rights reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms and conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
