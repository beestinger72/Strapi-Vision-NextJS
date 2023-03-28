import SingleBlog from "@/components/Blog/SingleBlog";
import SingleBlogStrap from "@/components/Blog/SingleBlogStrap";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { StrapiClient } from "@/lib/api";
import NextImage from "../../components/image"
import { getStrapImageURL } from "@/lib/api";
import { getStrapiURL } from "@/lib/api";
import VideoHeader from "@/components/VideoHeader";
import Brands from "@/components/Brands";
import CustomerGrid from "@/components/Customers/CustomerGrid";



const baseURL = getStrapiURL();

async function getCharacters(){
     return await (await fetch(baseURL + "/customers?populate=*")).json()
 
}
export default function Customers()  {
  const allChar = use(getCharacters())
  
  return (
    <>
      <VideoHeader/>
      <Brands/>

  

      <section className="pt-[50px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">


   <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 ">
          {allChar?.data.map((blogStrap) => (
            <div key={blogStrap.id} className="w-full ">
           
              <CustomerGrid  blogs={blogStrap.attributes} />
            </div>
          ))}
        </div>

          </div>

     
        </div>
      </section>
    </>

    
  );
};


