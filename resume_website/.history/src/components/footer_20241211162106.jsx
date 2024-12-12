import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10">
      <p>© 2024 Resume Website</p>
      <ul>
        <li><FaFacebook /></li>
        <li><FaInstagram /></li>
        <li><FaTwitter /></li>
        <li><FaLinkedin /></li>
      </ul>
      <div className='inline'>
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
      </div>
    </footer>
  );
}

export default Footer;