import profilePic from "../assets/ProfilePic.png";

const Hero = () => {
  return (
    <div className="bg-yellow-200 text-black w-full flex items-center">
      <img src={ profilePic } alt="profile" className="w-40 h-40 rounded-full mx-5"/>
      <div>
        Insert information here
      </div>
    </div>
  );
};

export default Hero;