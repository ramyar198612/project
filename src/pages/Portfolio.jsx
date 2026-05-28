import { useState } from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  // 1. State management for tracking the selected filter category
  const [activeCategory, setActiveCategory] = useState("All");

  // 2. State management for email subscription validation and messages
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

  const categories = ["All", "Web", "Mobile", "UI/UX", "Branding"];

  // 3. Data source array mapping your public images with relevant categories and metadata
  const portfolioProjects = [
    {
      id: 1,
      title: "Fluid Abstract Exploration",
      category: "UI/UX",
      year: "2026",
      image: "/images/p1.png",
      spanClass: "md:col-span-7", 
    },
    {
      id: 2,
      title: "Interface Mobile Application",
      category: "Mobile",
      year: "2026",
      image: "/images/p2.png",
      spanClass: "md:col-span-5", 
    },
    {
      id: 3,
      title: "E-Commerce Core Architecture",
      category: "Web",
      year: "2025",
      image: "/images/p3.png",
      spanClass: "md:col-span-5", 
    },
    {
      id: 4,
      title: "Boutique Identity System",
      category: "Branding",
      year: "2025",
      image: "/images/p4.png",
      spanClass: "md:col-span-7",
    },
    {
      id: 5,
      title: "SaaS Analytics Dashboard",
      category: "Web",
      year: "2026",
      image: "/images/p5.png",
      spanClass: "md:col-span-6",
    },
    {
      id: 6,
      title: "Immersive Interactions Layout",
      category: "UI/UX",
      year: "2026",
      image: "/images/p6.png",
      spanClass: "md:col-span-6",
    },
  ];

  // 4. Logic to dynamically filter items based on your state selection
  const filteredProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === activeCategory);

  // 5. Subscription Form Validation Handler
  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmailError("");
    setSubscriptionSuccess(false);

    // Basic Regex for general email structure checking
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      setEmailError("Email address is required.");
      return;
    }

    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    // Success state fallback simulation
    setSubscriptionSuccess(true);
    setEmail("");
  };

  return (
    <div className="bg-[#fbf8f6] min-h-screen text-black antialiased flex flex-col justify-between">
      
      <div>
        {/* ================= 1. HERO SECTION ================= */}
        <section className="pt-28 pb-12 px-6 md:px-16">
          <div className="w-full max-w-7xl mx-auto">
            
            {/* Main Heading */}
            <h1 className="text-6xl md:text-[5.5rem] font-black tracking-tight text-[#1c1917] leading-none mb-8">
              Selected <span className="text-[#6300f5]">Works</span>
            </h1>

            {/* Subtitle description */}
            <p className="text-[#57534e] text-xl md:text-2xl font-medium max-w-3xl leading-relaxed mb-14">
              A curation of digital experiences that blend atmospheric depth with boutique precision.
            </p>

            {/* Pill Filter Navigation Bar */}
            <div className="inline-flex flex-wrap items-center bg-white rounded-3xl md:rounded-full p-2 shadow-sm border border-stone-100 gap-2">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 ${
                      isActive
                        ? "bg-[#6300f5] text-white shadow-md shadow-purple-100"
                        : "text-[#57534e] hover:text-[#1c1917]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

        </div>
      </section>

        {/* ================= 2. DYNAMIC WORK GRID SECTION ================= */}
        <section className="pb-24 px-6 md:px-16 bg-[#fbf8f6]">
          <div className="w-full max-w-7xl mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className={`${project.spanClass} group cursor-pointer flex flex-col justify-between`}
                >
                  {/* Image Container */}
                  <div className="w-full aspect-[4/3] md:aspect-auto md:h-[450px] bg-stone-200 rounded-[40px] overflow-hidden shadow-sm mb-4 transition duration-300 group-hover:shadow-xl relative">
                    <img
                      src={project.image}
                      alt={`${project.title} project representation graphics`}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>

                  {/* Project Metadata Card Layout */}
                  <div className="flex justify-between items-baseline px-4 mb-1">
                    <span className="text-[#6300f5] font-bold uppercase tracking-wider text-xs">
                      {project.category}
                    </span>
                    <span className="text-stone-400 font-semibold text-sm">
                      {project.year}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-extrabold text-[#1c1917] tracking-tight px-4 pb-4 transition group-hover:text-[#6300f5] duration-200">
                    {project.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Empty Fallback State */}
            {filteredProjects.length === 0 && (
              <div className="w-full py-20 text-center text-stone-400 font-medium text-lg">
                No works found under the "{activeCategory}" category at the moment.
              </div>
            )}

          </div>
        </section>

        {/* ================= 3. CALL TO ACTION (CTA) SECTION ================= */}
        <section className="pb-24 px-6 md:px-16 bg-[#fbf8f6]">
          <div className="w-full max-w-7xl mx-auto">
            
            <div className="w-full bg-[#faf5f2] rounded-[40px] py-24 px-8 md:px-16 text-center shadow-sm border border-stone-100/50 relative overflow-hidden flex flex-col items-center justify-center">
              
              <div className="absolute top-0 right-0 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl pointer-events-none select-none"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100/40 rounded-full blur-3xl pointer-events-none select-none"></div>

              <h2 className="text-5xl md:text-7xl font-black tracking-tight text-[#1c1917] max-w-3xl leading-[1.1] mb-12 z-10">
                Let's Build Your <br />
                <span className="text-[#a04400]">Next Story.</span>
              </h2>

              <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full z-10">
                <Link to="/contact">
                  <button className="w-56 sm:w-auto bg-gradient-to-r from-[#8338ec] via-[#c74577] to-[#e06438] text-white font-bold px-10 py-4 rounded-full shadow-lg hover:opacity-95 active:scale-95 transition transform duration-200 text-center text-base">
                    Start a Project
                  </button>
                </Link>
                
                <Link to="/services">
                  <button className="w-56 sm:w-auto bg-white text-[#1c1917] font-bold px-10 py-4 rounded-full shadow-sm hover:shadow-md border border-stone-100 active:scale-95 transition transform duration-200 text-center text-base">
                    Our Services
                  </button>
                </Link>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* ================= 4. FOOTER NAVIGATION SECTION ================= */}
      <footer className="bg-[#fbf8f6] pt-16 border-t border-stone-200/60 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-16 pb-12">
          
          {/* Main Footer Links Layout Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8 mb-16">
            
            {/* Column 1: Brand Info & Icons */}
            <div className="md:col-span-4 space-y-6">
              <span className="text-3xl font-black text-[#6300f5] tracking-tight block">
                VIS
              </span>
              <p className="text-stone-500 font-medium text-[16px] leading-relaxed max-w-xs">
                Transforming complex problems into elegant digital narratives.
              </p>
              
              <div className="flex items-center gap-4 text-stone-400">
                <button className="p-2 bg-transparent hover:text-[#6300f5] transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                  </svg>
                </button>
                <button className="p-2 bg-transparent hover:text-[#6300f5] transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .414-.336.75-.75.75H16.25c-.414 0-.75-.336-.75-.75v-4.25c0-.414.336-.75.75-.75h3.25c.414 0 .75.336.75.75ZM9.25 14.15v4.25c0 .414-.336.75-.75.75H5.25c-.414 0-.75-.336-.75-.75v-4.25c0-.414.336-.75.75-.75h3.25c.414 0 .75.336.75.75ZM20.25 5.15v4.25c0 .414-.336.75-.75.75H16.25c-.414 0-.75-.336-.75-.75V5.15c0-.414.336-.75.75-.75h3.25c.414 0 .75.336.75.75ZM9.25 5.15v4.25c0 .414-.336.75-.75.75H5.25c-.414 0-.75-.336-.75-.75V5.15c0-.414.336-.75.75-.75h3.25c.414 0 .75.336.75.75Z" />
                  </svg>
                </button>
                <button className="p-2 bg-transparent hover:text-[#6300f5] transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 0 2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128m-4.8 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1-1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a16.004 16.004 0 0 1-4.764-4.648l-3.876-5.814a1.151 1.151 0 0 1 1.596-1.597l5.814 3.876a16.003 16.003 0 0 1 4.65 4.764m-3.42-3.42a15.999 15.999 0 0 0-3.388 1.62m5.043.025a15.993 15.993 0 0 0 1.622 3.395m-3.42-3.42a15.995 15.995 0 0 1-4.764 4.648" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Column 2: Agency Links */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-stone-900 font-bold tracking-tight text-base">
                Agency
              </h4>
              <ul className="space-y-3 font-semibold text-stone-400">
                <li><Link to="/" className="hover:text-[#6300f5] transition">Home</Link></li>
                <li><Link to="/portfolio" className="hover:text-[#6300f5] transition">Portfolio</Link></li>
                <li><Link to="/services" className="hover:text-[#6300f5] transition">Services</Link></li>
                <li><Link to="/solutions" className="hover:text-[#6300f5] transition">Ready Solutions</Link></li>
              </ul>
            </div>

            {/* Column 3: Resources Links */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-stone-900 font-bold tracking-tight text-base">
                Resources
              </h4>
              <ul className="space-y-3 font-semibold text-stone-400">
                <li><Link to="/blog" className="hover:text-[#6300f5] transition">Blog</Link></li>
                <li><Link to="/about" className="hover:text-[#6300f5] transition">About</Link></li>
                <li><Link to="/careers" className="hover:text-[#6300f5] transition">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-[#6300f5] transition">Contact</Link></li>
              </ul>
            </div>

            {/* Column 4: Newsletter Input Container with Input Validation handling */}
            <form onSubmit={handleSubscribe} className="md:col-span-4 space-y-4">
              <h4 className="text-stone-900 font-bold tracking-tight text-base">
                Newsletter
              </h4>
              
              <div className="space-y-3 w-full max-w-sm">
                <input 
                  type="text" 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if(emailError) setEmailError(""); // Clear errors on keystroke
                  }}
                  placeholder="Enter your email for creative sparks" 
                  className={`w-full rounded-full border bg-white px-6 py-4 text-sm font-medium text-stone-700 outline-none transition shadow-sm ${
                    emailError ? "border-red-400 focus:border-red-500" : "border-stone-200 focus:border-purple-300"
                  }`}
                />
                
                {/* Dynamically displaying validation error states */}
                {emailError && (
                  <p className="text-red-500 text-xs font-bold px-4 tracking-wide transition-all duration-150">
                    {emailError}
                  </p>
                )}

                {/* Dynamically displaying success metrics */}
                {subscriptionSuccess && (
                  <p className="text-emerald-600 text-xs font-bold px-4 tracking-wide transition-all duration-150">
                    Awesome! You have subscribed successfully.
                  </p>
                )}
                
                <button 
                  type="submit" 
                  className="w-full rounded-full bg-gradient-to-r from-[#8338ec] to-[#e06438] text-white font-bold py-4 px-6 hover:opacity-95 shadow-sm active:scale-98 transition transform duration-150"
                >
                  Subscribe
                </button>
              </div>
            </form>

          </div>

          {/* Sub Footer Copyright Disclaimer Row */}
          <div className="pt-8 border-t border-stone-200/50 flex flex-col items-center justify-center text-center gap-2 text-sm font-semibold text-stone-400">
            <p>© 2024 VIS Agency. Designed for the Luminous Canvas.</p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="hover:text-stone-600 transition">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-stone-600 transition">Terms</Link>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}