import profilePic from "../assets/ProfilePic.png";
import {ABOUT_INFO} from "../assets/constants";

const Hero = () => {
  return (
    <div className="bg-yellow-200 text-black w-full flex items-center justify-between p-5">
      <img src={ profilePic } alt="profile" className="w-50 h-40 rounded-full mx-5"/>
      <div className="justify-items-start">
        { ABOUT_INFO}
      </div>
    </div>
  );
};

export default Hero;