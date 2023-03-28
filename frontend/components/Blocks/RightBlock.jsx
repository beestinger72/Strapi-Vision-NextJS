
"use client"
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { getStrapImageURL } from "@/lib/api";
import { getStrapiMedia } from "lib/media"
import NextImage from "next/image"
import { useState } from "react";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);
let fallback = "/images/about/about-image.svg"
 const baseURL = getStrapImageURL();
  


const RightBlock = ({ block , fallBackSrc = fallback.src }) => {

  const { PageRight } = block;

  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );
 let imageData = PageRight.ImageBlock.data

if (imageData == null || imageData == 'undefined') {
    
        imageData = "/images/about/about-image.svg"
        
   

}else{

  imageData
  

    
}
return (


    <>
    
    <section className="rightblock relative pt-[100px] pb-[150px] ">  
    
     <div key={PageRight.id}  className="w-full">
    
   <div className="container">
        <div className=" ">
          <div className="-mx-4 flex flex-wrap items-center">
          
            <div className="w-full px-4 lg:w-1/2 pr-[60px]">
              <div
                  className="wow fadeInUp relative mx-auto mb-12 aspect-[3/2]  max-w-[620px] h-auto text-center lg:m-0"
                data-wow-delay=".2s"
              >
          <Image src={baseURL + imageData.attributes.url ?? fallback }
                       alt=""
                       fill
                       className="absolute sm:w-3/6 sm:mt-0 h-screen -mt-48 top-6 object-cover object-left-top inset-y-0 right-0 "
                        onError={() => setImageError(true)}
                   /> 
                 {/* <Image
                  // src={baseURL + blogStrap.Image.data.attributes.formats.medium.url}
                   src={baseURL + strapiImage.attributes.formats.medium.url }
                  alt={blogStrap.Title}
                  fill
                  className="mx-auto max-w-full lg:mr-0 object-cover h-48 w-96"
                />   */}
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
          <div className="max-w-[570px]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500 font-semibold text-xl border-b-2 border-blue-100 "> {PageRight.TitleBadge}</span>
               <h2 className="mb-4 mt-3 text-3xl font-bold !leading-tight  sm:text-4xl md:text-[45px]">
              { PageRight.Title}
              </h2>
              <p className="text-base !leading-relaxed text-body-color md:text-lg">
                { PageRight.Content}
              </p>
            </div>
           
            </div>

          </div>
        </div>
      </div>
     
  

        

    </div>
    </section>
    </>

)

}
export default RightBlock;

// const RightBlock = () => {
//   return (
//     // <section className="py-16 md:py-20 lg:py-28">
//     //   <div className="container">
//     //     <div className="-mx-4 flex flex-wrap items-center">
//     //       <div className="w-full px-4 lg:w-1/2">
//     //         <div
//     //           className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
//     //           data-wow-delay=".15s"
//     //         >
//     //           <Image
//     //             src="/images/about/about-image-2.svg"
//     //             alt="about image"
//     //             fill
//     //           />
//     //         </div>
//     //       </div>
//     //       <div className="w-full px-4 lg:w-1/2">
//     //         <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
//     //           <div className="mb-9">
//     //             <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//     //               Bug free code
//     //             </h3>
//     //             <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//     //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//     //               do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//     //             </p>
//     //           </div>
//     //           <div className="mb-9">
//     //             <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//     //               Premier support
//     //             </h3>
//     //             <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//     //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//     //               do eiusmod tempor incididunt.
//     //             </p>
//     //           </div>
//     //           <div className="mb-1">
//     //             <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//     //               Next.js
//     //             </h3>
//     //             <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//     //               Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
//     //               consectetur adipiscing elit setim.
//     //             </p>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </section>
//   );
// };

// export default RightBlock;
