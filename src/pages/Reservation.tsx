import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface RoomInfo {
  title: string;
  price: string;
  image: string;
  description?: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  notes: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  checkIn?: string;
  checkOut?: string;
}

const ACCESS_KEY = "5e192f2098e04fb3b120631365e10a30"; // Replace with your Formly access key

const Reservation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const room: RoomInfo = {
    title: searchParams.get("title") || "",
    price: searchParams.get("price") || "",
    image: searchParams.get("image") || "",
    description: searchParams.get("description") || "",
  };

  useEffect(() => {
    if (!room.title) {
      navigate("/", { replace: true });
    }
  }, [room.title, navigate]);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    notes: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<
    "idle" | "sending" | "success"
  >("idle");

  // Validate inputs
  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    const today = new Date();
    today.setHours(0, 0, 0, 0); // time reset kar ke sirf date compare karenge

    if (!formData.fullName.trim()) {
      errs.fullName = "Full name is required";
    } else if (formData.fullName.length > 30) {
      errs.fullName = "Full name cannot exceed 30 characters";
    }

    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
    ) {
      errs.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^\d{10,12}$/.test(formData.phone)) {
      errs.phone = "Phone number must be 10 to 12 digits";
    }

    if (!formData.checkIn.trim()) {
      errs.checkIn = "Check-in date is required";
    } else {
      const checkInDate = new Date(formData.checkIn);
      checkInDate.setHours(0, 0, 0, 0);
      if (checkInDate < today) {
        errs.checkIn = "Check-in date cannot be in the past";
      }
    }

    if (!formData.checkOut.trim()) {
      errs.checkOut = "Check-out date is required";
    } else {
      const checkOutDate = new Date(formData.checkOut);
      checkOutDate.setHours(0, 0, 0, 0);
      if (checkOutDate < today) {
        errs.checkOut = "Check-out date cannot be in the past";
      }
    }

    if (
      formData.checkIn &&
      formData.checkOut &&
      new Date(formData.checkOut) < new Date(formData.checkIn)
    ) {
      errs.checkOut = "Check-out date cannot be before check-in date";
    }

    return errs;
  };

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  // Handle form submit
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
      formPayload.append("room_title", room.title);
      formPayload.append("room_price", room.price);
      formPayload.append("room_description", room.description || "");
      formPayload.append("fullName", formData.fullName);
      formPayload.append("email", formData.email);
      formPayload.append("phone", formData.phone);
      formPayload.append("checkIn", formData.checkIn);
      formPayload.append("checkOut", formData.checkOut);
      formPayload.append("notes", formData.notes);

      const response = await fetch("https://formly.email/submit", {
        method: "POST",
        body: formPayload,
      });

      if (!response.ok) throw new Error("Network response was not ok");

      setSubmitState("success");
      alert("Reservation successfully sent!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        notes: "",
      });
      setErrors({});
    } catch (error: any) {
      setSubmitState("idle");
      alert(
        error.message || "Failed to send reservation. Please try again later."
      );
      console.error(error);
    }
  };

  return (
    <section className="font-sans text-gray-800 min-h-[80vh] flex justify-center items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 bg-slate-100 rounded-xl shadow-lg mt-24 mb-20">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold mb-10 text-center text-slate-800">
          Book Your Stay
        </h1>

        {/* Room summary */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-12">
          {room.image && (
            <img
              src={room.image}
              alt={room.title}
              className="w-full lg:w-1/2 rounded-xl object-cover shadow-md h-64 sm:h-80"
            />
          )}
          <div className="flex flex-col justify-center space-y-2 w-full lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">
              {room.title}
            </h2>
            <p className="text-xl text-slate-600 font-medium">{room.price}</p>
            {room.description && (
              <p className="text-slate-600 mt-2">{room.description}</p>
            )}
          </div>
        </div>

        {/* Booking form */}
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="fullName"
                className="block mb-2 font-medium text-slate-700"
              >
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                maxLength={30}
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg outline-none transition ${
                  errors.fullName
                    ? "border-red-400 focus:ring-2 focus:ring-red-200"
                    : "border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
                }`}
                placeholder="Your full name"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-slate-700"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                maxLength={50}
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg outline-none transition ${
                  errors.email
                    ? "border-red-400 focus:ring-2 focus:ring-red-200"
                    : "border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block mb-2 font-medium text-slate-700"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                maxLength={12}
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg outline-none transition ${
                  errors.phone
                    ? "border-red-400 focus:ring-2 focus:ring-red-200"
                    : "border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
                }`}
                placeholder="1234567890"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="checkIn"
                  className="block mb-2 font-medium text-slate-700"
                >
                  Check-in
                </label>
                <input
                  id="checkIn"
                  name="checkIn"
                  type="date"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg outline-none transition ${
                    errors.checkIn
                      ? "border-red-400 focus:ring-2 focus:ring-red-200"
                      : "border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
                  }`}
                />
                {errors.checkIn && (
                  <p className="text-red-500 text-sm mt-1">{errors.checkIn}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="checkOut"
                  className="block mb-2 font-medium text-slate-700"
                >
                  Check-out
                </label>
                <input
                  id="checkOut"
                  name="checkOut"
                  type="date"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg outline-none transition ${
                    errors.checkOut
                      ? "border-red-400 focus:ring-2 focus:ring-red-200"
                      : "border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400"
                  }`}
                />
                {errors.checkOut && (
                  <p className="text-red-500 text-sm mt-1">{errors.checkOut}</p>
                )}
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="notes"
              className="block mb-2 font-medium text-slate-700"
            >
              Additional Notes (optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              maxLength={200}
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition resize-none"
              placeholder="Special requests or information"
            />
          </div>

          <button
            type="submit"
            disabled={submitState === "sending"}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {submitState === "sending"
              ? "Processing..."
              : submitState === "success"
              ? "✓ Reservation Confirmed"
              : "Complete Booking"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
