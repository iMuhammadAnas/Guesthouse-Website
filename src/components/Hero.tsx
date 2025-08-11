import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://static.vecteezy.com/system/resources/previews/059/018/780/mp4/interior-of-modern-cozy-bedroom-with-large-bed-and-ambient-lighting-modern-design-concept-free-video.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-fade-in">
          Mountain Serenity Awaits
        </h1>
        <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
          Discover tranquility in our luxury mountain retreat where nature meets
          comfort
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={'/rooms'} className="bg-white text-slate-800 hover:bg-white/90 px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 transition cursor-pointer">
            Explore Rooms <FiArrowRight />
          </Link>
          <Link target="_blank" to={'https://youtu.be/Tn6-PIqc4UM'} className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium transition cursor-pointer">
            Watch Video
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-14 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white mt-2 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
