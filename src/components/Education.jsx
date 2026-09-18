import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const achievementsData = [
  {
    title: 'Winner – Civil Tech Innovators 2024',
    description: '1st Prize in Paper Presentation, presented “InfraGuard”, a project focused on predictive monitoring and efficient management of bridge infrastructure.',
    badge: '1st Prize'
  },
  {
    title: 'NIRAL 3.0',
    description: 'Shortlisted among the Top 50 teams and presented a project focused on upgrading Primary Health Centres (PHCs) through technology-driven improvements.',
    badge: 'Top 50 Teams'
  },
  {
    title: 'Zygreen Internship',
    description: 'Worked as part of the Product Development Team for 6 months and successfully completed the internship.',
    badge: '6 Months'
  }
];

const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray('.anim-edu-item');
      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
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
    <section ref={sectionRef} id="education" className="bg-[#050505] w-full text-white pt-16 pb-24 px-6 md:px-16 lg:px-24 overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Minimal Section Header */}
        <div className="anim-edu-item flex items-center gap-4 mb-16 opacity-0">
          <div className="w-5 h-5 border-2 border-[#ccff00] rounded-sm"></div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
            ACHIEVEMENTS & EXPERIENCE
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-gray-800 pl-6 md:pl-10 ml-2 md:ml-3 flex flex-col gap-12">
          {achievementsData.map((item, idx) => (
            <div
              key={idx}
              className="anim-edu-item relative group opacity-0"
            >
              
              {/* Node Circle on Timeline */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 border-[#ccff00] bg-[#050505] transition-colors duration-300 group-hover:bg-[#ccff00]"></div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide group-hover:text-[#ccff00] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Badge Tag */}
                <div className="shrink-0">
                  <span className="inline-block px-4 py-1.5 rounded-full border border-[#ccff00]/40 font-mono text-xs md:text-sm text-[#ccff00] bg-[#ccff00]/5 hover:bg-[#ccff00]/20 transition-all duration-300">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed max-w-3xl">
                {item.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
