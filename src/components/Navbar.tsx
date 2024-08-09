import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 text-black">
     
      <div className="flex text-center gap-4 ml-12">
      <Image
        src="/logo/logo.svg"
        alt="Company Logo"
        height={76} 
        width={76} 
      />
        <span className="m-2 cursor-pointer">Home</span>
        <span className="m-2 cursor-pointer">Product</span>
        <span className="m-2 cursor-pointer">Pricing</span>
        <span className="m-2 cursor-pointer">Customers</span>
        <span className="border-blue-400 border-2 p-2 text-blue-600 rounded-lg cursor-pointer">
          Talk to lawyer/CA
        </span>
      </div>
      <div className="flex space-x-4">
        <button className="text-black py-2 px-4 rounded cursor-pointer">Login</button>
        <button className="bg-custom-blue text-white py-2 px-4 rounded cursor-pointer">
          Lawyer/CA click here
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
