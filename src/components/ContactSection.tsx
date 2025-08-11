import React, { useState } from "react";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const ACCESS_KEY = "5e192f2098e04fb3b120631365e10a30";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = React.useState<
    "idle" | "sending" | "success"
  >("idle");

  const validate = (): FormErrors => {
    const errs: FormErrors = {};

    // First Name: required, max 10 chars, only letters
    if (!formData.firstName.trim()) {
      errs.firstName = "First name is required";
    } else if (formData.firstName.length > 10) {
      errs.firstName = "First name cannot exceed 10 characters";
    } else if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      errs.firstName = "First name can contain only letters";
    }

    // Last Name: same rules as first name
    if (!formData.lastName.trim()) {
      errs.lastName = "Last name is required";
    } else if (formData.lastName.length > 10) {
      errs.lastName = "Last name cannot exceed 10 characters";
    } else if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      errs.lastName = "Last name can contain only letters";
    }

    // Email: required, valid format, max 50 chars, no special chars except allowed ones
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (formData.email.length > 50) {
      errs.email = "Email cannot exceed 50 characters";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
    ) {
      errs.email = "Invalid email address";
    }

    // Phone: required, only digits, length between 10-12
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^\d{10,12}$/.test(formData.phone)) {
      errs.phone = "Phone number must be 10 to 12 digits";
    }

    // Message: required, max 100 chars
    if (!formData.message.trim()) {
      errs.message = "Message is required";
    } else if (formData.message.length > 100) {
      errs.message = "Message cannot exceed 100 characters";
    }

    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitState("sending");

    try {
      const formPayload = new FormData();
      formPayload.append("access_key", ACCESS_KEY);
      formPayload.append("name", formData.firstName + " " + formData.lastName);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone);
      formPayload.append("message", formData.message);

      const response = await fetch("https://formly.email/submit", {
        method: "POST",
        body: formPayload,
      });

      if (!response.ok) throw new Error("Network response was not ok");

      // Optionally you can parse response text or json here if Formly sends any
      setSubmitState("success");
      alert("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    } catch (error: any) {
      setSubmitState("idle");
      alert(error.message || "Failed to send message. Please try again later.");
      console.error(error);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-white w-full min-h-[80vh] flex justify-center items-center"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Left info */}
        <div>
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="text-4xl font-serif font-bold text-slate-800 mt-2 mb-6">
            Get In Touch
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FiMapPin className="text-slate-700 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">Location</h3>
                <p className="text-slate-600">
                  123 Mountain View Road
                  <br />
                  Pine Valley, CO 80424
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FiPhone className="text-slate-700 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">Phone</h3>
                <p className="text-slate-600">(555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FiMail className="text-slate-700 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">Email</h3>
                <p className="text-slate-600">hello@serenityguesthouse.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FiClock className="text-slate-700 w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">Hours</h3>
                <p className="text-slate-600">
                  Front desk open 24/7
                  <br />
                  Check-in: 3PM | Check-out: 11AM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="bg-slate-50 rounded-2xl p-8">
          <h3 className="text-2xl font-serif font-semibold text-slate-800 mb-6">
            Send us a Message
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  maxLength={10}
                  pattern="[A-Za-z]+"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border outline-none transition focus:ring-1 ${
                    errors.firstName
                      ? "border-red-500 focus:ring-red-500"
                      : "border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  maxLength={10}
                  pattern="[A-Za-z]+"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border outline-none transition focus:ring-1 ${
                    errors.lastName
                      ? "border-red-500 focus:ring-red-500"
                      : "border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                maxLength={50}
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border outline-none transition focus:ring-1 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                maxLength={12}
                pattern="\d{10,12}"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border outline-none transition focus:ring-1 ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-500"
                    : "border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                }`}
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                maxLength={100}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border outline-none transition focus:ring-1 resize-none ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500"
                    : "border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                }`}
              />
              {errors.message && (
                <p className="text-red-600 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitState === "sending"}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white py-4 rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitState === "sending"
                ? "Sending..."
                : submitState === "success"
                ? "Message sent successfully"
                : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
