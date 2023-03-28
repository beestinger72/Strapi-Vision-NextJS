'use client';

import { useRouter } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import { getStrapiMedia } from "../../lib/media"
import { getStrapImageURL } from "@/lib/api";
import Moment from 'moment';

const SingleBlogStrap = ({ blogs }) => {
  
  
  const { title, image, paragraph,description, author, tags, createdAt , slug , category, picture} = blogs;
  const baseURL = getStrapImageURL();

  const avatar = author.data.attributes.picture;
  


    // console.log(author.data.attributes.picture, "pci")
  // console.log(baseURL + image.data.attributes.formats.medium.url, "im the imag url");
  //  const imageUrl = getStrapiMedia(image.data.attributes.formats.medium.url)
  return (
    <>
    
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-2xl dark:bg-dark h-full flex flex-col"
        data-wow-delay=".1s"
      >
        <Link href={`/blog/posts/${slug}`} target="_blank" rel="noopener noreferrer" className="relative block h-[220px] w-full">
          <span className="absolute bottom-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white">
             {category.data.attributes.name} 
            
          </span>
    {/* {imageurl} */}
          <Image src={baseURL + image.data.attributes.formats.medium.url} alt={title} fill className='object-cover'/>
        </Link>
       <div className="flex-1 p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <h3>
            <Link
              href={`/blog/posts/${slug}` }
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className=" text-base font-medium text-body-color dark:border-white dark:border-opacity-10 ">
            {description}
          </p>
         </div> 
        <div className="px-8 pb-8 pt-4 border-t border-body-color border-opacity-10">
        
          <div className="flex items-center bottom-0">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  
            
             
                <Image src={baseURL + avatar.data.attributes.url}  alt="author" fill />
        
        
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {author.data.attributes.name}
                </h4>
                <p className="text-xs text-body-color">{author.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date: <span className=" text-body-color"> {Moment(createdAt).format('DD/MM/YYYY')}</span>
              </h4>
             
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default SingleBlogStrap;
