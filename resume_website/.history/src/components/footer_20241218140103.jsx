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
      <NavigationMenu className="font-sans flex-shrink-0 w-max">
          <NavigationMenuList className="flex">
            <NavigationMenuItem className="flex-1 px-2">
              <NavigationMenuLink href="#home" className="hover:underline">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex-1 px-2">
              <NavigationMenuLink href="#about" className="hover:underline">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex-1 px-2">
              <NavigationMenuLink href="#projects" className="hover:underline">Projects</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex-1 px-2">
              <NavigationMenuLink href="#contact" className="hover:underline">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
    </footer>
  );
}

export default Footer;