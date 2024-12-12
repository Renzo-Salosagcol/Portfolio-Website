import logoImage from "../assets/InitialPortfolioLogo.png";

const Nav = () =>{
  return (
    <nav className="flex items-center bg-black w-full justify-between h-10 py-10">
      <div className="mx-5 flex flex-shrink-0 items-center">
        <img src={ logoImage } alt="logo" className="w-full h-"/>test
      </div>
      <ul className="mx-5 flex text-white items-center justify-items-center gap-4">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline">About</li>
        <li className="hover:underline">Projects</li>
        <li className="hover:underline">Contact</li>
      </ul>
    </nav>
  )
}

export default Nav;