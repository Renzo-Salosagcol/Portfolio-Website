import profilePic from "../assets/ProfilePic.png";
// import {HERO_INFO} from "../assets/constants.js";

const Hero = () => {
  return (
    <div className="bg-yellow-200 text-black w-full flex items-center justify-between p-5">
      <img src={ profilePic } alt="profile" className="w-50 h-40 rounded-full mx-5"/>
      <div className="justify-items-start">
        <h1 className="text-3xl font-bold">John Doe</h1>
      </div>
    </div>
  );
};

export default Hero;