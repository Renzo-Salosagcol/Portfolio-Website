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
      <div className="flex-1 flex justify-end text-white">
        <NavigationMenu className="font-sans w-max">
          <NavigationMenuList className="flex">
            <NavigationMenuItem className="flex-1 px-2">
              <NavigationMenuLink className="hover:underline">
                <a className='flex items-center mx-2' href="https://www.facebook.com/renzo.salosagcol" target='blank'>
                  <FaFacebook />
                  <div className='ml-2'>Facebook</div>
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex-1 px-2">
              <NavigationMenuLink className="hover:underline">
                <a className='flex items-center mx-2' href="https://www.instagram.com/renzosalosagcol" target='blank'>
                  <FaInstagram />
                  <div className='ml-2'>Instagram</div>
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex-1 px-2">
              <NavigationMenuLink href="#projects" className="hover:underline">
                <a className='flex items-center mx-2' href="https://www.linkedin.com/in/renzo-salosagcol" target='blank'>
                  <FaTwitter />
                  <div className='ml-2'>Twitter</div>
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex-1 px-2">
              <NavigationMenuLink href="https://www.linkedin.com/in/renzo-salosagcol" className="hover:underline">
                <a className='flex items-center mx-2' href="https://www.linkedin.com/in/renzo-salosagcol" target='blank'>
                  <FaLinkedin />
                  <div className='ml-2'>LinkedIn</div>
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </footer>
  );
}

export default Footer;