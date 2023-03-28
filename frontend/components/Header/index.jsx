"use client";
import Image from "next/image";
// import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { usePathname } from 'next/navigation';
import { useTheme } from "next-themes";


const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };



 
   const filter = menuData.filter(object => object).map(filtered => (
  
      filtered.singleManu
  
   ))

 const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  return (
    <>

      <header
        className={`header border-bottom top-0 left-0 z-40 flex w-full items-center bg-transparent ${
          sticky
            ? `${pathname == '/customers' ? '!bg-slate-900 !bg-opacity-80' : ''} !fixed !z-[9999] bg-white bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20 drop-shadow-xl`
            : "absolute"
        }`}
      >
      
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full pr-6 xl:mr-12">
              <a href="/" className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              ><div>
                <Image
                  src="/images/logo/logo-2.svg"
                  alt="logo"
                  width={140}
                  height={30}
                  className={`${pathname == '/customers' ? 'hidden' : 'visible'} w-full dark:hidden `}
                />
                <Image
                  src="/images/logo/logo.svg"
                  alt="logo"
                  width={140}
                  height={30}
                   className={`${pathname == '/customers' ? 'visible' : 'hidden'} w-full dark:block `}
                  // className="hidden w-full dark:block"
                />
                </div>
              </a>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`relative navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-9 ">
                    {menuData.map((menuItem, index, submenu, submenulist) => (
                      <li key={menuItem.id} className="group relative">
                        {menuItem.path ? (
                          <a
                            href={menuItem.path}
                            className={`${pathname == '/customers' ? 'text-white ' : ''} cursor-pointer  flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                          >
                            {menuItem.title}
                          </a>
                        ) : (
                          <>
                            <a
                              onClick={() => handleSubmenu(index)}
                           className={`${pathname == '/customers' ? 'text-white ' : ''} cursor-pointer  flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-6 lg:px-0`}
                            >

                            
                              {menuItem.title}
                              
                              <span className="pl-3">
                                <svg width="15" height="14" viewBox="0 0 15 14">
                                  <path
                                    d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </a>

                              <div className="container">
                            <div
                              className={`lg:w-[${ menuItem.singleManu ? "400px" : "850px"}] lg:grid-cols-${ menuItem.singleManu ? "1" : "2"} submenu grid dropdown-menu top-full left-0 dark:bg-dark p-5 pb-2  lg:absolute lg:top-[150%]  lg:gap-x-[18px]  lg:bg-white lg:opacity-0 drop-shadow-2xl lg:duration-300 lg:group-hover:visible group-hover:grid lg:group-hover:top-full lg:group-hover:opacity-100 dark:lg:bg-dark-gray ${
                              //className={`w-100 submenu grid dropdown-menu top-full left-0 dark:bg-dark p-5 pb-2   lg:invisible lg:absolute lg:top-[150%] lg:max-h-[480px] lg:w-[850px] lg:grid-cols-2 lg:gap-x-[18px] lg:bg-white lg:opacity-0 drop-shadow-2xl lg:duration-300 lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100 dark:lg:bg-dark-gray ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                             {/* ${getNumofCols()} */}
                 
                 
                              {menuItem.submenu?.map((submenuItem) => (
                                <a
                                  href={submenuItem.path}
                                  key={submenuItem.id}
                                  className=" group flex items-center justify-between rounded p-3 duration-300 hover:bg-[#F8F9FF] dark:hover:bg-[#2C3C51] lg:mb-2"
                                >
                             
                                <span className="flex">
                                <span className={`mr-4 bg-primary flex h-9 w-full max-w-[36px] items-center justify-center rounded bg-opacity-50 text-white border-1 border-indigo-500/30`} style={{ background: `${submenuItem.iconbg} `, opacity: 0.9 }}>
                               <i className={`${submenuItem.icon} opacity-100` }></i>
                                </span>
                                <span className="pr-6 lg:pr-8"><span className="mb-1 block text-base font-semibold text-dark dark:text-white"> {submenuItem.title}</span>
                                <span className="block text-xs text-[#9597a8]">{submenuItem.description}</span>
                                </span>
                                </span>
                                <span className="dropdown-arrow"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8242 10.0833L9.90717 5.16635L11.2033 3.87018L18.3332 11L11.2033 18.1298L9.90717 16.8337L14.8242 11.9167H3.6665V10.0833H14.8242Z" fill="#3056D3"></path></svg></span>
                               
                                 
                                </a>
                                
                ))}
                  { menuItem.submenulist?.map((submenuLi) => (
                                <a
                                  href={submenuLi.path}
                                  key={submenuLi.id}
                                  className=" group flex items-center justify-between rounded p-3 duration-300 hover:bg-[#F8F9FF] dark:hover:bg-[#2C3C51] lg:mb-2"
                                >
                             
                                <span className="flex">
                           
                                <span className="pr-6 lg:pr-8"><span className="mb-1 block text-base font-semibold text-dark dark:text-white"> {submenuLi.title}</span>
                                
                                </span>
                                </span>
                                <span className="dropdown-arrow"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8242 10.0833L9.90717 5.16635L11.2033 3.87018L18.3332 11L11.2033 18.1298L9.90717 16.8337L14.8242 11.9167H3.6665V10.0833H14.8242Z" fill="#3056D3"></path></svg></span>
                               
                                 
                                </a>
 ))}
                       
                          

                            </div>

           </div> 


                          </>
                        )} 



                      </li>
                      

                      
                    ))}
                  </ul>
                  
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
              
               <a
                    href="/signin"
                className={`${pathname == '/customers' ? 'text-white ' : ''} hidden py-3 px-7 text-base font-bold text-dark hover:opacity-70 dark:text-white md:block`}
                >
                  <div>
                  Sign In
                  </div>
                </a>
                <a
                  href="/signup"
                  className="ease-in-up hidden rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                >
                <div>
                  Get Started
                  </div>
                </a>
                <div>
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
