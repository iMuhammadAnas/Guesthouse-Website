import RoomsSection from "../components/RoomsSection";

const Room: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 min-h-[80vh] flex justify-center items-center">
      <RoomsSection limit={20} showViewAll={false} />
    </div>
  );
};

export default Room;
