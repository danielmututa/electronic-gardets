import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Search, ShoppingCart, User } from 'lucide-react';
import { NavLink,Link } from 'react-router-dom';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    



    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuItemClick = () => {
    setOpenMenu(null);
  };

  return (
    <div className=" hidden lg:flex fixed w-full z-50 justify-between items-center bg-navbar  shadow-md py-[18px] px-[100px] ">
      <p className="text-white font-montserratBold text-xl">Dimbo P</p>
      <div className="flex justify-between gap-9" ref={dropdownRef}>

        <NavLink to="/"  className="text-white font-montserrat hover:font-montserratBold">Home</NavLink>

        <div 
          className="relative"
          onMouseEnter={() => setOpenMenu('pages')}
        >
          <button className="flex gap-1 items-center font-montserrat text-white hover:font-montserratBold">
            Pages
            <ChevronDown size={14} className={`text-white transition-transform duration-300 ${openMenu === 'pages' ? 'rotate-180' : ''}`} />
          </button>
          <div 
            className={`absolute left-0 mt-[18px] flex-col w-48 bg-white border rounded shadow-lg z-10 transition-all duration-300 origin-top ${
              openMenu === 'pages' ? 'opacity-100 transform scale-y-100' : 'opacity-0 transform scale-y-0'
            }`}
          >



       <div className="w-full flex flex-col">
              <Link to="/about"
                className="px-4 py-4  hover:bg-buttons font-montserrat cursor-pointer"
                onClick={handleMenuItemClick}
              >About us</Link>

              <Link to="/team"
                className="px-4 py-4 hover:bg-buttons font-montserrat cursor-pointer"
                onClick={handleMenuItemClick}
              >About Team</Link>

              <Link to="/services" 
                className="px-4 py-4 hover:bg-buttons font-montserrat cursor-pointer"
                onClick={handleMenuItemClick}
              >Services</Link>

              <Link to="/contact" 
                className="px-4 py-4 hover:bg-buttons font-montserrat cursor-pointer"
                onClick={handleMenuItemClick}
              >Contact us</Link>

              <Link to="/faq" 
                className="px-4 py-4 hover:bg-buttons font-montserrat cursor-pointer"
                onClick={handleMenuItemClick}
              >FAQ</Link>

              <Link to="/whilelist" 
                className="px-4 py-4 hover:bg-buttons font-montserrat cursor-pointer"
                onClick={handleMenuItemClick}
              >Wishlist</Link>

              <Link to="/login" 
                className="px-4 py-4 hover:bg-buttons font-montserrat cursor-pointer"
                onClick={handleMenuItemClick}
              >Login</Link>
           
           </div>



           {/* shop */}
            
          </div>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setOpenMenu('shop')}
        >
          <button className="flex gap-1 items-center font-montserrat text-white hover:font-montserratBold">
            Shop
            <ChevronDown size={14} className={`text-white transition-transform duration-300 ${openMenu === 'shop' ? 'rotate-180' : ''}`} />
          </button>
          <div 
            className={`absolute left-0 mt-[18px] w-48 bg-white border rounded shadow-lg z-10 transition-all duration-300 origin-top ${
              openMenu === 'shop' ? 'opacity-100 transform scale-y-100' : 'opacity-0 transform scale-y-0'
            }`}
          >
              <div className="w-full flex flex-col">
       
       <Link to="/shop" 
                className="px-4 py-4 hover:bg-buttons font-montserrat cursor-pointer"
                onClick={handleMenuItemClick}
              >Product Listings</Link>


             

            <Link to="/categories" 
                className="px-4 py-4 hover:bg-buttons font-montserrat cursor-pointer"
                onClick={handleMenuItemClick}
              >Categories</Link>


             
  <Link to="/account" 
                className="px-4 py-4 hover:bg-buttons font-montserrat cursor-pointer"
                onClick={handleMenuItemClick}
              >Account</Link>

              
            </div>
          </div>
        </div>

        

        <div 
          className="relative"
          onMouseEnter={() => setOpenMenu('blogs')}
        >
          <button className="flex gap-1 items-center text-white font-montserrat hover:font-montserratBold">
            Blogs
            <ChevronDown size={14} className={`text-white transition-transform duration-300 ${openMenu === 'blogs' ? 'rotate-180' : ''}`} />
          </button>
          <div 
            className={`absolute left-0 mt-[18px] w-48 bg-white border rounded shadow-lg z-10 transition-all duration-300 origin-top ${
              openMenu === 'blogs' ? 'opacity-100 transform scale-y-100' : 'opacity-0 transform scale-y-0'
            }`}
          >

<div className="w-full flex flex-col">
           
              <Link to="/blog"
                className="px-4 py-4 hover:hover:bg-buttons font-montserrat cursor-pointer"
                onClick={handleMenuItemClick}
              >Blog</Link>
              <Link to='/blogarticle'
                className="px-4 py-4 hover:hover:bg-buttons font-montserrat cursor-pointer"
                onClick={handleMenuItemClick}
              >Blog Article</Link>
          
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-8">
        <Search size={18} className='text-white  hover:text-buttons font-extrabold'/>
        <User size={18} className='text-white  hover:text-buttons font-extrabold'/>
      <ShoppingCart size={18} className="text-white  hover:text-buttons font-extrabold"/>
      </div>
    </div>
  );
};

export default Navbar;