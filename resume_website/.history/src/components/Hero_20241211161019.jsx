import profilePic from "../assets/ProfilePic.png";
import {HERO_INFO} from "../assets/constants";

const Hero = () => {
  return (
    <div className="bg-white text-black w-full flex items-center justify-between py-20 px-10">
      <img src={ profilePic } alt="profile" className="w-50 h-40 rounded-full mx-5"/>
      <div className="justify-items-start">
        <h1 className="text-3xl font-bold mb-10">Renzo Salosagol</h1>
        <p className="text-lg">{HERO_INFO}</p>
      </div>
    </div>
  );
};

export default Hero;