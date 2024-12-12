import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10 flex items-center">
      <p className='flex-shrink-0'>© 2024 Resume Website</p>
      <ul className='block flex-1 justify-end'>
        <li className='flex items-center'>
          <FaFacebook />
          <div className='ml-2'>Facebook</div>
        </li>
        <li className='flex items-center'>
          <FaInstagram />
          <div className='ml-2'>Instagram</div>
        </li>
        <li className='flex items-center'>
          <FaTwitter />
          <div className='ml-2'>Twitter</div>
        </li>
        <li className='flex items-center'>
          <FaLinkedin />
          <div className='ml-2'>LinkedIn</div>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;