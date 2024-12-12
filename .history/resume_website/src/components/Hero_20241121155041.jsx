import profilePic from "../assets/ProfilePic.png";

const Hero = () => {
  return (
    <div className="bg-yellow-200 text-black w-full flex items-center justify-between p-5">
      <img src={ profilePic } alt="profile" className="w-50 h-50 rounded-full mx-5"/>
      <div>
        Insert information here
      </div>
    </div>
  );
};

export default Hero;