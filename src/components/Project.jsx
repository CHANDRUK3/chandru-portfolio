import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import agroImg from '../assets/Footer/agro .png';
import freshsipImg from '../assets/Footer/freshsip.png';
import agriFusionImg from '../assets/Footer/agri_Fusion.png';
import bloggingImg from '../assets/Footer/bloggig platform.png';
import campusImg from '../assets/Footer/campus.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: 'Agro – Pesticide Consultancy & Yield Prediction',
    titleLine1: 'AGRO – PESTICIDE',
    italicWord: 'consultancy',
    titleLine2: '& YIELD PREDICTION',
    description: "An agriculture platform focused on pesticide recommendations, crop/yield prediction, agricultural analysis, and helping farmers make data-driven decisions.",
    image: agroImg,
    tech: ["Python", "Flask", "Machine Learning", "React.js"],
    liveLink: "https://github.com/CHANDRUK3/Consultancy-pest",
    githubLink: "https://github.com/CHANDRUK3/Consultancy-pest"
  },
  {
    name: 'FreshSip – MERN Juice Delivery Platform',
    titleLine1: 'FRESHSIP',
    italicWord: 'juice',
    titleLine2: 'DELIVERY PLATFORM',
    description: "A full-stack MERN juice ordering and delivery platform featuring real-time menu management, cart system, user authentication, order tracking, and clean responsive UI.",
    image: freshsipImg,
    tech: ["React.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "https://github.com/CHANDRUK3/Freshsip"
  },
  {
    name: 'BookBazar',
    titleLine1: 'BOOK STORE &',
    italicWord: null,
    titleLine2: 'LIBRARY SYSTEM',
    description: "Online system for managing books and user transactions with real-time inventory tracking. Streamlined library operations by 60% with automated book management and user-friendly interface.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop",
    tech: ["React.js", "MongoDB", "Node.js", "Express.js"],
    liveLink: "https://book-store-app-two-pearl.vercel.app",
    githubLink: "https://github.com/CHANDRUK3/BookBazar"
  },
  {
    name: 'Campus Job Board',
    titleLine1: 'SMART',
    italicWord: 'campus',
    titleLine2: 'JOB BOARD & DASHBOARD',
    description: "A comprehensive dashboard for educational institutions with clean UI and responsive design. Streamlines campus job board management and provides intuitive interfaces for both students and faculty members.",
    image: campusImg,
    tech: ["React.js", "MongoDB", "Express.js", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "https://github.com/CHANDRUK3/Event-Mangement"
  },
  {
    name: 'AgriFusion – Real-Time Smart Agriculture Monitoring',
    titleLine1: 'AGRIFUSION –',
    italicWord: 'smart',
    titleLine2: 'AGRICULTURE MONITORING',
    description: "An intelligent agriculture platform using Google Earth Engine and Sentinel-1/Sentinel-2 satellite imagery for real-time crop and field monitoring, crop recommendation, agricultural analysis, and feature-map visualization. Integrates deep-learning models and satellite-based insights to reduce dependence on manual field inspection and physical sensor monitoring.",
    image: agriFusionImg,
    tech: ["Google Earth Engine", "Python", "Sentinel Satellite Data", "Deep Learning", "React.js"],
    liveLink: "#",
    githubLink: "https://github.com/CHANDRUK3"
  },
  {
    name: 'Professional Blogging & Learning Platform',
    titleLine1: 'PROFESSIONAL',
    italicWord: 'learning',
    titleLine2: 'BLOGGING & LEARNING PLATFORM',
    description: "More than a blogging platform: students can create professional posts, learn through structured courses, complete learning paths and earn certificates, connect with mentors, and use an integrated AI assistant that suggests and improves content while creating posts.",
    image: bloggingImg,
    tech: ["React.js", "AI Assistant", "Node.js", "MongoDB", "Express.js"],
    liveLink: "https://github.com/CHANDRUK3/Blogging-Platform",
    githubLink: "https://github.com/CHANDRUK3/Blogging-Platform"
  }
];

const Project = ({ onCtaClick }) => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Target ONLY text elements inside each project card
      cardRefs.current.forEach((card) => {
        if (!card) return;

        const textElements = card.querySelectorAll('.anim-text-element');

        gsap.fromTo(
          textElements,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play reverse play reverse',
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} id="project" className="bg-[#050505] w-full text-white pt-10 md:pt-20 pb-24 px-6 md:px-16 overflow-hidden">

      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full z-10 gap-12 lg:gap-0 mb-20 lg:mb-32">

        {/* Left Giant Title */}
        <div className="w-full lg:w-7/12 overflow-visible">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[0.9] uppercase flex items-center gap-3 whitespace-nowrap">
            Selected
            <span className="font-light italic text-gray-300 lowercase font-serif pr-4 pt-2 md:pt-4">work</span>
          </h2>
        </div>

        {/* Right Description */}
        <div className="w-full lg:w-4/12 flex flex-col items-start lg:mt-4">
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-8">
            As a full-stack & AI developer building modern, scalable applications with clean visual design and responsive interfaces.
          </p>
          <button onClick={onCtaClick} className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black font-medium text-xs md:text-sm hover:bg-[#b3e600] transition-colors flex items-center gap-2">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </button>
        </div>
      </div>

      {/* Projects List - Alternating Layout */}
      <div className="flex flex-col gap-24 lg:gap-40 w-full">
        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={proj.name}
              ref={(el) => (cardRefs.current[idx] = el)}
              className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-12 lg:gap-16 w-full group`}
            >

              {/* Image Side (Clean display) */}
              <div className="w-full lg:w-6/12 overflow-hidden relative aspect-[16/10] bg-[#111] rounded-sm">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Text Side (Targeted Typography Animations) */}
              <div className="w-full lg:w-5/12 flex flex-col items-start">
                
                {/* Number Tag */}
                <span className="anim-text-element opacity-0 text-[#ccff00] text-xs md:text-sm font-bold tracking-widest uppercase mb-4 inline-block font-mono">
                  0{idx + 1}
                </span>

                {/* Project Title */}
                <h3 className="anim-text-element opacity-0 text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[1.15] uppercase mb-6">
                  {proj.titleLine1}{' '}
                  {proj.italicWord && (
                    <span className="font-light italic text-[#ccff00] lowercase font-serif inline-block px-1">
                      {proj.italicWord}
                    </span>
                  )}
                  {proj.titleLine2 && (
                    <>
                      <br />
                      <span className="text-gray-200">{proj.titleLine2}</span>
                    </>
                  )}
                </h3>

                {/* Description */}
                <p className="anim-text-element opacity-0 text-gray-400 text-sm md:text-base font-light leading-relaxed mb-8">
                  {proj.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="anim-text-element opacity-0 flex items-center gap-2 flex-wrap mb-8">
                  {proj.tech.map((t, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-md border border-white/10 bg-white/5 text-gray-300 font-mono text-xs hover:border-[#ccff00]/50 hover:text-[#ccff00] transition-colors">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="anim-text-element opacity-0 flex items-center gap-4 flex-wrap">
                  {proj.liveLink && proj.liveLink !== "#" ? (
                    <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black text-xs md:text-sm font-medium hover:bg-[#b3e600] transition-colors inline-flex items-center gap-2">
                      Live Demo
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  ) : (
                    <button onClick={onCtaClick} className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black text-xs md:text-sm font-medium hover:bg-[#b3e600] transition-colors inline-flex items-center gap-2">
                      Live Demo
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </button>
                  )}
                  <a href={proj.githubLink || "https://github.com/CHANDRUK3"} target="_blank" rel="noopener noreferrer" className="cursor-pointer px-6 py-2.5 rounded-full border border-white/30 text-white text-xs md:text-sm hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2">
                    GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>

              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Project;
