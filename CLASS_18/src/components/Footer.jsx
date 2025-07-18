const Footer = () => {
  return (
    <footer className=" bg-gray-800 text-white mt-10">
      <div className="w-[90%] mx-auto py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left mx-auto">
          <h2 className="text-3xl font-bold">Nayeem's Shop</h2>
          <p className="text-md text-gray-400 mt-1">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* <div className="flex gap-4">
          <a href="#" className="text-gray-300 hover:text-white transition">Home</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Products</a>
          <a href="#" className="text-gray-300 hover:text-white transition">Contact</a>
          <a href="#" className="text-gray-300 hover:text-white transition">About</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
