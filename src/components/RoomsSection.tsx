import React from "react";
import { Link } from "react-router-dom";
import RoomsGrid from "./RoomsGrid";

interface Room {
  title: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
}

interface RoomsSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

const RoomsSection: React.FC<RoomsSectionProps> = ({
  limit = 3,
  showViewAll = true,
}) => {
  const rooms: Room[] = [
    {
      title: "Mountain View Deluxe",
      description: "Spacious room with panoramic mountain views and premium amenities",
      price: "$280/night",
      image: "https://www.swissotel.com/assets/0/92/2119/6442453024/6442453067/6442453069/6442453265/6217fdfc-9d8d-45a0-b73e-12ea8e222517.png",
      tags: ["King Bed", "Fireplace", "Balcony"],
    },
    {
      title: "Forest View Suite",
      description: "Luxury suite with floor-to-ceiling windows overlooking the pine forest",
      price: "$380/night",
      image: "https://lakeforesthotel.com/wp-content/uploads/2021/05/the-lake-forest-hotel-room-forest-view-04.jpg",
      tags: ["King Bed", "Sitting Area", "Spa Bath"],
    },
    {
      title: "Family Loft",
      description: "Two-level suite perfect for families with separate sleeping areas",
      price: "$450/night",
      image: "https://images.grnconnect.com/1639309/aa2a3f9f8f4837ea89f4b042a933dde9.jpg",
      tags: ["2 Queen Beds", "Kitchenette", "Game Area"],
    },
    {
      title: "Ocean Breeze Suite",
      description: "Elegant suite with stunning ocean views and private balcony",
      price: "$350/night",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/683027780.jpg?k=c7df36b8c6bb1289691108de45638361e20b14bfb717706b51451dfa57568a32&o=&hp=1",
      tags: ["King Bed", "Balcony", "Mini Bar"],
    },
    {
      title: "Urban Chic Room",
      description: "Modern room with city skyline views and sleek décor",
      price: "$220/night",
      image: "https://hotelgoldenage.com/uploads/photos/2048/2022/03/urban-chic-rooms_1093.jpg",
      tags: ["Queen Bed", "Work Desk", "Smart TV"],
    },
    {
      title: "Garden Retreat",
      description: "Cozy room overlooking a serene garden with direct patio access",
      price: "$260/night",
      image: "https://boconceptscotland.com/wp-content/uploads/2025/07/Urbanpods-Alan-stewart-22-1024x683.png",
      tags: ["King Bed", "Patio", "Coffee Maker"],
    },
    {
      title: "Penthouse Luxury",
      description: "Top-floor penthouse with private rooftop terrace and jacuzzi",
      price: "$600/night",
      image: "https://www.filepicker.io/api/file/FoFGaTvmQnanRfB7Y3Gh",
      tags: ["King Bed", "Rooftop Terrace", "Jacuzzi"],
    },
    {
      title: "Cozy Cabin Suite",
      description: "Rustic suite with wood interiors and a stone fireplace",
      price: "$300/night",
      image: "https://thecottagejournal.com/wp-content/uploads/2016/01/Winter-Cabin-bedroom-1024x683.jpg",
      tags: ["Queen Bed", "Fireplace", "Kitchenette"],
    },
    {
      title: "Sunset Vista Room",
      description: "Room with large windows perfect for watching sunsets over the valley",
      price: "$290/night",
      image: "https://thumbs.dreamstime.com/b/luxurious-modern-bedroom-stunning-cityscape-view-sunset-room-features-low-platform-bed-comfortable-seating-366261096.jpg",
      tags: ["King Bed", "Balcony", "Lounge Chair"],
    },
    {
      title: "Luxury Executive Suite",
      description: "Spacious suite with separate office area and executive lounge access",
      price: "$420/night",
      image: "https://www.grandvistahanoi.com/wp-content/uploads/2019/08/Phong-ngu-1.9-1100x733.jpg",
      tags: ["King Bed", "Office Area", "Lounge Access"],
    },
  ];

  return (
    <section
      id="rooms"
      className="py-24 px-6 bg-slate-50 w-full min-h-[80vh] flex justify-center items-center"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Accommodations
          </span>
          <h2 className="text-4xl font-serif font-bold text-slate-800 mt-2 mb-4">
            Our Signature Rooms
          </h2>
          <p className="text-lg text-slate-600">
            Each space is designed with comfort and the mountain aesthetic in
            mind, featuring premium amenities and breathtaking views.
          </p>
        </div>

        {/* Rooms Grid with limit */}
        <RoomsGrid rooms={rooms} limit={limit} />

        {/* View All Rooms button conditionally */}
        {showViewAll && (
          <div className="text-center mt-12">
            <Link
              to={"/rooms"}
              className="border-2 border-slate-800 text-slate-800 cursor-pointer hover:bg-slate-800 hover:text-white px-8 py-3 rounded-full font-medium transition"
            >
              View All Rooms
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default RoomsSection;
