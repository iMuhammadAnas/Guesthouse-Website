const AboutSection = () => {
  return (
    <section className="py-24 px-6 bg-white w-full min-h-[80vh] flex justify-center items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Our Story
          </span>
          <h2 className="text-4xl font-serif font-bold text-slate-800">
            A Sanctuary in the Mountains
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Nestled at 7,000 feet elevation, Serenity Guesthouse offers an
            escape from the everyday. Our sustainably-built retreat combines
            modern luxury with rustic charm, creating the perfect balance
            between comfort and adventure.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Whether you're seeking solitude or outdoor excitement, our attentive
            staff and thoughtfully designed spaces ensure an unforgettable
            mountain experience.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-4">
            <div>
              <div className="text-3xl font-bold text-slate-800 mb-1">15+</div>
              <div className="text-sm text-slate-500">Rooms & Suites</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-800 mb-1">5★</div>
              <div className="text-sm text-slate-500">Guest Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-800 mb-1">10</div>
              <div className="text-sm text-slate-500">Years Experience</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-w-3 aspect-h-4 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://www.jaypeehotels.com/blog/wp-content/uploads/2024/09/Blog-6-scaled.jpg"
              alt="Guesthouse exterior"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-slate-100 rounded-2xl shadow-lg -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
