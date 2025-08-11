import React from "react";
import { useNavigate } from "react-router-dom";

interface Room {
  title: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
}

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    const params = new URLSearchParams({
      title: room.title,
      price: room.price,
      image: room.image,
      description: room.description,  // yahan add kar diya
    });
    navigate(`/reservation?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      <div className="relative w-full h-[260px] overflow-hidden rounded-lg">
        <img
          src={room.image}
          alt={room.title}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1 rounded-full text-sm font-medium">
          {room.price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif font-semibold text-slate-800 mb-2">
          {room.title}
        </h3>
        <p className="text-slate-600 mb-4">{room.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {room.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={handleBookNow}
          className="w-full bg-slate-800 cursor-pointer hover:bg-slate-700 text-white py-3 rounded-lg font-medium transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
