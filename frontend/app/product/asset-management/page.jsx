import AboutSectionOne from "@/components/Blocks/BlockRepeat";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { NextSeo } from 'next-seo';
import { getStrapiURL } from "@/lib/api";

import { NEXT_SEO_DEFAULT } from '@/next-seo-config'; // seo inbound
import { use } from "react";
import BlockRepeat from "@/components/Blocks/BlockRepeat";
import LeftBlock from "@/components/Blocks/LeftBlock";
import InfoBlock from "@/components/Blocks/InfoBlock";
import Brands from "@/components/Brands";
import RightBlock from "@/components/Blocks/RightBlock";
import Features from "@/components/Features";
import Cover from "@/components/Cover";

// API Data Page Call jk
const baseURL = getStrapiURL();
async function getSeoData(){
     return (await fetch(baseURL + "/pages/11?populate=*")).json()
}
async function getPageData(){
return await (await fetch(baseURL + "/pages/11?populate[ContentBlocks][populate]=*")).json()
   
}
async function getData(){
return await (await fetch(baseURL + "/pages/11?populate[PageLeft][populate]=*")).json()
   
}
async function getRightBlock(){
return await (await fetch(baseURL + "/pages/11?populate[PageRight][populate]=*")).json()
   
}
async function getfeaturesData(){
return await (await fetch(baseURL + "/pages/11?populate[Features][populate]=*")).json()
   
}
const seoupdate = await getSeoData();

  //console.log(seoupdate.data.attributes.Seo.metaTitle)

  const updateMeta = {
    ...NEXT_SEO_DEFAULT,
     title: `${seoupdate.data.attributes.Seo.metaTitle}`,
     description: `${seoupdate.data.attributes.Seo.metaDescription}`,
  };
  
  
const VisionPage = () => {
const contentblocks = use(getPageData());
const featuresdata = use(getfeaturesData());
const pagedata = use(getSeoData());
  return (
    <>
    
      <NextSeo {...updateMeta} useAppDir={true} />   
      <Cover
      pageBadgeIcon="fa-duotone fa-circle-check"
        pageBadge=""
        pageBadgeText="Secure"
        pageName="Risk Compliance, Assets and Audits."
        description="Manage the risks related to your organization's IT functions." 
      data={pagedata.data.attributes}/>
      {/* <Breadcrumb
        pageBadgeIcon="fa-duotone fa-circle-check"
        pageBadge=""
        pageBadgeText="Secure"
        pageName="Risk Compliance, Assets and Audits."
        description="Manage the risks related to your organization's IT functions."
    
      /> */}
      <InfoBlock/>  
   
      

 
      <BlockRepeat blocks={contentblocks.data.attributes} />
       <Brands/>
     <Features feat={featuresdata.data.attributes} />
     
       

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

export default VisionPage;
