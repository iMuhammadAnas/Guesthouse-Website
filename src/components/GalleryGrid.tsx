import GalleryCard from "./GalleryCard";

interface GalleryGridProps {
  limit?: number; // optional prop
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ limit }) => {
  const galleryImages = [
    "https://www.hoteltentrem.com/semarang/wp-content/uploads/sites/4/2025/01/Room-4-A-Junior-Suite-A-Bedroom.jpg",
    "https://www.hoteltentrem.com/yogyakarta/wp-content/uploads/sites/2/2025/01/Deluxe-twin-1366x768.jpg",
    "https://saigon.newworldhotels.com/wp-content/uploads/sites/18/2014/05/Deluxe-Suite-Living-Room-2.jpg",
    "https://saigon.newworldhotels.com/wp-content/uploads/sites/18/2014/05/NWSGN-Presidential-Suite-Living-Room2.jpg",
    "https://elegantmansion88.com/UploadFile/Gallery/Rooms/Lake-Front-Executive-Suite/4.jpg",
    "https://www.floralcourt.com/images/banner-mb-01.webp",
    "https://assets.anantara.com/image/upload/q_auto,f_auto,c_limit,w_1045/media/minor/anantara/images/anantara-new-york-palace-budapest/rooms/new-room-carrousels/executive-suite/anantara_new_york_palace_budapest_hotel_guest_room_executive_suite_historical_wing_bed_chairs_window.jpg",
    "https://media.ritzparis.com/medias/domain12964/media100001/429-kweeuh3315-web4k.jpg?twic=v1/cover=1536x1228/quality=85",
    "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/247/2022/09/12015513/Movenpick7-resize-Smaller.jpg",
    "https://www.theleela.com/prod/content/assets/aio-banner/dekstop/Executive%20Suite_1920x950_2.webp?VersionId=crLOhRJKX5CSnx_4f._c2rClRflToP_2",
    "https://images.trvl-media.com/lodging/12000000/11570000/11560600/11560567/dc4a848f.jpg?impolicy=fcrop&w=1200&h=800&quality=medium",
    "https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-madina/room-and-suites/executive-suite-city-view/1448x814/executive_suite_city_view_master_bedroom2_.jpg",
  ];

  const imagesToShow = limit ? galleryImages.slice(0, limit) : galleryImages;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {imagesToShow.map((src, index) => (
        <GalleryCard key={index} src={src} index={index} />
      ))}
    </div>
  );
};

export default GalleryGrid;
