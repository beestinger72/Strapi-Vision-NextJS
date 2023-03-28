import Image from "next/image";
import React from "react";

const Footer = () => {
  const current = new Date();
  const date = `${current.getFullYear()}`;
  return (
    <>
    <section className="relative text-gray-600 body-font  bg-indigo-900 dark:underlay bg-opacity-90 bg-gradient-to-b from-indigo-900 via-indigo-900 ">
    
  <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
 
    <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
      <h2 className="text-xs tracking-widest font-medium title-font bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500  ">APP & SOFTWARE GUIDES</h2>
      <h1 className="md:text-3xl text-3xl font-medium title-font text-white">Ready to get started? Get in touch or create an account. </h1>
      
    </div>
    <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
      <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 fill-orange-500" viewBox="0 0 512 512">
          <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
        </svg>
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
          <span className="title-font font-bold">Google Play</span>
        </span>
      </button>
      <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none text-orange">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 fill-orange-500" viewBox="0 0 305 305">
          <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
          <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
        </svg>
        <span className="ml-4 flex items-start flex-col leading-none">
          <span className="text-xs text-gray-600 mb-1">Download on the</span>
          <span className="title-font font-bold">App Store</span>
        </span>
      </button>
    </div>
  </div>
</section>

      <footer
        className="wow fadeInUp relative z-10 bg-primary bg-opacity-5 pt-16 md:pt-20 lg:pt-24 z-1"
        data-wow-delay=".1s"
      >

        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-4/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <a href="/" className="mb-3 inline-block">
                 <div>
                  <Image
                    src="images/logo/logo-2.svg"
                    alt="Vision Pro Assets Software"
                    className="w-full w-40 dark:hidden "
                    width={100}
                    height={30}
                  />
                  <Image
                    src="images/logo/logo.svg"
                    alt="Vision Pro inspection Software"
                    className="hidden w-40 dark:block border-1 border-slate-100"
                    width={100}
                    height={30}
                  />
                  </div>
                </a>
                <p className="mb-9 text-sm font-medium leading-relaxed text-body-color">
                
                  Vision Pro is a software solution designed to assist organisations, no matter what size, manage their properties, buildings and sites
                </p>
                <div className="flex items-center">
                 
                       <a
                    href="/"
                    aria-label="social-link"
                    className="mr-6 text-dark dark:text-white hover:text-primary"
                  >
                  <div>
                    <svg
                      width="9"
                      height="18"
                      viewBox="0 0 9 18"
                      className="fill-current"
                    >
                      <path d="M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z" />
                    </svg></div>
             </a>
                       <a
                    href="/"
                    aria-label="social-link"
                    className="mr-6 text-dark dark:text-white hover:text-primary"
                  >
                   <div>
                    <svg
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      className="fill-current"
                    >
                      <path d="M16.3024 2.26027L17.375 1.0274C17.6855 0.693493 17.7702 0.436644 17.7984 0.308219C16.9516 0.770548 16.1613 0.924658 15.6532 0.924658H15.4556L15.3427 0.821918C14.6653 0.282534 13.8185 0 12.9153 0C10.9395 0 9.3871 1.48973 9.3871 3.21062C9.3871 3.31336 9.3871 3.46747 9.41532 3.57021L9.5 4.0839L8.90726 4.05822C5.29435 3.95548 2.33065 1.13014 1.85081 0.642123C1.06048 1.92637 1.5121 3.15925 1.99194 3.92979L2.95161 5.36815L1.42742 4.5976C1.45565 5.67637 1.90726 6.52397 2.78226 7.14041L3.54435 7.65411L2.78226 7.93665C3.2621 9.24658 4.33468 9.78596 5.125 9.99144L6.16935 10.2483L5.18145 10.8647C3.60081 11.8921 1.625 11.8151 0.75 11.738C2.52823 12.8682 4.64516 13.125 6.1129 13.125C7.21371 13.125 8.03226 13.0223 8.22984 12.9452C16.1331 11.25 16.5 4.82877 16.5 3.54452V3.36473L16.6694 3.26199C17.629 2.44007 18.0242 2.00342 18.25 1.74658C18.1653 1.77226 18.0524 1.82363 17.9395 1.84932L16.3024 2.26027Z" />
                    </svg>
                    </div>
             </a>
                       <a
                    href="/"
                    aria-label="social-link"
                    className="mr-6 text-dark dark:text-white hover:text-primary"
                  >
                   <div>
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      className="fill-current"
                    >
                      <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                    </svg>
                    </div>
                   </a>
                       <a
                    href="/"
                    aria-label="social-link"
                    className="mr-6 text-dark dark:text-white hover:text-primary"
                  >
                      <div>
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="fill-current"
                    >
                      <path d="M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z" />
                    </svg>
                    </div>
                 </a>
         <a
                    href="/"
                    aria-label="social-link"
                    className="mr-6 text-dark dark:text-white hover:text-primary"
                  >
                      <div>
             
                    
                    </div>
                         Tel: 0115 7590 748
                 </a>
            
                </div>
              </div>
            </div>
     <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Product
                </h2>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-sm font-medium  hover:text-primary"
                    >
                      {" "}
                      Operations software by VisionPro{" "}
                     </a>
                  </li>
                  <li>
                     <a
                      href="/"
                      className="mb-4 inline-block text-sm font-medium hover:text-primary"
                    >
                      {" "}
                    Integrate with my Cafm System{" "}
                   </a>
                  </li>
                  <li>
                           <a
                      href="/"
                      className="mb-4 inline-block text-sm font-medium  hover:text-primary"
                    >
                      {" "}
                      Asbestos Saftey Management{" "}
                   </a>
                  </li>
                   <li>
                           <a
                      href="/"
                      className="mb-4 inline-block text-sm font-mediumhover:text-primary"
                    >
                      {" "}
                      Asset Management (SAM) {" "}
                   </a>
                  </li>
                    <li>
                           <a
                      href="/"
                      className="mb-4 inline-block text-sm font-medium hover:text-primary"
                    >
                      {" "}
                      Radon Mapping Software {" "}
                   </a>
                  </li>
                </ul>
              </div>
            </div>

   

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                Company
                </h2>
                <ul>
                  <li>
                      <a
                      href="/"
                      className="mb-4 inline-block text-sm font-medium hover:text-primary"
                    >
                      <div>
                      {" "}
                     About Us{" "}
                      </div>
                  </a>
                  </li>
                      <li>
                      <a
                      href="/"
                      className="mb-4 inline-block text-sm font-medium  hover:text-primary"
                    >
                      <div>
                      {" "}
                    Reseller Opportunities{" "}
                      </div>
                  </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-sm font-medium  hover:text-primary"
                    >
                    <div>
                      {" "}
                 Accreditations & Insurances
                      </div>
                  </a>
                  </li>
                       <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-sm font-medium hover:text-primary"
                    >
                      {" "}
                     Site Map{" "}
                     </a>
                  </li>
           
                </ul>
              </div>
            </div>
           
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Support & Help
                </h2>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-sm font-medium  hover:text-primary"
                    >
                      {" "}
                      Open Support Ticket{" "}
                   </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-sm font-medium  hover:text-primary"
                    >
                      {" "}
                     Getting Started Guide{" "}
                     </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-sm font-medium  hover:text-primary"
                    >
                      {" "}
                     Book demo{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
                      <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white ">
                  Resources
                </h2>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-sm font-medium  hover:text-primary"
                    >
                      {" "}
                      Blog{" "}
                     </a>
                  </li>
                  <li>
                     <a
                      href="/"
                      className="mb-4 inline-block text-sm font-medium  hover:text-primary"
                    >
                      {" "}
                      Pricing{" "}
                   </a>
                  </li>
                  
                             <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-sm font-medium  hover:text-primary"
                    >
                      {" "}
                    Product updates{" "}
                    </a>
                  </li>
                  <li>
                           <a
                      href="/"
                      className="mb-4 inline-block text-sm font-medium  hover:text-primary"
                    >
                      {" "}
                      Contact Us{" "}
                   </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

<div className="text-gray-600 body-font border-t-4 border-orange-500 dark:bg-white">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col border-t-1 ">

    <p className="text-sm text-gray-500  sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">      
English
Privacy Policy
Support
       
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-sm">
    Email: <a href="mailto:contact@visionprosoftware.com" className=" ml-1 text-orange-500" rel="noopener noreferrer" target="_blank">contact@visionprosoftware.com</a> © Vision Pro -  <span className="text-orange-500">{date}</span> - All rights reserved
    </span>
  </div>
</div>
        
    
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute left-0 bottom-24 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
