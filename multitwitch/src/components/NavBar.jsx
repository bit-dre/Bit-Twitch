import searchIcon from '../assets/Search.svg'
import moreIcon from '../assets/More.svg'
import hypercubeIcon from '../assets/Hypercube.svg'
const NavBar = () => {
  return (
    <nav className="bg-[#18181b] text-white flex items-center h-12 px-4 w-full">
      {/* Logo */}
      <div className="mr-4">
        <img src={hypercubeIcon} alt="More" className="w-5 h-5" />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-4">
        <button className="bg-transparent px-4 py-1 text-white hover:text-[#5bb5ec] hover:bg-[#3b3b3e] rounded p-1 font-bold text-lg font-maven">
          Following
        </button>
        <button className="bg-transparent px-4 py-1 text-white hover:text-[#5bb5ec] hover:bg-[#3b3b3e] rounded p-1 font-bold text-lg font-maven">
          Theater Mode
        </button>
      </div>

      {/* Search Input */}
      <div className="ml-4 flex items-center bg-[#1f1f23] rounded p-1 px-3 py-1 shadow-inner border border-[#3b3b3e] hover:border-[#49b4f6] transition-colors duration-300 w-[325px]">
    <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none text-white placeholder-gray-400 px-2 flex-grow font-bold"
    />
    <button className="text-gray-400 ml-2">
        <img src={searchIcon} alt="Search" className="w-5 h-5" />
    </button>
    </div>
      {/* Pushing rest of elements to the right */}
      <div className="flex-grow"></div>
      {/* Three Dots Icon */}
      <div className="ml-4 mr-2 cursor-pointer flex items-center hover:bg-[#3b3b3e] rounded p-2">
        <button className="text-gray-400">
            <img src={moreIcon} alt="More" className="w-5 h-5" />
        </button>
      </div>

      {/* Login Button */}
      <button className="bg-transparent px-4 py-1 text-white hover:text-[#5bb5ec] hover:bg-[#3b3b3e] rounded p-1 font-bold text-lg font-maven">
        Login
      </button>
    </nav>
  );
};

export default NavBar;
