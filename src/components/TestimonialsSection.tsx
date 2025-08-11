const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, NY",
      image: "https://www.befunky.com/images/wp/wp-2022-12-social-media-profile-picture-2.jpg?auto=avif,webp&format=jpg&width=944",
      rating: 5,
      review:
        "The most breathtaking views I've ever woken up to. The attention to detail in the room design made our stay incredibly comfortable. We'll definitely be back!",
    },
    {
      name: "Michael Smith",
      location: "Los Angeles, CA",
      image: "https://www.scripps.org/sparkle-assets/preview_thumbnails/physicians/5366/doctor_finder-3ae5995e7ab101d46b58aafbb632fe9f.jpg",
      rating: 5,
      review:
        "A perfect escape from the busy city life. The food, the hospitality, and the scenery were all top-notch. Highly recommend to anyone!",
    },
    {
      name: "Emily Davis",
      location: "Chicago, IL",
      image: "https://as.nyu.edu/content/dam/nyu-as/faculty/images/profilePhotos/a-f/davis-emily-cropped.png",
      rating: 4,
      review:
        "Beautiful location and cozy rooms. The staff was friendly and always ready to help. We'll be returning for sure.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Guest Stories
          </span>
          <h2 className="text-4xl font-serif font-bold text-slate-800 mt-2 mb-4">
            What Our Guests Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8">
              {/* Stars */}
              <div className="flex items-center mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review */}
              <p className="text-slate-600 mb-6 italic">
                "{testimonial.review}"
              </p>

              {/* Guest Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-slate-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-500">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
