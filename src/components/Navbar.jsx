import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full border-b border-gray-800 px-10 py-5 flex items-center justify-between">
      
      {/* Left Side */}
      <div className="flex items-center gap-14">
        
        {/* Logo */}
       <h1 className="text-3xl font-bold tracking-widest bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
           VIS
      </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-10 text-sm font-medium ">
          
          <li>
            <Link to="/" className="hover:text-blue-500 hover:underline transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/portfolio" className="hover:text-blue-500 hover:underline transition">
              Portfolio
            </Link>
          </li>

          <li>
            <Link to="/services" className="hover:text-blue-500 hover:underline transition">
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/ready-solutions"
              className="hover:text-blue-500 hover:underline transition"
            >
              Ready Solutions
            </Link>
          </li>

          <li>
            <Link to="/blog" className="hover:text-blue-500 hover:underline transition">
              Blog
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-500 hover:underline transition">
              About
            </Link>
          </li>

          <li>
            <Link to="/careers" className="hover:text-blue-500 hover:underline transition">
              Careers
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-blue-500 hover:underline transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Side Button */}
      <button
        onClick={() => navigate("/contact")}
        className="bg-gradient-to-r from-blue-600 to-red-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
      >
        Get Estimate
      </button>
    </nav>
  );
}