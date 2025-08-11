import GallerySection from "../components/GallerySection";

const Gallery = () => {
  return (
    <div className="font-sans text-gray-800 min-h-[90vh] flex justify-center items-center">
      <GallerySection showViewFullButton={false} limit={20} />
    </div>
  );
};

export default Gallery;
