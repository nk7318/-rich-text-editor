import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
import { BsCart3 } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineArrowRight } from 'react-icons/md';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { navigate } from 'Shared/useNavigate';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";



const Header = () => { 
  const navigate = useNavigate()
  
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const style = {
    position: 'absolute',
    top: '12.8%',
    left: '5%',
    width: 1200,
    bgcolor: 'background.paper',
    
    
  };
  const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(true); // Track if the search bar should be visible
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position
 // for first
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //for second
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log(currentScrollY)
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowSearchBar(false);
      } else {
        // Scrolling up
        setShowSearchBar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className='w-full sticky z-50 top-0 right-0 left-0'>
      <div className='w-full'>
        <div className="bg-gradient-to-b from-orange-500 to-red-500 px-4 sm:py-1 lg:py-[1px]">
          <div className="w-full mx-auto flex items-center">
            <div className="flex items-center  lg:space-x-0 w-[40%] lg:w-[45%] lg:ml-[68px] bg-rose-500">
              {/* Logo */}
              <div onClick={()=>navigate("/")} className="flex items-center text-white md:w-[50%]  lg:w-[35%] w-[100%]">
                <img
                  src="https://img.poorvika.com/common/Poorvika-english-logo.svg"
                  alt="Logo"
                  className="lg:w-[30vw] lg:h-full  sm:w-full w-[100vw] h-[7vh]"
                />
              </div>

              <div className="relative hidden md:block lg:w-[44vw] md:w-[56vw]    ">
                <input
                  type="text"
                  placeholder="Search for Products, Brands, Offers"
                  className="bg-white h-[35px] w-full pl-4 pr-10 rounded-full text-sm focus:outline-none"
                />
                <button className="absolute top-0 right-0 mt-2 mr-4  text-center">
                  <FaSearch />
                </button>
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center w-[40%] md:w-[35%] lg:w-[50%] md:ml-10  ml-16 lg:ml-5 justify-between  md:justify-around text-white text-sm  lg:mr-[10%]">
              <div className="flex items-center sm:space-y-0 flex-col">
                <span className="hidden text-sm font-serif lg:block">Delivery to</span>
                <span className="font-semibold items-center lg:flex-row flex-col flex">
                 
                  <div className="truncate overflow-hidden whitespace-nowrap md:text-sm lg:text-xs text-[8px] lg:ml-5 md:w-full w-6">LUCKNOW</div>
                  <div><FaLocationDot className='lg:ml-4 lg:h-6  sm:text-lg text-base' /></div>
                </span>
              </div>

              <div className="lg:flex hidden items-center flex-col space-x-1">
                <span>Locate</span>
                <span className="font-semibold flex items-center">Stores<IoIosArrowDown className='ml-1' /></span>
              </div>

             <div onClick={() => navigate("/cart")} className="flex items-center flex-col space-x-1">
                <span className='lg:flex hidden items-center'>0 Items</span>
                <span className='flex lg:items-center'>
                  <div className="hidden lg:block">0₹</div>
                  <div><FiShoppingCart className="sm:text-xl text-lg  bottom-3 " /></div>
                </span>
              </div>

              <div onClick={handleOpen1} className="flex flex-col items-center space-x-1">
                <span className="hidden lg:block">My Account</span>
                <span className="font-semibold flex">
                  <p className="hidden lg:block mt-2 lg:mt-0">SignIn</p>
                  <div><FaUserCircle className='sm:text-xl text-lg ' /></div>
                </span>
              </div>
               <Modal
          open={open1}
          onClose={handleClose1}
          className=" outline-none border-none !z-20"
        >
          <Box
            sx={{
              position: "absolute",
              // top: "32%",
              // left: "50%",
              // transform: "translate(-50%, -50%)",
              // width: "59%",
              // height: "44%",
            }}
            className="!border-none outline-none md:w-[59%] md:h-[44%] w-[90%] h-full md:top-[12%] md:left-[20%] top-[12%] left-[5%] z--[50] "
          >
            <div className="flex bg-white  rounded-lg  w-full outline-none   ">
              {/* Left Side with Image */}
              <div className="md:flex w-1/2 hidden rounded-l-md ">
                <img
                  src="https://img.poorvika.com//login-img.jpeg"
                  alt="Samsung Z Fold"
                  className="w-full h-full rounded-l-md "
                />
              </div>

              {/* Right Side with Login Form */}
              <div className="w-full lg:w-1/2 md:p-8 p-4 bg-white  rounded-md">
        <p className="text-lg font-semibold text-center mb-2">Sign In</p>
        <p className="text-center text-slate-600 text-sm font-semibold mb-6 mt-10">To Access Your Order Easily</p>

        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm  mb-1 font-semibold" htmlFor="email">Email / Mobile Number *</label>
            <input
              type="text"
              id="email"
              placeholder="Email / Mobile Number"
              required
              className="w-full p-2 border border-slate-300 rounded outline-none focus:ring-2 focus:ring-red-500"
            />
           
          </div>

          {/* Password Input */}
          <div className="relative">
            <label className="block text-sm font-semibold mt-8 mb-1" htmlFor="password">Password *</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              required
              className="w-full p-2 border border-gray-300 rounded outline-none focus:ring-2 focus:ring-orange-500 mb-4"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-2 flex items-center text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {/* {showPassword ? <FaEyeSlash /> : <FaEye />} */}
            </button>
           
          </div>

          {/* Register and Forgot Password Links */}
          <div className="flex justify-between text-xs mt-8">
            <a href="#" className="text-orange-500">Register</a>
            <a href="#" className="text-slate-700 mb-3">Forgot Password?</a>
          </div>

          {/* Login Button */}
          <button type="submit" className="w-full py-3 bg-gradient-to-b from-orange-500 to-red-500  text-white font-semibold rounded">
            LOGIN
          </button>

          {/* Divider */}
          <div className="text-center text-orange-600 font-semibold my-4 ">or</div>

          {/* OTP / Guest Login */}
          <button type="button" className="w-full py-2 text-gray-600 font-semibold rounded">
            LOGIN WITH OTP / GUEST
          </button>

          {/* Terms and Privacy */}
          <p className="text-[10px] text-center ">
            Upon login, I agree to Poorvika's <a href="#" className="text-blue-600">Privacy Policy</a> & <a href="#" className="text-blue-600">Terms</a>
          </p>
        </form>
      </div>
            </div>
          </Box>
        </Modal>
            </div>
          </div>

          {/* Mobile Search Bar - Slide up/down on scroll */}
          <div
  className={`w-full p-0 top-0 md:hidden relative transition-all duration-300 pb-1 overflow-hidden ${
    showSearchBar ? 'opacity-100 max-h-[50px]' : 'opacity-0 max-h-0'
  }`}
>
  <input
    type="text"
    placeholder="Search for Products, Brands, Offers"
    className="w-full placeholder:text-xs placeholder:pl-3 rounded-full outline-none pl-2 pr-10"
  />
  <FaSearch className="absolute top-1 right-3" />
</div>
        </div>
      </div>

      {/* Other navbar content */}
      <div className='overflow-hidden lg:flex hidden justify-evenly py-2 bg-white shadow-md font-semibold text-sm rounded-b-xl'>
        <button onMouseEnter={handleOpen} className="">Mobiles & Accessories</button>
        <Modal
          open={open}
          onMouseOut={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
          "& .MuiBackdrop-root":{
           background: "transparent"

          }
          // opacity:''
        }}
          
        >
          <Box sx={style} className='rounded-sm w-full !border-none !outline-none'>
          
          <div className='grid grid-cols-5 gap-3'>
    {/* Column 1 */}
    <div className='col-span-1 p-5 bg-slate-100'>
      <span className='flex gap-10 text-[14px] !text-orange-400  '><b>Mobiles</b><span><MdOutlineArrowRight className='!text-[20px] !text-orange-400'/></span></span>
      <div className=' ml-5   my-3   space-y-1 flex flex-col text-sm text-slate-600'>
        <span>Galaxy AI Phones</span>
        <span>Smart Phones</span>
        <span>Basic Phone</span>
      </div>
      <span className='flex gap-10 text-[14px] !text-orange-400 pb-1.5'><b>Mobile brands</b><span><MdOutlineArrowRight className='!text-[20px] !text-orange-400'/></span></span>
      <div className=' ml-5  flex flex-col text-sm  my-3   space-y-1 text-slate-600'>
        <span>Apple</span>
        <span>SumSung</span>
        <span>One Plus</span>
        <span>Nokia</span>
        <span>Vivo</span>
        <span>Oppo</span>
        <span>Redmi</span>
        <span>Xiami</span>
        <span>Realme</span>
        <span>carvaon</span>
        <span>Itel</span>
        
      </div>

    </div>

    {/* Column 2 */}
    <div className=' '>
    <div className='col-span-1 pl-5 pt-5 !pb-[16px] '>
    <div className=' ml-5  flex flex-col text-sm  mb-3   space-y-1 text-slate-600' >
      <span>Techno</span>
      <span>HMD</span>
    </div>
    <span className=' text-[14px] flex justify-between text-orange-500 pb-1.5'><b>Mobile Accessories</b><span><MdOutlineArrowRight className='!text-[20px]  !text-orange-400'/></span></span>
      <div className=' ml-3  flex flex-col text-sm  mt-3   space-y-1 text-slate-600'>Chargers</div>
      <div className=' ml-5  flex flex-col text-sm    space-y-1 text-slate-600'>
        <span>Adapter</span>
        <span>Car Chargers</span>
        <span>wall Chargers</span>
        <span>wireLess Chargers</span>
      </div>
      <div className=' ml-3  flex flex-col text-sm     space-y-1 text-slate-600'>
        <span > Cable & Connection</span>
        <span>HeadPhones & Headsets</span>
      </div>
      <div className=' ml-5  flex flex-col text-sm     space-y-1 text-slate-600'>
     
        <span> wirid</span>
        <span>wireLess</span>
        <span>TrueWireless</span>

      </div>
      <div className=' ml-3  flex flex-col text-sm    space-y-1 text-slate-600'>
      <span>Bluetooth Speakers</span>
      <span> Case & Covers</span>
      <span>Power bank</span>
        <span>Memory Cards</span>
      </div>
    </div>
    </div>

    {/* Column 3 */}
    <div className='col-span-1 bg-slate-100 p-5 '>
    <div className=' ml-5   mb-3   space-y-1 flex flex-col text-sm text-slate-600'>
        <span>Mobile Holders</span>
        <span>Pendrive</span>
        <span>Screen Protectors</span>
      </div>
      <span className='flex flex-nowrap gap-10 text-[14px] !text-orange-400 pb-1.5'><b className=' flex  flex-nowrap'>Accessories brands</b><span><MdOutlineArrowRight className='!text-[20px] !text-orange-400'/></span></span>
      <div className=' ml-5  flex flex-col text-sm  my-3   space-y-1 text-slate-600'>
        <span>Apple</span>
        <span>SumSung</span>
        <span>Boat</span>
        <span>Bose</span>
        <span>marshall</span>
        <span>Sony</span>
        <span>One Plus</span>
        <span>Realme</span>
        <span>Noise</span>
        <span>Anker soundCore</span>
        <span>Conekt</span>
        <span>Fingers</span>
        <span>Gripp</span>
        
      </div>
    
    </div>

    {/* Column 4 */}
    <div  className=' '>
    <img 
      src="https://img-prd-pim.poorvika.com/navigation/Oppo-reno-12-series-nav-banner.jpg"
      className="h-full"
    />
    </div>

    {/* Column 5 */}
   <div>
    <img src="https://img-prd-pim.poorvika.com/navigation/Vivo-22V40-Pro.jpg"
      className="h-full"
    />
   </div>
  </div>
          </Box>
        </Modal>
        <button>Computers & Tablets</button>
        <button>TV & Audio</button>
        <button>Kitchen Appliances</button>
        <button>Home Appliances</button>
        <button>Smart Technology</button>
        <button>Personal & Health Care</button>
      </div>
    </div>
  );
};

export default Header;
