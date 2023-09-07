import { useState } from "react";

const navOpenedStyles =
  "absolute flex flex-col pl-8 text-veryDarkBlue py-24 h-screen w-2/3 space-y-6 bg-white  right-0 sm:self-start";
const navClosedStyles =
  "hidden absolute flex flex-col pl-8 text-veryDarkBlue py-24 h-screen w-2/3 space-y-6 bg-white  right-0 sm:self-start";

const menuOpenIcon = "/assets/images/icon-menu-close.svg";
const menuClosedIcon = "/assets/images/icon-menu.svg";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleNavToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="container mx-auto mt-4 md:my-10">
      <div className=" flex justify-between items-center">
        <div id="logo">
          <img src="/assets/images/logo.svg" alt="" />
        </div>
        <ul className="hidden justify-between space-x-8 items-center text-darkGrayishBlue md:flex">
          <li>
            <a className="hover:text-softRed" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-softRed" href="#">
              New
            </a>
          </li>
          <li>
            <a className="hover:text-softRed" href="#">
              Media
            </a>
          </li>
          <li>
            <a className="hover:text-softRed" href="#">
              Trending
            </a>
          </li>
          <li>
            <a className="hover:text-softRed" href="#">
              Categories
            </a>
          </li>
        </ul>
        {/* Mobile toggler */}
        <div className="block md:hidden" onClick={handleNavToggle}>
          <img src={isMenuOpen ? menuOpenIcon : menuClosedIcon} alt="" />
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <ul
          id="menu"
          className={isMenuOpen ? navOpenedStyles : navClosedStyles}
        >
          <li>
            <a className="hover:text-softRed" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-softRed" href="#">
              New
            </a>
          </li>
          <li>
            <a className="hover:text-softRed" href="#">
              Media
            </a>
          </li>
          <li>
            <a className="hover:text-softRed" href="#">
              Trending
            </a>
          </li>
          <li>
            <a className="hover:text-softRed" href="#">
              Categories
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
