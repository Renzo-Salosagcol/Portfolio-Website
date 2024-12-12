import logoImage from "../assets/photos/InitialPortfolioLogo.png";

const Nav = () =>{
  return (
    <nav className="flex flex-auto">
      <img src={ logoImage } alt="logo" className="h-10 w-10" />
    </nav>
  )
}

export default Nav;