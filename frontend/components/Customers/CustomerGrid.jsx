'use client';

import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "../../lib/media"
import { getStrapImageURL } from "@/lib/api";
import Moment from 'moment';
import renderHTML from 'react-render-html';
const CustomerGrid = ({ blogs }) => {
  
  
  const { title, content, image , slug , customer_logo} = blogs;
  const baseURL = getStrapImageURL();




    // console.log(author.data.attributes.picture, "pci")
  // console.log(baseURL + image.data.attributes.formats.medium.url, "im the imag url");
  //  const imageUrl = getStrapiMedia(image.data.attributes.formats.medium.url)
  return (
    <>
    
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-2xl dark:bg-dark h-full flex flex-col"
        data-wow-delay=".1s"
      >
        <div className="relative block h-[220px] w-full">
          <span className="absolute bottom-6 right-4 z-20  inline-flex items-center justify-center rounded-full w-[200px] h-[60px] py-2 px-4 text-sm font-semibold capitalize text-white">
            { customer_logo && <Image src={baseURL + customer_logo.data.attributes.url} alt={title} fill className='object-contain'/> }
          </span>
  
                { image &&  <Image src={baseURL + image.data.attributes.url} alt={title} fill className='object-cover '/>  }
        </div>
       <div className="flex-1 p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <h3>
            <div
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </div>
          </h3>
      
            <div className="ck-content">
                   {renderHTML(content)}
            </div>
                
          
         </div> 
      
      </div>
    </>
  );
};

export default CustomerGrid;
