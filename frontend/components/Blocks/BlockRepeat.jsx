"use client"
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { getStrapImageURL } from "@/lib/api";
import { getStrapiMedia } from "lib/media"
import NextImage from "next/image"
import { useState } from "react";

///api/pages/5?populate=*

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

let fallback = "/images/about/about-image.svg"
const baseURL = getStrapImageURL();
const BlockRepeat = ({ blocks , fallBackSrc = fallback.src }) => {
const { title, Content, ContentBlocks, Cover, Seo} = blocks;

const [imageError, setImageError] = useState(false);

const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );
 
return (ContentBlocks?.filter(v => v.blogStrap !== null).map((blogStrap ,index)=>{
 
  let imageData = blogStrap.Image.data
  if (imageData == null || imageData == 'undefined') {
      
          imageData = "/images/about/about-image.svg"

  }else{
    imageData
    
  }



  // const {attributes} = imageData
  
  
    // console.log( strapiImage, "strapiimage")
//  if (strapiImage == null || strapiImage == 'undefined') {
//     //deal with value'
//   strapiImage = "/images/about/about-image.svg"
     
   
// }

  if(index % 2 == 1 ){
   return (
    <>
    
    <section id="about" className="relative pt-[150px] pb-[150px] border-b border-body-color/[.15]  dark:border-white/[.15]">  
    
     <div key={ContentBlocks.id}  className="w-full">
    

      <div className="container">
        <div className=" ">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
       
    
             <SectionTitle
                 titleBadge={blogStrap.badgeText}
                 title={ blogStrap.Title}
                 paragraph={ blogStrap.Content}
                 mb="44px"
               
               />

              <div
                className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                {/* <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Premium quality" />
                    <List text="Tailwind CSS" />
                    <List text="Use for lifetime" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Next.js" />
                    <List text="Rich documentation" />
                    <List text="Developer friendly" />
                  </div>
                </div> */}
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 pr-[60px]">
              <div
                  className="wow fadeInUp relative mx-auto mb-12 aspect-[3/2]  max-w-[620px] h-auto text-center lg:m-0"
                data-wow-delay=".2s"
              >
         { blogStrap.Image.data && 
          <Image src={baseURL + blogStrap.Image.data.attributes.url ?? fallback }
                       alt={blogStrap.Title}
                        fill
                       className="object-cover box1 "
                        onError={() => setImageError(true)}
                   />
           }
                 {/* <Image
                  // src={baseURL + blogStrap.Image.data.attributes.formats.medium.url}
                   src={baseURL + strapiImage.attributes.formats.medium.url }
                  alt={blogStrap.Title}
                  fill
                  className="mx-auto max-w-full lg:mr-0 object-cover h-48 w-96"
                />   */}
              </div>
            </div>
          </div>
        </div>
      </div>
  

        

    </div>
    </section>
    </>
); 
  }
   return (
        <>
<section id="aboutright" className="relative pt-[150px] pb-[150px] border-b border-body-color/[.15]  dark:border-white/[.15]">  
   
 <div key={ContentBlocks.id}  className="w-full">
   <div className="">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
 <span className="absolute top-8 left-0 z-[-1]">
            <svg
              width="287"
              height="254"
              viewBox="0 0 287 254"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
                fill="url(#paint0_linear_111:578)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_111:578"
                  x1="-40.5"
                  y1="117"
                  x2="301.926"
                  y2="-97.1485"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>

            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[3/2]  max-w-[620px] h-auto text-center lg:m-0"
              data-wow-delay=".15s"
            >
          <div class="absolute bottom-0 -left-9 z-[-1]">
                <svg width="134" height="106" viewBox="0 0 134 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1.66667" cy="104" r="1.66667" transform="rotate(-90 1.66667 104)" fill="white"></circle>
                  <circle cx="16.3333" cy="104" r="1.66667" transform="rotate(-90 16.3333 104)" fill="white"></circle>
                  <circle cx="31" cy="104" r="1.66667" transform="rotate(-90 31 104)" fill="white"></circle>
                  <circle cx="45.6667" cy="104" r="1.66667" transform="rotate(-90 45.6667 104)" fill="white"></circle>
                  <circle cx="60.3333" cy="104" r="1.66667" transform="rotate(-90 60.3333 104)" fill="white"></circle>
                  <circle cx="88.6667" cy="104" r="1.66667" transform="rotate(-90 88.6667 104)" fill="white"></circle>
                  <circle cx="117.667" cy="104" r="1.66667" transform="rotate(-90 117.667 104)" fill="white"></circle>
                  <circle cx="74.6667" cy="104" r="1.66667" transform="rotate(-90 74.6667 104)" fill="white"></circle>
                  <circle cx="103" cy="104" r="1.66667" transform="rotate(-90 103 104)" fill="white"></circle>
                  <circle cx="132" cy="104" r="1.66667" transform="rotate(-90 132 104)" fill="white"></circle>
                  <circle cx="1.66667" cy="89.3333" r="1.66667" transform="rotate(-90 1.66667 89.3333)" fill="white"></circle>
                  <circle cx="16.3333" cy="89.3333" r="1.66667" transform="rotate(-90 16.3333 89.3333)" fill="white"></circle>
                  <circle cx="31" cy="89.3333" r="1.66667" transform="rotate(-90 31 89.3333)" fill="white"></circle>
                  <circle cx="45.6667" cy="89.3333" r="1.66667" transform="rotate(-90 45.6667 89.3333)" fill="white"></circle>
                  <circle cx="60.3333" cy="89.3338" r="1.66667" transform="rotate(-90 60.3333 89.3338)" fill="white"></circle>
                  <circle cx="88.6667" cy="89.3338" r="1.66667" transform="rotate(-90 88.6667 89.3338)" fill="white"></circle>
                  <circle cx="117.667" cy="89.3338" r="1.66667" transform="rotate(-90 117.667 89.3338)" fill="white"></circle>
                  <circle cx="74.6667" cy="89.3338" r="1.66667" transform="rotate(-90 74.6667 89.3338)" fill="white"></circle>
                  <circle cx="103" cy="89.3338" r="1.66667" transform="rotate(-90 103 89.3338)" fill="white"></circle>
                  <circle cx="132" cy="89.3338" r="1.66667" transform="rotate(-90 132 89.3338)" fill="white"></circle>
                  <circle cx="1.66667" cy="74.6673" r="1.66667" transform="rotate(-90 1.66667 74.6673)" fill="white"></circle>
                  <circle cx="1.66667" cy="31.0003" r="1.66667" transform="rotate(-90 1.66667 31.0003)" fill="white"></circle>
                  <circle cx="16.3333" cy="74.6668" r="1.66667" transform="rotate(-90 16.3333 74.6668)" fill="white"></circle>
                  <circle cx="16.3333" cy="31.0003" r="1.66667" transform="rotate(-90 16.3333 31.0003)" fill="white"></circle>
                  <circle cx="31" cy="74.6668" r="1.66667" transform="rotate(-90 31 74.6668)" fill="white"></circle>
                  <circle cx="31" cy="31.0003" r="1.66667" transform="rotate(-90 31 31.0003)" fill="white"></circle>
                  <circle cx="45.6667" cy="74.6668" r="1.66667" transform="rotate(-90 45.6667 74.6668)" fill="white"></circle>
                  <circle cx="45.6667" cy="31.0003" r="1.66667" transform="rotate(-90 45.6667 31.0003)" fill="white"></circle>
                  <circle cx="60.3333" cy="74.6668" r="1.66667" transform="rotate(-90 60.3333 74.6668)" fill="white"></circle>
                  <circle cx="60.3333" cy="31.0001" r="1.66667" transform="rotate(-90 60.3333 31.0001)" fill="white"></circle>
                  <circle cx="88.6667" cy="74.6668" r="1.66667" transform="rotate(-90 88.6667 74.6668)" fill="white"></circle>
                  <circle cx="88.6667" cy="31.0001" r="1.66667" transform="rotate(-90 88.6667 31.0001)" fill="white"></circle>
                  <circle cx="117.667" cy="74.6668" r="1.66667" transform="rotate(-90 117.667 74.6668)" fill="white"></circle>
                  <circle cx="117.667" cy="31.0001" r="1.66667" transform="rotate(-90 117.667 31.0001)" fill="white"></circle>
                  <circle cx="74.6667" cy="74.6668" r="1.66667" transform="rotate(-90 74.6667 74.6668)" fill="white"></circle>
                  <circle cx="74.6667" cy="31.0001" r="1.66667" transform="rotate(-90 74.6667 31.0001)" fill="white"></circle>
                  <circle cx="103" cy="74.6668" r="1.66667" transform="rotate(-90 103 74.6668)" fill="white"></circle>
                  <circle cx="103" cy="31.0001" r="1.66667" transform="rotate(-90 103 31.0001)" fill="white"></circle>
                  <circle cx="132" cy="74.6668" r="1.66667" transform="rotate(-90 132 74.6668)" fill="white"></circle>
                  <circle cx="132" cy="31.0001" r="1.66667" transform="rotate(-90 132 31.0001)" fill="white"></circle>
                  <circle cx="1.66667" cy="60.0003" r="1.66667" transform="rotate(-90 1.66667 60.0003)" fill="white"></circle>
                  <circle cx="1.66667" cy="16.3336" r="1.66667" transform="rotate(-90 1.66667 16.3336)" fill="white"></circle>
                  <circle cx="16.3333" cy="60.0003" r="1.66667" transform="rotate(-90 16.3333 60.0003)" fill="white"></circle>
                  <circle cx="16.3333" cy="16.3336" r="1.66667" transform="rotate(-90 16.3333 16.3336)" fill="white"></circle>
                  <circle cx="31" cy="60.0003" r="1.66667" transform="rotate(-90 31 60.0003)" fill="white"></circle>
                  <circle cx="31" cy="16.3336" r="1.66667" transform="rotate(-90 31 16.3336)" fill="white"></circle>
                  <circle cx="45.6667" cy="60.0003" r="1.66667" transform="rotate(-90 45.6667 60.0003)" fill="white"></circle>
                  <circle cx="45.6667" cy="16.3336" r="1.66667" transform="rotate(-90 45.6667 16.3336)" fill="white"></circle>
                  <circle cx="60.3333" cy="60.0003" r="1.66667" transform="rotate(-90 60.3333 60.0003)" fill="white"></circle>
                  <circle cx="60.3333" cy="16.3336" r="1.66667" transform="rotate(-90 60.3333 16.3336)" fill="white"></circle>
                  <circle cx="88.6667" cy="60.0003" r="1.66667" transform="rotate(-90 88.6667 60.0003)" fill="white"></circle>
                  <circle cx="88.6667" cy="16.3336" r="1.66667" transform="rotate(-90 88.6667 16.3336)" fill="white"></circle>
                  <circle cx="117.667" cy="60.0003" r="1.66667" transform="rotate(-90 117.667 60.0003)" fill="white"></circle>
                  <circle cx="117.667" cy="16.3336" r="1.66667" transform="rotate(-90 117.667 16.3336)" fill="white"></circle>
                  <circle cx="74.6667" cy="60.0003" r="1.66667" transform="rotate(-90 74.6667 60.0003)" fill="white"></circle>
                  <circle cx="74.6667" cy="16.3336" r="1.66667" transform="rotate(-90 74.6667 16.3336)" fill="white"></circle>
                  <circle cx="103" cy="60.0003" r="1.66667" transform="rotate(-90 103 60.0003)" fill="white"></circle>
                  <circle cx="103" cy="16.3336" r="1.66667" transform="rotate(-90 103 16.3336)" fill="white"></circle>
                  <circle cx="132" cy="60.0003" r="1.66667" transform="rotate(-90 132 60.0003)" fill="white"></circle>
                  <circle cx="132" cy="16.3336" r="1.66667" transform="rotate(-90 132 16.3336)" fill="white"></circle>
                  <circle cx="1.66667" cy="45.3336" r="1.66667" transform="rotate(-90 1.66667 45.3336)" fill="white"></circle>
                  <circle cx="1.66667" cy="1.66683" r="1.66667" transform="rotate(-90 1.66667 1.66683)" fill="white"></circle>
                  <circle cx="16.3333" cy="45.3336" r="1.66667" transform="rotate(-90 16.3333 45.3336)" fill="white"></circle>
                  <circle cx="16.3333" cy="1.66683" r="1.66667" transform="rotate(-90 16.3333 1.66683)" fill="white"></circle>
                  <circle cx="31" cy="45.3336" r="1.66667" transform="rotate(-90 31 45.3336)" fill="white"></circle>
                  <circle cx="31" cy="1.66683" r="1.66667" transform="rotate(-90 31 1.66683)" fill="white"></circle>
                  <circle cx="45.6667" cy="45.3336" r="1.66667" transform="rotate(-90 45.6667 45.3336)" fill="white"></circle>
                  <circle cx="45.6667" cy="1.66683" r="1.66667" transform="rotate(-90 45.6667 1.66683)" fill="white"></circle>
                  <circle cx="60.3333" cy="45.3338" r="1.66667" transform="rotate(-90 60.3333 45.3338)" fill="white"></circle>
                  <circle cx="60.3333" cy="1.66707" r="1.66667" transform="rotate(-90 60.3333 1.66707)" fill="white"></circle>
                  <circle cx="88.6667" cy="45.3338" r="1.66667" transform="rotate(-90 88.6667 45.3338)" fill="white"></circle>
                  <circle cx="88.6667" cy="1.66707" r="1.66667" transform="rotate(-90 88.6667 1.66707)" fill="white"></circle>
                  <circle cx="117.667" cy="45.3338" r="1.66667" transform="rotate(-90 117.667 45.3338)" fill="white"></circle>
                  <circle cx="117.667" cy="1.66707" r="1.66667" transform="rotate(-90 117.667 1.66707)" fill="white"></circle>
                  <circle cx="74.6667" cy="45.3338" r="1.66667" transform="rotate(-90 74.6667 45.3338)" fill="white"></circle>
                  <circle cx="74.6667" cy="1.66707" r="1.66667" transform="rotate(-90 74.6667 1.66707)" fill="white"></circle>
                  <circle cx="103" cy="45.3338" r="1.66667" transform="rotate(-90 103 45.3338)" fill="white"></circle>
                  <circle cx="103" cy="1.66707" r="1.66667" transform="rotate(-90 103 1.66707)" fill="white"></circle>
                  <circle cx="132" cy="45.3338" r="1.66667" transform="rotate(-90 132 45.3338)" fill="white"></circle>
                  <circle cx="132" cy="1.66707" r="1.66667" transform="rotate(-90 132 1.66707)" fill="white"></circle>
                </svg>
              </div>
<div class="absolute -top-6 -right-6 z-[-1]">
                <svg width="134" height="106" viewBox="0 0 134 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1.66667" cy="104" r="1.66667" transform="rotate(-90 1.66667 104)" fill="white"></circle>
                  <circle cx="16.3333" cy="104" r="1.66667" transform="rotate(-90 16.3333 104)" fill="white"></circle>
                  <circle cx="31" cy="104" r="1.66667" transform="rotate(-90 31 104)" fill="white"></circle>
                  <circle cx="45.6667" cy="104" r="1.66667" transform="rotate(-90 45.6667 104)" fill="white"></circle>
                  <circle cx="60.3333" cy="104" r="1.66667" transform="rotate(-90 60.3333 104)" fill="white"></circle>
                  <circle cx="88.6667" cy="104" r="1.66667" transform="rotate(-90 88.6667 104)" fill="white"></circle>
                  <circle cx="117.667" cy="104" r="1.66667" transform="rotate(-90 117.667 104)" fill="white"></circle>
                  <circle cx="74.6667" cy="104" r="1.66667" transform="rotate(-90 74.6667 104)" fill="white"></circle>
                  <circle cx="103" cy="104" r="1.66667" transform="rotate(-90 103 104)" fill="white"></circle>
                  <circle cx="132" cy="104" r="1.66667" transform="rotate(-90 132 104)" fill="white"></circle>
                  <circle cx="1.66667" cy="89.3333" r="1.66667" transform="rotate(-90 1.66667 89.3333)" fill="white"></circle>
                  <circle cx="16.3333" cy="89.3333" r="1.66667" transform="rotate(-90 16.3333 89.3333)" fill="white"></circle>
                  <circle cx="31" cy="89.3333" r="1.66667" transform="rotate(-90 31 89.3333)" fill="white"></circle>
                  <circle cx="45.6667" cy="89.3333" r="1.66667" transform="rotate(-90 45.6667 89.3333)" fill="white"></circle>
                  <circle cx="60.3333" cy="89.3338" r="1.66667" transform="rotate(-90 60.3333 89.3338)" fill="white"></circle>
                  <circle cx="88.6667" cy="89.3338" r="1.66667" transform="rotate(-90 88.6667 89.3338)" fill="white"></circle>
                  <circle cx="117.667" cy="89.3338" r="1.66667" transform="rotate(-90 117.667 89.3338)" fill="white"></circle>
                  <circle cx="74.6667" cy="89.3338" r="1.66667" transform="rotate(-90 74.6667 89.3338)" fill="white"></circle>
                  <circle cx="103" cy="89.3338" r="1.66667" transform="rotate(-90 103 89.3338)" fill="white"></circle>
                  <circle cx="132" cy="89.3338" r="1.66667" transform="rotate(-90 132 89.3338)" fill="white"></circle>
                  <circle cx="1.66667" cy="74.6673" r="1.66667" transform="rotate(-90 1.66667 74.6673)" fill="white"></circle>
                  <circle cx="1.66667" cy="31.0003" r="1.66667" transform="rotate(-90 1.66667 31.0003)" fill="white"></circle>
                  <circle cx="16.3333" cy="74.6668" r="1.66667" transform="rotate(-90 16.3333 74.6668)" fill="white"></circle>
                  <circle cx="16.3333" cy="31.0003" r="1.66667" transform="rotate(-90 16.3333 31.0003)" fill="white"></circle>
                  <circle cx="31" cy="74.6668" r="1.66667" transform="rotate(-90 31 74.6668)" fill="white"></circle>
                  <circle cx="31" cy="31.0003" r="1.66667" transform="rotate(-90 31 31.0003)" fill="white"></circle>
                  <circle cx="45.6667" cy="74.6668" r="1.66667" transform="rotate(-90 45.6667 74.6668)" fill="white"></circle>
                  <circle cx="45.6667" cy="31.0003" r="1.66667" transform="rotate(-90 45.6667 31.0003)" fill="white"></circle>
                  <circle cx="60.3333" cy="74.6668" r="1.66667" transform="rotate(-90 60.3333 74.6668)" fill="white"></circle>
                  <circle cx="60.3333" cy="31.0001" r="1.66667" transform="rotate(-90 60.3333 31.0001)" fill="white"></circle>
                  <circle cx="88.6667" cy="74.6668" r="1.66667" transform="rotate(-90 88.6667 74.6668)" fill="white"></circle>
                  <circle cx="88.6667" cy="31.0001" r="1.66667" transform="rotate(-90 88.6667 31.0001)" fill="white"></circle>
                  <circle cx="117.667" cy="74.6668" r="1.66667" transform="rotate(-90 117.667 74.6668)" fill="white"></circle>
                  <circle cx="117.667" cy="31.0001" r="1.66667" transform="rotate(-90 117.667 31.0001)" fill="white"></circle>
                  <circle cx="74.6667" cy="74.6668" r="1.66667" transform="rotate(-90 74.6667 74.6668)" fill="white"></circle>
                  <circle cx="74.6667" cy="31.0001" r="1.66667" transform="rotate(-90 74.6667 31.0001)" fill="white"></circle>
                  <circle cx="103" cy="74.6668" r="1.66667" transform="rotate(-90 103 74.6668)" fill="white"></circle>
                  <circle cx="103" cy="31.0001" r="1.66667" transform="rotate(-90 103 31.0001)" fill="white"></circle>
                  <circle cx="132" cy="74.6668" r="1.66667" transform="rotate(-90 132 74.6668)" fill="white"></circle>
                  <circle cx="132" cy="31.0001" r="1.66667" transform="rotate(-90 132 31.0001)" fill="white"></circle>
                  <circle cx="1.66667" cy="60.0003" r="1.66667" transform="rotate(-90 1.66667 60.0003)" fill="white"></circle>
                  <circle cx="1.66667" cy="16.3336" r="1.66667" transform="rotate(-90 1.66667 16.3336)" fill="white"></circle>
                  <circle cx="16.3333" cy="60.0003" r="1.66667" transform="rotate(-90 16.3333 60.0003)" fill="white"></circle>
                  <circle cx="16.3333" cy="16.3336" r="1.66667" transform="rotate(-90 16.3333 16.3336)" fill="white"></circle>
                  <circle cx="31" cy="60.0003" r="1.66667" transform="rotate(-90 31 60.0003)" fill="white"></circle>
                  <circle cx="31" cy="16.3336" r="1.66667" transform="rotate(-90 31 16.3336)" fill="white"></circle>
                  <circle cx="45.6667" cy="60.0003" r="1.66667" transform="rotate(-90 45.6667 60.0003)" fill="white"></circle>
                  <circle cx="45.6667" cy="16.3336" r="1.66667" transform="rotate(-90 45.6667 16.3336)" fill="white"></circle>
                  <circle cx="60.3333" cy="60.0003" r="1.66667" transform="rotate(-90 60.3333 60.0003)" fill="white"></circle>
                  <circle cx="60.3333" cy="16.3336" r="1.66667" transform="rotate(-90 60.3333 16.3336)" fill="white"></circle>
                  <circle cx="88.6667" cy="60.0003" r="1.66667" transform="rotate(-90 88.6667 60.0003)" fill="white"></circle>
                  <circle cx="88.6667" cy="16.3336" r="1.66667" transform="rotate(-90 88.6667 16.3336)" fill="white"></circle>
                  <circle cx="117.667" cy="60.0003" r="1.66667" transform="rotate(-90 117.667 60.0003)" fill="white"></circle>
                  <circle cx="117.667" cy="16.3336" r="1.66667" transform="rotate(-90 117.667 16.3336)" fill="white"></circle>
                  <circle cx="74.6667" cy="60.0003" r="1.66667" transform="rotate(-90 74.6667 60.0003)" fill="white"></circle>
                  <circle cx="74.6667" cy="16.3336" r="1.66667" transform="rotate(-90 74.6667 16.3336)" fill="white"></circle>
                  <circle cx="103" cy="60.0003" r="1.66667" transform="rotate(-90 103 60.0003)" fill="white"></circle>
                  <circle cx="103" cy="16.3336" r="1.66667" transform="rotate(-90 103 16.3336)" fill="white"></circle>
                  <circle cx="132" cy="60.0003" r="1.66667" transform="rotate(-90 132 60.0003)" fill="white"></circle>
                  <circle cx="132" cy="16.3336" r="1.66667" transform="rotate(-90 132 16.3336)" fill="white"></circle>
                  <circle cx="1.66667" cy="45.3336" r="1.66667" transform="rotate(-90 1.66667 45.3336)" fill="white"></circle>
                  <circle cx="1.66667" cy="1.66683" r="1.66667" transform="rotate(-90 1.66667 1.66683)" fill="white"></circle>
                  <circle cx="16.3333" cy="45.3336" r="1.66667" transform="rotate(-90 16.3333 45.3336)" fill="white"></circle>
                  <circle cx="16.3333" cy="1.66683" r="1.66667" transform="rotate(-90 16.3333 1.66683)" fill="white"></circle>
                  <circle cx="31" cy="45.3336" r="1.66667" transform="rotate(-90 31 45.3336)" fill="white"></circle>
                  <circle cx="31" cy="1.66683" r="1.66667" transform="rotate(-90 31 1.66683)" fill="white"></circle>
                  <circle cx="45.6667" cy="45.3336" r="1.66667" transform="rotate(-90 45.6667 45.3336)" fill="white"></circle>
                  <circle cx="45.6667" cy="1.66683" r="1.66667" transform="rotate(-90 45.6667 1.66683)" fill="white"></circle>
                  <circle cx="60.3333" cy="45.3338" r="1.66667" transform="rotate(-90 60.3333 45.3338)" fill="white"></circle>
                  <circle cx="60.3333" cy="1.66707" r="1.66667" transform="rotate(-90 60.3333 1.66707)" fill="white"></circle>
                  <circle cx="88.6667" cy="45.3338" r="1.66667" transform="rotate(-90 88.6667 45.3338)" fill="white"></circle>
                  <circle cx="88.6667" cy="1.66707" r="1.66667" transform="rotate(-90 88.6667 1.66707)" fill="white"></circle>
                  <circle cx="117.667" cy="45.3338" r="1.66667" transform="rotate(-90 117.667 45.3338)" fill="white"></circle>
                  <circle cx="117.667" cy="1.66707" r="1.66667" transform="rotate(-90 117.667 1.66707)" fill="white"></circle>
                  <circle cx="74.6667" cy="45.3338" r="1.66667" transform="rotate(-90 74.6667 45.3338)" fill="white"></circle>
                  <circle cx="74.6667" cy="1.66707" r="1.66667" transform="rotate(-90 74.6667 1.66707)" fill="white"></circle>
                  <circle cx="103" cy="45.3338" r="1.66667" transform="rotate(-90 103 45.3338)" fill="white"></circle>
                  <circle cx="103" cy="1.66707" r="1.66667" transform="rotate(-90 103 1.66707)" fill="white"></circle>
                  <circle cx="132" cy="45.3338" r="1.66667" transform="rotate(-90 132 45.3338)" fill="white"></circle>
                  <circle cx="132" cy="1.66707" r="1.66667" transform="rotate(-90 132 1.66707)" fill="white"></circle>
                </svg>
              </div>
          { blogStrap.Image.data && 
          <Image src={baseURL + blogStrap.Image.data.attributes.url ?? fallback }
                       alt={blogStrap.Title}
                       fill
                       className="object-cover box2 "
                        onError={() => setImageError(true)}
                   />
           }
             {/* <Image
                  src={baseURL + strapiImage}
                  alt={blogStrap.Title}
                  fill
                  className="mx-auto max-w-full lg:mr-0 object-cover h-48 w-96"
                />  */}
            </div>
          </div>
          <div className="w-full lg:w-1/2 pl-[60px]">
            <div className="wow fadeInUp " data-wow-delay=".2s">
          
              <SectionTitle
                titleBadge={blogStrap.badgeText}
                title={ blogStrap.Title}
                 paragraph={ blogStrap.Content}
                 mb="44px"
               />
               {/* //condition ? exprIfTrue : exprIfFalse */}
              {(blogStrap.ButtonUrl ?  (
                
               <a href={blogStrap.ButtonUrl} data-aos="fade-up" data-aos-duration="3000" className="rounded-full border-2 border-orange-500 bg-orange-600 text-white py-4 px-9 text-base font-medium  transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp ">
               Find out more <i className="ml-4 fa-duotone fa-chevron-right"></i>
               
               </a>
              ) : "" )}
            </div>
            </div>
          </div>
        </div>
      </div>
  
      
    </div>
    </section>
    </>
)
}))


//   return (

    
//     <section id="about" className="pt-16 md:pt-20 lg:pt-28">
//              {ContentBlocks?.map((blogStrap) => (
//             <div key={blogStrap.id} className="w-full">

    
// {}
//  <div className="container">
//         <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
//           <div className="-mx-4 flex flex-wrap items-center">
//             <div className="w-full px-4 lg:w-1/2">

            
//               <SectionTitle
//                 title=      { blogStrap.Title}
//                 paragraph={ blogStrap.Content}
//                 mb="44px"
//               />

//               <div
//                 className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
//                 data-wow-delay=".15s"
//               >


//                 {/* <div className="mx-[-12px] flex flex-wrap">
//                   <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
//                     <List text="Premium quality" />
//                     <List text="Tailwind CSS" />
//                     <List text="Use for lifetime" />
//                   </div>

//                   <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
//                     <List text="Next.js" />
//                     <List text="Rich documentation" />
//                     <List text="Developer friendly" />
//                   </div>
//                 </div> */}
//               </div>
//             </div>


//             <div className="w-full px-4 lg:w-1/2">
//               <div
//                 className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
//                 data-wow-delay=".2s"
//               >
//                 <Image
//                   src="/images/about/about-image.svg"
//                   alt="about-image"
//                   fill
//                   className="mx-auto max-w-full lg:mr-0"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
          
//             </div>
//           ))}
     
 
//       {/* <div className="container py-16 md:py-20 lg:py-28">
//         <div className="-mx-4 flex flex-wrap items-center">
//           <div className="w-full px-4 lg:w-1/2">
//             <div
//               className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
//               data-wow-delay=".15s"
//             >
//               <Image
//                 src="/images/about/about-image-2.svg"
//                 alt="about image"
//                 fill
//               />
//             </div>
//           </div>
//           <div className="w-full px-4 lg:w-1/2">
//             <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
//               <div className="mb-9">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                   Bug free code
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                 </p>
//               </div>
//               <div className="mb-9">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                   Premier support
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                   do eiusmod tempor incididunt.
//                 </p>
//               </div>
//               <div className="mb-1">
//                 <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
//                   Next.js
//                 </h3>
//                 <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
//                   Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
//                   consectetur adipiscing elit setim.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </section>
    
//   );
};

export default BlockRepeat;
