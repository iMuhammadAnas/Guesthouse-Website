import { FiMapPin, FiClock, FiMail, FiPhone } from "react-icons/fi";

const amenitiesData = [
  {
    icon: FiMapPin,
    title: "Private Trails",
    description: "Exclusive access to scenic hiking trails with varying difficulty levels",
  },
  {
    icon: FiClock,
    title: "Spa Services",
    description: "On-site massage and wellness treatments with mountain-inspired therapies",
  },
  {
    icon: FiMail,
    title: "Gourmet Dining",
    description: "Farm-to-table restaurant featuring locally-sourced mountain cuisine",
  },
  {
    icon: FiPhone,
    title: "Adventure Concierge",
    description: "Personalized itinerary planning for outdoor activities and excursions",
  },
  {
    icon: FiClock,
    title: "Wellness Center",
    description: "Yoga studio, sauna, and indoor heated pool with mountain views",
  },
  {
    icon: FiMapPin,
    title: "Co-Working Lounge",
    description: "High-speed internet and comfortable workspaces for digital nomads",
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-24 px-6 bg-white w-full min-h-[80vh] flex justify-center items-center">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Experience
          </span>
          <h2 className="text-4xl font-serif font-bold text-slate-800 mt-2 mb-4">
            Premium Amenities
          </h2>
          <p className="text-lg text-slate-600">
            We've thoughtfully curated every detail to enhance your mountain retreat experience
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenitiesData.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition duration-300"
              >
                <div className="w-14 h-14 bg-slate-200 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-slate-700 w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{amenity.title}</h3>
                <p className="text-slate-600">{amenity.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
