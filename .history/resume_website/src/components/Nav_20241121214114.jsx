import logoImage from "../assets/InitialPortfolioLogo.png";

const Nav = () =>{
  return (
    <nav className="flex items-center bg-black w-full justify-between h-10 py-10 top-0">
      <div className="mx-5 flex flex-shrink-0 items-center">
        <img  className="w-full h-15" src={ logoImage } alt="logo"/>
      </div>
      <ul className="mx-5 flex text-white items-center justify-items-center gap-4 text-xl">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">About</li>
        <li className="hover:underline cursor-pointer">Projects</li>
        <li className="hover:underline cursor-pointer">Contact</li>
      </ul>
    </nav>
  )
}

export default Nav;