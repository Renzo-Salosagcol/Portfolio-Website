import aboutInformation from '../assets/constants';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-blue-500 p-10">
      <h1 className="text-5xl font-bold p-5">About</h1>
      <div className="w-full max-w-4xl">
        <div className="bg-white p-5 m-5 rounded shadow">
          <h2 className="text-3xl font-semibold">Personal</h2>
          <p className="text">{ aboutInformation.personal }</p>
        </div>
        <div className="bg-white p-5 m-5 rounded shadow">
          <h2 className="text-3xl font-semibold">Education</h2>
          <p className="text">{ aboutInformation.education }</p>
        </div>
        <div className="bg-white p-5 m-5 rounded shadow">
          <h2 className="text-3xl font-semibold">Certifications</h2>
          <p className="text">{ aboutInformation.certifications }</p>
        </div>
      </div>
    </div>
  );
}

export default About;