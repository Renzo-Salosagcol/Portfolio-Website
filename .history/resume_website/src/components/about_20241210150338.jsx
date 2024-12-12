import aboutInformation from '../assets/constants';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-500">
      <h1 className="font-bold">About</h1>
      <p className="">{ aboutInformation }</p>
    </div>
  );
}

export default About;