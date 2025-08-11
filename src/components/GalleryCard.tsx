import React from "react";

interface GalleryCardProps {
  src: string;
  index: number;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ src, index }) => {
  return (
    <div className="aspect-square bg-slate-700 rounded-xl overflow-hidden hover:scale-105 transition duration-300 cursor-pointer">
      <img
        src={src}
        alt={`Gallery image ${index + 1}`}
        className="object-cover w-full h-full hover:opacity-90 transition"
      />
    </div>
  );
};

export default GalleryCard;
