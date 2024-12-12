import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "../components/ui/navigation-menu";
import logoImage from '../path/to/logoImage'; // Make sure to import your logo image

const Nav = () => {
  return (
    <nav className="flex items-center bg-black w-full justify-between h-10 py-10 top-0">
      <div className="mx-5 flex-shrink-0">
        <img className="w-20 h-15" src={logoImage} alt="logo" />
      </div>
      <div className="flex-1 flex justify-end">
        <NavigationMenu className="font-sans w-max">
          <NavigationMenuList className="flex">
            <NavigationMenuItem className="flex-1">
              <NavigationMenuLink href="#" className="hover:underline">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex-1">
              <NavigationMenuLink href="#" className="hover:underline">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex-1">
              <NavigationMenuLink href="#" className="hover:underline">Projects</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex-1">
              <NavigationMenuLink href="#" className="hover:underline">Contact</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}

export default Nav;