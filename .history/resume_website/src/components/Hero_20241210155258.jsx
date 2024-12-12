import profilePic from "../assets/ProfilePic.png";
import aboutInformation from "../assets/constants";

const Hero = () => {
  return (
    <div className="bg-yellow-200 text-black w-full flex items-center justify-between p-5">
      <img src={ profilePic } alt="profile" className="w-50 h-40 rounded-full mx-5"/>
      <div className="justify-items-start">
        about
      </div>
    </div>
  );
};

export default Hero;