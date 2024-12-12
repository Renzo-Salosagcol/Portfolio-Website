import aboutInformation from '../assets/constants';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-500 p-10">
      <h1 className="text-5xl font-bold p-5">About</h1>
      <p className="text-lg">{ aboutInformation }</p>
    </div>
  );
}

export default About;