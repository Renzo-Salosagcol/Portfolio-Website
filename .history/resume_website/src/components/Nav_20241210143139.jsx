import logoImage from "../assets/InitialPortfolioLogo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "./ui/navigation-menu";


const Nav = () =>{
  return (
    <nav className="flex items-center bg-black w-full justify-between h-10 py-10 top-0">
      <div className="mx-5 flex flex-shrink-0 items-center">
        <img  className="w-20 h-15" src={ logoImage } alt="logo"/>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="#home">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}

export default Nav;