import { useState, useRef } from "react";

export default function Services() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterError, setNewsletterError] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Reference to bind to the scrollable card container element
  const sliderRef = useRef(null);

  const expertiseCards = [
    {
      id: 1,
      title: "Web Development",
      desc: "Next-generation web applications built for speed, accessibility, and search engine dominance.",
      bullets: ["Headless Architectures", "E-commerce Engines", "Progressive Web Apps"],
      linkText: "Explore Service",
      textColor: "text-purple-600",
      hoverColor: "hover:text-purple-700",
      iconBg: "bg-purple-100",
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "App Development",
      desc: "Native and cross-platform mobile experiences that users love to touch and interact with every day.",
      bullets: ["iOS & Android Native", "React Native Experts", "Backend Integration"],
      linkText: "Explore Service",
      textColor: "text-orange-500",
      hoverColor: "hover:text-orange-600",
      iconBg: "bg-orange-100",
      icon: (
        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "UI/UX Design",
      desc: "User-centric design systems that balance aesthetic brilliance with seamless functional clarity.",
      bullets: ["Prototyping & Wireframing", "Visual Brand Identity", "Usability Auditing"],
      linkText: "Explore Service",
      textColor: "text-pink-600",
      hoverColor: "hover:text-pink-700",
      iconBg: "bg-pink-100",
      icon: (
        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Digital Marketing",
      desc: "Data-driven growth strategies that convert passive observers into loyal brand advocates.",
      bullets: ["SEO Optimization", "Paid Media Strategy", "Content Lifecycle"],
      linkText: "Explore Service",
      textColor: "text-gray-900",
      hoverColor: "hover:text-purple-600",
      iconBg: "bg-gray-100",
      icon: (
        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  // Slider Navigation Trigger Functions
  const handleScrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    setNewsletterError("");
    setNewsletterSuccess(false);

    if (!newsletterEmail.trim()) {
      setNewsletterError("Email address is required.");
      return;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(newsletterEmail)) {
      setNewsletterError("Please enter a valid email address.");
      return;
    }

    setNewsletterSuccess(true);
    setNewsletterEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 via-white to-orange-50 text-gray-900 font-sans overflow-x-hidden flex flex-col justify-between">
      <div>
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-block w-fit bg-purple-100 text-purple-700 text-xs uppercase font-extrabold tracking-widest px-3 py-1.5 rounded-md mb-6 shadow-sm">
              Capabilities
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none text-gray-900">
              Precision Digital <br />
              <span className="text-purple-600">Engineering.</span>
            </h1>
            <p className="text-gray-600 mt-8 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              We don't just build websites; we craft high-performance digital ecosystems. 
              Our boutique approach merges technical mastery with atmospheric design to elevate 
              your brand's digital presence.
            </p>
            <div className="flex flex-wrap gap-3 mt-10">
              <div className="flex items-center gap-2 bg-gray-50/80 border border-gray-100 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm">
                <span className="text-purple-600 font-bold text-sm">⚡</span>
                <span className="text-sm font-semibold text-gray-800">Fast Performance</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50/80 border border-gray-100 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm">
                <span className="text-orange-500 font-bold text-sm">🎨</span>
                <span className="text-sm font-semibold text-gray-800">Custom Design</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50/80 border border-gray-100 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm">
                <span className="text-red-500 font-bold text-sm">🛡️</span>
                <span className="text-sm font-semibold text-gray-800">Scalable Infrastructure</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-400 to-pink-300 rounded-3xl blur-2xl opacity-20 -z-10" />
            <div className="w-full max-w-md aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition duration-500 ease-out">
              <img 
                src="/project/images/s1.png" 
                alt="Precision Digital Engineering Visual Illustration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* CORE EXPERTISE SECTION */}
        <section className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                Our Core Expertise
              </h2>
              <p className="text-gray-500 text-lg font-medium leading-relaxed">
                Strategic solutions tailored to your unique business challenges, delivered with creative flair and technical precision.
              </p>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex gap-3 shrink-0">
              <button 
                onClick={handleScrollLeft}
                className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-purple-600 shadow-sm hover:bg-gray-50 active:scale-95 transition group select-none"
              >
                <span className="text-xl transform group-hover:-translate-x-0.5 transition">←</span>
              </button>
              <button 
                onClick={handleScrollRight}
                className="w-12 h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-purple-600 shadow-sm hover:bg-gray-50 active:scale-95 transition group select-none"
              >
                <span className="text-xl transform group-hover:translate-x-0.5 transition">→</span>
              </button>
            </div>
          </div>

          {/* CHANGED TO FLEX WITH OVERFLOW HIDING MIDDLEWARE EMBEDDED */}
          <div 
            ref={sliderRef}
            className="flex flex-row gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6"
            style={{
              scrollbarWidth: "none", /* Firefox */
              msOverflowStyle: "none", /* IE/Edge */
            }}
          >
            {/* Custom Webkit style adjustment injected block */}
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {expertiseCards.map((card) => (
              <div 
                key={card.id} 
                className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-100/40 border border-gray-100/60 flex flex-col justify-between hover:translate-y-[-4px] transition duration-300 min-h-[520px] w-[88vw] sm:w-[45vw] lg:w-[calc(25%-18px)] shrink-0 snap-start"
              >
                <div>
                  <div className={`w-14 h-14 ${card.iconBg} rounded-2xl flex items-center justify-center mb-8`}>
                    {card.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed font-medium mb-8">
                    {card.desc}
                  </p>

                  <ul className="space-y-3.5 mb-8">
                    {card.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                        <svg className={`w-5 h-5 shrink-0 ${card.textColor}`} fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={`/services/#${card.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`inline-flex items-center gap-2 font-bold text-base mt-auto transition duration-200 group/link ${card.textColor} ${card.hoverColor}`}
                >
                  {card.linkText}
                  <span className="transform group-hover/link:translate-x-1 transition duration-200 text-xl font-light">
                    →
                  </span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION SECTION */}
        <section className="max-w-7xl mx-auto px-6 pb-28 pt-10">
          <div className="bg-gradient-to-r from-[#6324ef] via-[#9f2194] to-[#f04e1c] rounded-[3rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="absolute right-[24%] top-[25%] text-white/5 font-black text-8xl tracking-widest select-none uppercase pointer-events-none hidden md:block">
              SCATTER
            </div>
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                Ready to launch your <br /> project?
              </h2>
              <p className="text-white/80 max-w-xl text-base md:text-lg font-medium leading-relaxed">
                Our team is standing by to help you translate your vision into a market-leading digital product.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-wrap lg:justify-end items-center gap-4 relative z-10">
              <a href="/contact" className="bg-white text-[#6324ef] font-bold text-base px-8 py-5 rounded-[2rem] shadow-xl hover:bg-gray-50 transform hover:-translate-y-0.5 transition duration-200 min-w-[160px] text-center">
                Get Started
              </a>
              <a href="/schedule" className="bg-white/10 hover:bg-white/20 text-white font-bold text-base px-8 py-5 rounded-[2rem] border border-white/20 backdrop-blur-md transform hover:-translate-y-0.5 transition duration-200 min-w-[160px] text-center">
                Schedule Call
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* BRAND FOOTER */}
      <footer className="bg-white border-t border-gray-100 py-16 px-6 md:px-12 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6">
          <div className="md:col-span-4 space-y-6">
            <h2 className="text-4xl font-black text-[#6324ef] tracking-tight">VIS</h2>
            <p className="text-gray-500 text-base font-medium leading-relaxed max-w-sm">
              Pioneering the next wave of boutique digital experiences through precision engineering and artistic vision.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {["📷", "👜", "🎨"].map((icon, idx) => (
                <button key={idx} className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-sm shadow-sm hover:bg-purple-50 hover:border-purple-200 transition">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-gray-950 tracking-tight">Quick Links</h4>
            <ul className="space-y-3 font-medium text-gray-500 text-sm">
              <li><a href="/" className="hover:text-[#6324ef] transition">Home</a></li>
              <li><a href="/services" className="text-gray-900 font-bold hover:text-[#6324ef] transition">Services</a></li>
              <li><a href="/portfolio" className="hover:text-[#6324ef] transition">Portfolio</a></li>
              <li><a href="/blog" className="hover:text-[#6324ef] transition">Blog</a></li>
              <li><a href="/solutions" className="hover:text-[#6324ef] transition">Ready Solutions</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-gray-950 tracking-tight">Support</h4>
            <ul className="space-y-3 font-medium text-gray-500 text-sm">
              <li><a href="/about" className="hover:text-[#6324ef] transition">About</a></li>
              <li><a href="/careers" className="hover:text-[#6324ef] transition">Careers</a></li>
              <li><a href="/contact" className="hover:text-[#6324ef] transition">Contact</a></li>
              <li><a href="/privacy" className="hover:text-[#6324ef] transition">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-base font-bold text-gray-950 tracking-tight">Newsletter</h4>
            <p className="text-gray-400 text-sm font-medium">Enter your email for creative sparks</p>
            
            <form onSubmit={handleSubscribeSubmit} className="space-y-3">
              <div className="relative flex flex-col w-full max-w-sm">
                <input 
                  type="text"
                  value={newsletterEmail}
                  onChange={(e) => {
                    setNewsletterEmail(e.target.value);
                    if(newsletterError) setNewsletterError("");
                  }}
                  placeholder="Your email address"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-full outline-none text-sm font-medium text-gray-800 placeholder-gray-400 focus:border-purple-300 focus:bg-white transition"
                />
              </div>

              <button type="submit" className="w-full max-w-sm py-4 rounded-full text-white font-bold text-sm bg-gradient-to-r from-[#6324ef] to-[#f04e1c] shadow-md hover:opacity-95 transform active:scale-[0.99] transition duration-150 text-center">
                Subscribe
              </button>

              {newsletterError && (
                <p className="text-red-500 text-xs font-semibold pl-4 pt-1">{newsletterError}</p>
              )}
              {newsletterSuccess && (
                <p className="text-emerald-600 text-xs font-semibold pl-4 pt-1">🚀 Successfully subscribed to the collective!</p>
              )}
            </form>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-gray-100 mt-14 pt-6 text-center text-xs font-medium text-gray-400 tracking-wide">
          © 2024 VIS Agency. Designed for the Luminous Canvas.
        </div>
      </footer>
    </div>
  );
}