import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10 flex">
      <p>© 2024 Resume Website</p>
      <ul className='inline flex-1'>
        <li><FaFacebook /> Facebook</li>
        <li><FaInstagram /> Instagram</li>
        <li><FaTwitter /> Twitter</li>
        <li><FaLinkedin /> LinkedIn</li>
      </ul>
    </footer>
  );
}

export default Footer;