
"use client"
import Image from "next/image";
import { useState } from "react";
import { getStrapImageURL } from "@/lib/api";
import ModalVideo from "react-modal-video";


const Cover = ({  data }) => {

let fallback = "/images/about/about-image.svg"
const baseURL = getStrapImageURL();


  
  const { Cover, Hero} = data;
    let imageData = Cover
    const [isOpen, setOpen] = useState(false);

  return (


    
    <>
     <ModalVideo
        channel="youtube"
        youtube={{
              autoplay: 1,
              mute: 1
            }}

        start={true}
        isOpen={isOpen}
       
        videoId={Hero.videoId ? Hero.videoId : "vsWfWVJZgOs"}
        onClose={() => setOpen(false)}
      />

      <section className="border-b-[1px] border-gray-200 border-opacity-25 relative z-10 overflow-hidden pt-28 lg:pt-[350px] lg:pb-[150px] h-4/5  bg-gradient-to-l from-sky-200 via-sky-50 dark:bg-indigo-900 dark:underlay dark:bg-opacity-20 dark:bg-gradient-to-b  dark:from-indigo-900  dark:via-indigo-900">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-6/12">

              <div className="mb-8 max-w-[600px] md:mb-0 lg:mb-12"   
              >
             <div className="p-2  leading-none flex lg:inline-flex mb-4" role="alert" 
               >
                <span className="flex  uppercase px-2 py-1 text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500 font-semibold text-xl border-b-2 border-blue-100  "><i className={"text-orange-500 fa-duotone " + Hero.pageBadgeIcon}></i>  {Hero.pageBadgeTex}</span>
                
                {/* <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg> */}
              </div>
                <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[50px]"
                >
                  {Hero.title}
                </h2>
                <p className="text-base font-medium leading-relaxed  ">
                    {Hero.description}
                </p>
          
             
              </div>
              <a href="/contact" className="rounded-full border-2 border-orange-500 bg-orange-600 text-white py-4 px-9 text-base font-medium  transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp ">
               Schedule Demo <i className="ml-4 fa-duotone fa-chevron-right"></i>
               
               </a>
              {(Hero.videobutton == true ?  (
                
               <a onClick={() => setOpen(true)} data-aos="fade-up"  data-aos-easing="ease-in-out"
                data-aos-once="false" className="cursor-pointer ml-3 rounded-full border-2 border-slate-400 py-4 px-9 text-base font-medium  transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp ">
               Watch video <i className="ml-4 fa-duotone fa-chevron-right"></i>
               
               </a>
              ) : "" )}
            </div>
      
          </div>
        </div>

              <div className="absolute sm:w-3/6 sm:mt-0 -mt-48 top-[190px]  object-left-top inset-y-0 right-[-50px]" >
           { imageData && (  <Image src={baseURL + imageData.data.attributes.url  }
                       className={Hero.DropShadow == true ? "shadow-3xl" : ""}
                        width={1000}
                        height={800}
                        alt="vpro software"
                       style={{objectFit:"contain"}}
                        onError={() => setImageError(true)}
                   />   )}
        <div>
        </div>
        
        {/* top stripes */}
  
        </div>      <div className="absolute top-0 -left-24 z-[-1]">
        <svg width="1440" height="886" viewBox="0 0 1440 886" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z" fill="url(#paint0_linear)"></path>
          <defs>
            <linearGradient id="paint0_linear" x1="1308.65" y1="1142.58" x2="602.827" y2="-418.681" gradientUnits="userSpaceOnUse">
              <stop stop-color="#3056D3" stop-opacity="0.36"></stop>
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0"></stop>
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      </section>
    </>
  );
};



export default Cover;
