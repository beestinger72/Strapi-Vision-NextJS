import AboutSectionOne from "@/components/Blocks/BlockRepeat";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { NextSeo } from 'next-seo';
import { getStrapiURL } from "@/lib/api";
import renderHTML from 'react-render-html';
import { NEXT_SEO_DEFAULT } from '@/next-seo-config'; // seo inbound
import { use } from "react";
import BlockRepeat from "@/components/Blocks/BlockRepeat";

// API Data Page Call jk
const baseURL = getStrapiURL();
async function getSeoData(){
     return (await fetch(baseURL + "/pages/5?populate=*")).json()
}
async function getPageData(){
    //return await (await fetch(baseURL + "/pages/5?populate=*")).json()
//return full components data
return await (await fetch(baseURL + "/pages/5?populate[ContentBlocks][populate]=*")).json()
   
}
const seoupdate = await getSeoData();

  //console.log(seoupdate.data.attributes.Seo.metaTitle)

  const updateMeta = {
    ...NEXT_SEO_DEFAULT,
     title: `${seoupdate.data.attributes.Seo.metaTitle}`,
     description: `${seoupdate.data.attributes.Seo.metaDescription}`,
  };
  
  
const AboutPage = () => {
const pagedata = use(getPageData());
const contentdata = use(getSeoData());
  return (
    <>
    
      <NextSeo {...updateMeta} useAppDir={true} /> 
      <div className="container">
        <h2 className="mb-4 mt-3 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {renderHTML(contentdata.data.attributes.Title)}
        </h2>

      <div className="ck-content ">
              {renderHTML(contentdata.data.attributes.Content)}
      </div> 
    </div>
 

      

{/* <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div> */}

 
    </>
    
  );

};

export default AboutPage;
