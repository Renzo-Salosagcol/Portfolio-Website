import profilePic from "../assets/ProfilePic.png";

const Hero = () => {
  return (
    <div className="bg-yellow-200 text-black w-full flex items-center">
      <div className="flex flex-col w-full items-center">
        <div className="w-40 h-40 rounded-full overflow-hidden">
          <img src={profilePic} alt="profile" className="w-full h-full object-cover"/>
          </div>
    </div>
  );
};

export default Hero;