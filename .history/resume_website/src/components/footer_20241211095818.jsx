import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <p>© 2024 Resume Website</p>
      <div>
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
      </div>
    </footer>
  );
}

export default Footer;