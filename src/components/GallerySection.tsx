import { Link } from "react-router";
import GalleryGrid from "./GalleryGrid";

interface GallerySectionProps {
  showViewFullButton?: boolean;
  limit?: number;
}

const GallerySection: React.FC<GallerySectionProps> = ({ showViewFullButton = true, limit = 8 }) => {
  return (
    <section
      id="gallery"
      className="py-24 px-6 bg-slate-50 text-white w-full min-h-[90vh]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Moments
          </span>
          <h2 className="text-4xl font-serif font-bold text-slate-950 mt-2 mb-4">
            Experience Serenity
          </h2>
          <p className="text-lg text-slate-500">
            A visual journey through our mountain retreat and the surrounding
            wilderness
          </p>
        </div>

        {/* Gallery Grid with limit 6 */}
        <GalleryGrid limit={limit} />

        {/* Button - conditionally render */}
        {showViewFullButton && (
          <div className="text-center mt-12">
            <Link
              to={"/gallery"}
              className="border-2 border-slate-800 text-slate-800 cursor-pointer hover:bg-slate-800 hover:text-white px-8 py-3 rounded-full font-medium transition"
            >
              View Full Gallery
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
