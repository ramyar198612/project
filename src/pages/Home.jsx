import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#fbf8f6] min-h-screen text-black antialiased">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="min-h-[90vh] flex items-center px-6 md:px-16 py-20 md:py-0 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">
          
          {/* Left Content */}
          <div className="z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-black tracking-tight">
              Transforming <br />
              Ideas into <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h1>

            <p className="text-gray-600 text-lg mt-8 max-w-xl leading-8">
              We design and build premium digital experiences for
              forward-thinking brands using modern technologies and
              creative solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">
              <Link to="/services">
                <button className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 active:scale-95 transition transform duration-200">
                  Get Started
                </button>
              </Link>

              <Link to="/portfolio">
                <button className="bg-white text-black px-8 py-4 rounded-full font-semibold shadow-md hover:scale-105 active:scale-95 transition transform duration-200 border border-gray-100">
                  View Portfolio →
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="relative hidden md:flex justify-center items-center h-[500px]">
            {/* Main Card */}
            <div className="w-[440px] lg:w-[480px] h-[300px] bg-white rounded-[30px] shadow-2xl p-8 relative z-10 transition hover:shadow-purple-100 duration-300">
              <div className="w-28 h-6 bg-purple-200 rounded-full mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-100 rounded-full w-full"></div>
                <div className="h-4 bg-gray-100 rounded-full w-4/5"></div>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-10">
                <div className="h-24 rounded-2xl bg-purple-100"></div>
                <div className="h-24 rounded-2xl bg-orange-100"></div>
                <div className="h-24 rounded-2xl bg-pink-100"></div>
              </div>
              <div className="absolute top-5 right-5 w-10 h-10 bg-gray-200 rounded-full"></div>
            </div>

            {/* Floating Card 1 */}
            <div className="absolute bottom-6 left-[-20px] bg-white shadow-2xl rounded-2xl p-5 rotate-[-8deg] z-20 w-60 border border-gray-50/50 transform hover:rotate-0 transition duration-300 pointer-events-none select-none">
              <h3 className="font-bold text-lg text-purple-700 flex items-center gap-2">
                ⚡ Fast Delivery
              </h3>
              <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                Projects completed in weeks, not months.
              </p>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-12 right-[-20px] bg-white shadow-2xl rounded-2xl p-6 rotate-[4deg] z-20 w-52 border border-gray-50/50 transform hover:rotate-0 transition duration-300 pointer-events-none select-none">
              <h3 className="text-4xl font-black text-orange-500 tracking-tight">
                98%
              </h3>
              <p className="text-gray-400 uppercase tracking-widest text-xs font-bold mt-1">
                Client Retention
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 2. TRUSTED BY SECTION ================= */}
      <section className="bg-[#f3edea] py-16 px-6 md:px-16 flex flex-col items-center justify-center">
        <div className="w-full max-w-7xl mx-auto text-center">
          <h2 className="text-gray-400 font-bold uppercase tracking-[0.25em] text-sm mb-12">
            Trusted by Industry Leaders
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:justify-between text-gray-400 opacity-80">
            <span className="text-2xl md:text-3xl font-black uppercase tracking-wider select-none">Techno</span>
            <span className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide select-none">Velocity</span>
            <span className="text-2xl md:text-3xl font-serif font-bold capitalize select-none">Aura</span>
            <span className="text-2xl md:text-3xl font-mono font-bold tracking-tighter select-none">S-CORP</span>
            <span className="text-2xl md:text-3xl font-sans font-black lowercase select-none">nebula.</span>
          </div>
        </div>
      </section>

      {/* ================= 3. EXPERTISE HEADER SECTION ================= */}
      <section className="pt-24 pb-12 px-6 md:px-16 bg-[#fbf8f6]">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <span className="text-purple-700 font-bold uppercase tracking-widest text-sm block mb-4">
              Expertise
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-black leading-[1.15] tracking-tight">
              We build modern digital infrastructures for the web.
            </h2>
          </div>
          <div className="pb-2 md:pb-4 shrink-0">
            <Link 
              to="/services" 
              className="group inline-flex items-center gap-2 text-lg font-bold text-gray-800 hover:text-purple-700 transition duration-200"
            >
              <span>View All Services</span>
              <span className="transform group-hover:translate-x-1 transition duration-200">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= 4. SERVICES GRID SECTION ================= */}
      <section className="pb-24 px-6 md:px-16 bg-[#fbf8f6]">
        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Web Development */}
          <div className="bg-white rounded-[40px] p-10 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-[#f3ebfccc] rounded-2xl flex items-center justify-center mb-8 text-purple-700">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-5">Web Development</h3>
              <p className="text-gray-500 text-[16px] leading-7 mb-8 font-medium">
                Scalable, responsive, and blazing-fast web applications built with the latest technologies like Next.js and Tailwind.
              </p>
            </div>
            <ul className="space-y-4 border-t border-gray-50 pt-6">
              {["React/Next.js", "E-commerce Engines", "Custom CMS"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 font-semibold text-sm">
                  <span className="w-5 h-5 rounded-full border-2 border-purple-600 flex items-center justify-center text-purple-600 shrink-0">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: UI/UX Design */}
          <div className="bg-white rounded-[40px] p-10 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-[#fff2eacc] rounded-2xl flex items-center justify-center mb-8 text-orange-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-5">UI/UX Design</h3>
              <p className="text-gray-500 text-[16px] leading-7 mb-8 font-medium">
                User-centric designs that convert. We create emotional connections through thoughtful visual storytelling.
              </p>
            </div>
            <ul className="space-y-4 border-t border-gray-50 pt-6">
              {["Design Systems", "Rapid Prototyping", "User Research"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 font-semibold text-sm">
                  <span className="w-5 h-5 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 shrink-0">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Digital Strategy */}
          <div className="bg-white rounded-[40px] p-10 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-[#fff0f2cc] rounded-2xl flex items-center justify-center mb-8 text-rose-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699-2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 3.328m0 0a3.5 3.5 0 11-7 0c0-1.77 1.11-3.28 2.673-3.83" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-5">Digital Strategy</h3>
              <p className="text-gray-500 text-[16px] leading-7 mb-8 font-medium">
                Data-driven roadmaps to help your business navigate the complex landscape of digital growth.
              </p>
            </div>
            <ul className="space-y-4 border-t border-gray-50 pt-6">
              {["Product Roadmap", "SEO Mastery", "Conversion Optimization"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 font-semibold text-sm">
                  <span className="w-5 h-5 rounded-full border-2 border-rose-500 flex items-center justify-center text-rose-500 shrink-0">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ================= 5. WHY CHOOSE US SECTION ================= */}
      <section className="bg-[#130f12] text-white py-24 px-6 md:px-16 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          
          {/* Left Side Content & Stats */}
          <div className="md:col-span-7 space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] max-w-2xl">
                Why partners choose VIS over the competition.
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                We aren't just an agency; we are your technical co-founders. We focus on outcome-driven design and clean, maintainable code.
              </p>
            </div>

            {/* Metrics Layout Grid */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-12 pt-4">
              <div>
                <h3 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight">
                  50+
                </h3>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-3">
                  Projects Launched
                </p>
              </div>

              <div>
                <h3 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent tracking-tight">
                  20+
                </h3>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-3">
                  Clients Served
                </p>
              </div>

              <div>
                <h3 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent tracking-tight">
                  12k
                </h3>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-3">
                  Hours Crafted
                </p>
              </div>

              <div>
                <h3 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent tracking-tight">
                  100%
                </h3>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-3">
                  Commitment
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Image Block */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="w-full max-w-[480px] aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[40px] overflow-hidden bg-zinc-900 shadow-2xl">
              <img 
                src="/images/group.png" 
                alt="Our collaborative development team planning production roadmap layout" 
                className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition duration-500"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= 6. PORTFOLIO / CRAFTED EXCELLENCE SECTION ================= */}
      <section className="bg-[#fbf8f6] py-24 px-6 md:px-16">
        
        {/* Section Header */}
        <div className="w-full max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-[#2d2730] tracking-tight mb-6">
            Crafted Excellence.
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Selected works that define our standard of digital artistry.
          </p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-x-8 gap-y-16">
          
          {/* Card 1: Lumina Fintech Platform */}
          <div className="group cursor-pointer">
            <div className="w-full aspect-[16/10] bg-zinc-900 rounded-[30px] overflow-hidden shadow-sm mb-6 transition duration-300 group-hover:shadow-xl">
              <img 
                src="/images/cr1.png" 
                alt="Lumina Fintech Platform UI Display" 
                className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex justify-between items-baseline px-2">
              <span className="text-purple-700 font-bold uppercase tracking-wider text-xs">
                Product Design
              </span>
              <span className="text-gray-400 font-semibold text-sm">
                2024
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-[#2d2730] tracking-tight mt-2 px-2 transition group-hover:text-purple-700 duration-200">
              Lumina Fintech Platform
            </h3>
          </div>

          {/* Card 2: Zenith Health App */}
          <div className="group cursor-pointer">
            <div className="w-full aspect-[16/10] bg-[#0c232c] rounded-[30px] overflow-hidden shadow-sm mb-6 transition duration-300 group-hover:shadow-xl">
              <img 
                src="/images/cr2.png" 
                alt="Zenith Health App Mobile Showcase" 
                className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex justify-between items-baseline px-2">
              <span className="text-orange-500 font-bold uppercase tracking-wider text-xs">
                Mobile Development
              </span>
              <span className="text-gray-400 font-semibold text-sm">
                2024
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-[#2d2730] tracking-tight mt-2 px-2 transition group-hover:text-orange-500 duration-200">
              Zenith Health App
            </h3>
          </div>

          {/* Card 3: Nova Minimalist Store */}
          <div className="group cursor-pointer">
            <div className="w-full aspect-[16/10] bg-[#2e4c4f] rounded-[30px] overflow-hidden shadow-sm mb-6 transition duration-300 group-hover:shadow-xl">
              <img 
                src="/images/cr3.png" 
                alt="Nova Minimalist Store Interface Layout" 
                className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
                onError={(e) => {
                  e.target.parentNode.style.backgroundColor = '#224447';
                }}
              />
            </div>
            <div className="flex justify-between items-baseline px-2">
              <span className="text-rose-600 font-bold uppercase tracking-wider text-xs">
                E-Commerce
              </span>
              <span className="text-gray-400 font-semibold text-sm">
                2024
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-[#2d2730] tracking-tight mt-2 px-2 transition group-hover:text-rose-600 duration-200">
              Nova Minimalist Store
            </h3>
          </div>

          {/* Card 4: Echo Branding System */}
          <div className="group cursor-pointer">
            <div className="w-full aspect-[16/10] bg-[#3a5851] rounded-[30px] overflow-hidden shadow-sm mb-6 transition duration-300 group-hover:shadow-xl">
              <img 
                src="/images/cr4.png" 
                alt="Echo Branding System Canvas Showcase" 
                className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
                onError={(e) => {
                  e.target.parentNode.style.backgroundColor = '#2d4742';
                }}
              />
            </div>
            <div className="flex justify-between items-baseline px-2">
              <span className="text-purple-600 font-bold uppercase tracking-wider text-xs">
                Branding
              </span>
              <span className="text-gray-400 font-semibold text-sm">
                2023
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-[#2d2730] tracking-tight mt-2 px-2 transition group-hover:text-purple-600 duration-200">
              Echo Branding System
            </h3>
          </div>

        </div>
      </section>

      {/* ================= 7. TESTIMONIAL / WHAT OUR CLIENTS SAY ================= */}
      <section className="bg-[#fbf8f6] pb-24 px-6 md:px-16">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
          
          <h2 className="text-3xl md:text-4xl font-black text-[#2d2730] tracking-tight text-center mb-12">
            What Our Clients Say
          </h2>

          <div className="w-full max-w-5xl bg-white rounded-[40px] px-10 md:px-20 pt-16 pb-12 shadow-sm relative flex flex-col items-center">
            
            <span className="text-purple-200 text-8xl font-serif absolute top-6 left-10 md:left-14 select-none leading-none pointer-events-none">
              “
            </span>

            <p className="text-[#2d2730] text-xl md:text-3xl font-bold text-center leading-snug md:leading-relaxed max-w-3xl z-10 relative">
              "VIS transformed our legacy system into a high-converting digital masterpiece. Their attention to detail and technical prowess is unmatched in the industry."
            </p>

            <div className="mt-12 w-20 h-20 rounded-full overflow-hidden border-2 border-[#2d2730] bg-[#111] shadow-md shrink-0">
              <img 
                src="/images/man.png" 
                alt="Corporate executive client headshot avatar representation" 
                className="w-full h-full object-cover"
              />
            </div>
              <h4 className="text-xl font-bold">Marcus Sterling</h4>
              <h4 className="text-gray-500">CEO,Technova Systems</h4>
            </div>
        </div>
      </section>

      {/* ================= 8. CALL TO ACTION (CTA) SECTION ================= */}
      <section className="bg-[#fbf8f6] mb-50 pb-24 px-6 md:px-16">
        <div className="w-full max-w-7xl mx-auto">
          {/* Beautifully matched gradient backdrop layout from Figma */}
          <div className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 rounded-[40px] py-20 px-8 md:px-16 text-center text-white shadow-xl flex flex-col items-center justify-center">
            
            {/* Bold Heading Row */}
            <h2 className="text-4xl md:text-6xl font-black tracking-tight max-w-4xl leading-tight mb-6">
              Let's Build Something Amazing Together
            </h2>

            {/* Subtext description copy */}
            <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl leading-relaxed mb-12">
              Ready to take your digital presence to the next level? Our team is standing by to help you scale.
            </p>

            {/* Action buttons mirroring Figma layouts perfectly */}
            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full">
              <Link to="/contact">
                <button className="w-56 sm:w-auto bg-white text-purple-800 font-extrabold px-8 py-4 rounded-full shadow-lg hover:bg-gray-50 active:scale-95 transition transform duration-200 text-center">
                  Start Your Project
                </button>
              </Link>
              
              <Link to="/consultation">
                <button className="w-56 sm:w-auto bg-black/20 text-white font-bold px-8 py-4 rounded-full backdrop-blur-sm border border-white/20 hover:bg-black/30 active:scale-95 transition transform duration-200 text-center">
                  Free Consultation
                </button>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}