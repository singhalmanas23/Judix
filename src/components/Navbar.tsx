const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-2  text-black">
      <div className="flex-grow text-center gap-4 ml-96">
        <span className="m-2">Product</span>
        <span className="m-2">Pricing</span>
        <span className="m-2">Customers</span>
        <span className="border-blue-400 border-2 p-2 text-blue-600 rounded-lg">
          Talk to lawyer/CA
        </span>
      </div>
      <div className="flex space-x-4">
        <button className=" text-black py-2 px-4 rounded">Login/Sign Up</button>
        <button className="bg-blue-500 text-white  py-2 px-4 rounded">
          Lawyer/CA click here
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
