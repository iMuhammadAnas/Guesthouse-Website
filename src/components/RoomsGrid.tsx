import React from "react";
import RoomCard from "./RoomCard";

interface Room {
  title: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
}

interface RoomsGridProps {
  rooms: Room[];
  limit?: number;
}

const RoomsGrid: React.FC<RoomsGridProps> = ({ rooms, limit }) => {
  const roomsToShow = limit && limit > 0 ? rooms.slice(0, limit) : rooms;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {roomsToShow.map((room, index) => (
        <RoomCard key={index} room={room} />
      ))}
    </div>
  );
};

export default RoomsGrid;
