import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../components/ui/navigation-menu";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white p-10 flex items-center">
      <p className='flex-shrink-0'>© 2024 Resume Website</p>
      <ul className='flex flex-1 justify-end'>
        <li className='hover:underline'>
          <a className='flex items-center mx-2' href=''>
            <FaFacebook />
            <div className='ml-2'>Facebook</div>
          </a>
        </li>
        <li className=''>
          <a className='flex items-center mx-2'>
            <FaInstagram />
            <div className='ml-2'>Instagram</div>
          </a>
        </li>
        <li className=''>
          <a className='flex items-center mx-2'>
            <FaTwitter />
            <div className='ml-2'>Twitter</div>
          </a>
        </li>
        <li className=''>
          <a className='flex items-center mx-2'>
            <FaLinkedin />
            <div className='ml-2'>LinkedIn</div>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;