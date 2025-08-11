import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Changed to react-router-dom (more common)

const Footer = () => {
  const ACCESS_KEY = "5e192f2098e04fb3b120631365e10a30"; // Your Formly access key

  const quickLinks = [
    { label: "About", href: "/about" },
    { label: "Rooms", href: "/rooms" },
    { label: "Amenities", href: "/amenities" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  const contactInfo = [
    "123 Mountain View Road",
    "Pine Valley, CO 80424",
    "(555) 123-4567",
    "hello@serenityguesthouse.com",
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF className="h-6 w-6" />,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <FaInstagram className="h-6 w-6" />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <FaTwitter className="h-6 w-6" />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <FaLinkedinIn className="h-6 w-6" />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
  ];

  // Newsletter form state
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string>("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    // Basic validation
    if (!email.trim()) {
      setError("Email is required");
      setStatus("error");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      setStatus("error");
      return;
    }

    try {
      const formPayload = new FormData();
      formPayload.append("access_key", ACCESS_KEY);
      formPayload.append("email", email);

      const response = await fetch("https://formly.email/submit", {
        method: "POST",
        body: formPayload,
      });

      if (!response.ok) throw new Error("Failed to subscribe");

      setStatus("success");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12 px-6 border-t border-solid border-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Serenity</h3>
            <p className="text-slate-400">
              A luxury mountain retreat offering unparalleled comfort and
              breathtaking views.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400">
              {contactInfo.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-slate-400 mb-4">
              Subscribe for special offers and mountain retreat updates
            </p>
            <form onSubmit={handleSubscribe} className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-white rounded-l-lg w-full text-slate-900 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "sending"}
                aria-label="Email address"
                required
              />
              <button
                type="submit"
                className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-r-lg transition disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            {status === "error" && (
              <p className="text-red-500 mt-2" role="alert">
                {error}
              </p>
            )}
            {status === "success" && (
              <p className="text-green-500 mt-2" role="status">
                Subscribed successfully!
              </p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Serenity Guesthouse. All rights
            reserved.
          </p>

          <div className="flex space-x-6 text-slate-400">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
