import logoImage from "../assets/InitialPortfolioLogo.png";

const Nav = () =>{
  return (
    <nav className="flex items-center bg-black w-full h-10">
      <div className="items-center">
        <img src={ logoImage } alt="logo" className="w-full h-"/>test
      </div>
      <ul className="flex text-white items-center">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Nav;