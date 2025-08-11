import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Manual navigate function for react-router (without react-router-dom)
  const navigate = (path: string) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
    setIsOpen(false);
  };

  const menuItems = [
    { label: "About", path: "/about" },
    { label: "Amenities", path: "/amenities" },
    { label: "Rooms", path: "/rooms" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-2xl font-serif font-bold text-slate-800 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Serenity
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="text-slate-600 hover:text-slate-900 cursor-pointer transition"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => navigate("/rooms")}
            className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 cursor-pointer rounded-full transition"
          >
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-md">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="text-slate-600 hover:text-slate-900 cursor-pointer transition text-left"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => navigate("/rooms")}
              className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 cursor-pointer rounded-full transition"
            >
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
