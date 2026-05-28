import { useState } from "react";

export default function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterError, setNewsletterError] = useState("");

  // Handle Main Form Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Main Form Validation
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.projectType) newErrors.projectType = "Select project type";
    if (!formData.budget) newErrors.budget = "Select budget range";
    if (!formData.timeline) newErrors.timeline = "Select timeline";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Main Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Message sent successfully 🚀");
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });
      setErrors({});
    }
  };

  // Newsletter Submit & Validation
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setNewsletterError("");

    if (!newsletterEmail.trim()) {
      setNewsletterError("Email is required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(newsletterEmail)) {
      setNewsletterError("Enter a valid email");
      return;
    }

    alert("Welcome to the Collective! ✨");
    setNewsletterEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 via-white to-orange-50">

      {/* HEADER */}
      <div className="text-center py-20 px-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Let’s Build Something
        </h1>
        <h1 className="text-5xl font-bold text-purple-600 mt-2">
          Extraordinary
        </h1>
        <p className="text-gray-500 mt-6 max-w-2xl mx-auto">
          Share your idea and we’ll help you bring it to life.
        </p>
      </div>

      {/* FORM */}
      <div className="flex justify-center px-4 pb-20">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-5xl bg-white/70 backdrop-blur-md shadow-xl rounded-3xl p-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* NAME */}
          <div>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-3 border-b outline-none bg-transparent"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* EMAIL */}
          <div>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 border-b outline-none bg-transparent"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* PHONE */}
          <div>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full p-3 border-b outline-none bg-transparent"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* PROJECT TYPE */}
          <div>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full p-3 border-b outline-none bg-transparent"
            >
              <option value="">Project Type</option>
              <option value="web">Web Development</option>
              <option value="app">Mobile App</option>
            </select>
            {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>}
          </div>

          {/* BUDGET */}
          <div>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full p-3 border-b outline-none bg-transparent"
            >
              <option value="">Budget Range</option>
              <option value="500-1000">$500 - $1000</option>
              <option value="1000-5000">$1000 - $5000</option>
            </select>
            {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
          </div>

          {/* TIMELINE */}
          <div>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full p-3 border-b outline-none bg-transparent"
            >
              <option value="">Timeline</option>
              <option value="2weeks">1-2 Weeks</option>
              <option value="1month">1 Month</option>
            </select>
            {errors.timeline && <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>}
          </div>

          {/* MESSAGE */}
          <div className="md:col-span-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project"
              rows="5"
              className="w-full p-3 border-b outline-none bg-transparent"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* BUTTON */}
          <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              Your data is securely processed and never shared.
            </p>

            <button
              type="submit"
              className="px-8 py-4 rounded-full text-xl text-white font-semibold 
              bg-gradient-to-r from-purple-500 to-orange-500 
              shadow-lg hover:opacity-90 transition w-full sm:w-auto text-center"
            >
              Submit Estimate Request
            </button>
          </div>
        </form>
      </div>

      {/* CARDS */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto pb-20">
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:scale-105 transition duration-300">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl">
            🚀
          </div>
          <h1 className="text-xl font-bold mb-2">Rapid Kickoff</h1>
          <p className="text-sm text-gray-600">
            Most estimate requests are reviewed within 24 hours.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:scale-105 transition duration-300">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl">
            💡
          </div>
          <h1 className="text-xl font-bold mb-2">Expert Review</h1>
          <p className="text-sm text-gray-600">
            Your project is analyzed by our strategists.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:scale-105 transition duration-300">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl">
            💎
          </div>
          <h1 className="text-xl font-bold mb-2">Tailored Strategy</h1>
          <p className="text-sm text-gray-600">
            Receive a custom roadmap for your project.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-white/80 backdrop-blur-md border-t py-14 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* LOGO */}
          <div>
            <h1 className="text-3xl font-bold text-purple-600">VIS</h1>
            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              Curating the future of digital experiences through light, glass, and code. Elevating brands with precision and creativity.
            </p>
          </div>

          {/* LINKS 1 */}
          <div className="flex flex-col">
            <h1 className="text-xl font-bold mb-4 text-gray-900">Navigation</h1>
            <a href="/" className="text-gray-600 mb-2 hover:text-purple-600 transition">Home</a>
            <a href="/portfolio" className="text-gray-600 mb-2 hover:text-purple-600 transition">Portfolio</a>
            <a href="/services" className="text-gray-600 mb-2 hover:text-purple-600 transition">Services</a>
            <a href="/solutions" className="text-gray-600 hover:text-purple-600 transition">Ready Solutions</a>
          </div>

          {/* LINKS 2 */}
          <div className="flex flex-col">
            <h1 className="text-xl font-bold mb-4 text-gray-900">Company</h1>
            <a href="/blog" className="text-gray-600 mb-2 hover:text-purple-600 transition">Blog</a>
            <a href="/about" className="text-gray-600 mb-2 hover:text-purple-600 transition">About</a>
            <a href="/careers" className="text-gray-600 mb-2 hover:text-purple-600 transition">Careers</a>
            <a href="/contact" className="text-gray-600 mb-2 hover:text-purple-600 transition">Contact</a>
            <a href="/privacy" className="text-gray-600 hover:text-purple-600 transition">Privacy Policy</a>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h1 className="text-xl font-bold mb-4 text-gray-900">
              Join the Collective
            </h1>

            <form onSubmit={handleNewsletterSubmit} className="mb-2">
              <div className="flex items-center gap-2 relative">
                <input
                  type="text"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter Your email for creative sparks"
                  className="w-full px-4 py-4 border rounded-lg outline-none text-sm placeholder-gray-400 focus:border-purple-500 transition"
                />
                <button 
                  type="submit" 
                  className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-4 rounded-lg transition"
                >
                  →
                </button>
              </div>
              {newsletterError && (
                <p className="text-red-500 text-xs mt-1 font-medium">{newsletterError}</p>
              )}
            </form>

            <div className="flex items-center gap-4 text-2xl mt-4">
              <span className="cursor-pointer hover:opacity-80">🎨</span>
              <span className="cursor-pointer hover:opacity-80">📷</span>
              <span className="cursor-pointer hover:opacity-80">👜</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}