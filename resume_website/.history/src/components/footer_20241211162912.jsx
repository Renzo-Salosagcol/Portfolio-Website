import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10 flex items-center">
      <p className='flex-shrink-0'>© 2024 Resume Website</p>
      <ul className='flex flex-1 justify-end'>
        <li className='flex items-center'><FaFacebook /> Facebook</li>
        <li><FaInstagram /> Instagram</li>
        <li><FaTwitter /> Twitter</li>
        <li><FaLinkedin /> LinkedIn</li>
      </ul>
    </footer>
  );
}

export default Footer;