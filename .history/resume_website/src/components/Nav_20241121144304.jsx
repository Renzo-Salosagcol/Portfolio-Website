import logoImage from "../assets/InitialPortfolioLogo.png";

const Nav = () =>{
  return (
    <nav className="flex items-center bg-black w-full h-10 py-10">
      <div className="flex flex-shrink-0 items-center">
        <img src={ logoImage } alt="logo" className="w-25 h-"/>test
      </div>
      <ul className="flex text-white items-center justify-items-center gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Nav;