
const Navbar: React.FC = () => {

    return(
        <nav className="container mx-auto mt-4 md:my-10">
            <div className=" flex justify-between items-center">
                <div id="logo">
                    <img src="/assets/images/logo.svg" alt="" />
                </div>
                <ul className=" justify-between space-x-8 items-center text-darkGrayishBlue md:flex">
                    <li><a className="hover:text-softRed" href="#">Home</a></li>
                    <li><a className="hover:text-softRed" href="#">New</a></li>
                    <li><a className="hover:text-softRed" href="#">Media</a></li>
                    <li><a className="hover:text-softRed" href="#">Trending</a></li>
                    <li><a className="hover:text-softRed" href="#">Categories</a></li>
                </ul>
                {/* Mobile toggler */}
                <div className="block md:hidden">
                    <img src="/assets/images/icon-menu.svg" alt="" />
                </div>  
            </div>

            {/* Mobile menu */}
            {/* <div className="md:hidden">
                    <div id="menu" className="absolute flex flex-col items-center self-end py-8 h mt-10 space-y-6 font-bold bg-white left-20 right-4 sm:w-auto sm:self-center">
                        <li><a className="hover:text-softRed" href="#">Home</a></li>
                        <li><a className="hover:text-softRed" href="#">New</a></li>
                        <li><a className="hover:text-softRed" href="#">Media</a></li>
                        <li><a className="hover:text-softRed" href="#">Trending</a></li>
                        <li><a className="hover:text-softRed" href="#">Categories</a></li>
                    </div>
            </div> */}
        </nav>
    );
}

export default Navbar;