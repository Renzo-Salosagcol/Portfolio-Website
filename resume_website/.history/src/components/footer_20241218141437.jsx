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
import Link from "next/link";


const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white p-10 flex items-center">
      <p className='flex-shrink-0'>© 2024 Resume Website</p>
      <div className="flex-1 flex justify-end text-white">
        <NavigationMenu className="font-sans w-max">
          <NavigationMenuList className="flex">
            <NavigationMenuItem className="flex-1 px-2">
              <NavigationMenuLink href="#home" className="hover:underline">
                <a className='flex items-center mx-2' href=''>
                  <FaFacebook />
                  <div className='ml-2'>Facebook</div>
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex-1 px-2">
              <NavigationMenuLink href="" className="hover:underline">
                <a className='flex items-center mx-2'>
                  <FaInstagram />
                  <div className='ml-2'>Instagram</div>
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex-1 px-2">
              <NavigationMenuLink href="#projects" className="hover:underline">
                <a className='flex items-center mx-2'>
                  <FaTwitter />
                  <div className='ml-2'>Twitter</div>
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex-1 px-2">
              <NavigationMenuLink href="www.linkedin.com/in/renzo-salosagcol" className="hover:underline">
                <div className='flex items-center mx-2'>
                  <FaLinkedin />
                  <div className='ml-2'>LinkedIn</div>
                </div>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </footer>
  );
}

export default Footer;