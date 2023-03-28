// import { getStrapiURL } from "@/lib/api";
// import { use } from "react";
// import { getGlobalVars } from "@/lib/seo";
// export default function Head() {


//   const baseURL = getStrapiURL();


//  async function getGlobalVars(){
//       return await (await fetch(baseURL + "/global?populate=*")).json()
 
//  }
//   const allChar = use(getGlobalVars())
//   console.log(allChar, "imhere")




//   return (
//     <>
//       <title>{allChar.data.attributes.defaultSeo.metaTitle}</title>
//       <meta content="width=device-width, initial-scale=1" name="viewport" />
//       <meta name="description" content="Generated by create next app" />
//       <link rel="icon" href="/images/favicon.ico" />
   
//     </>
//   );
// }
// app/head.js
import { NextSeo } from 'next-seo';

import { NEXT_SEO_DEFAULT } from '@/next-seo-config'; // your path will vary

export default async function Head() {
  return <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={true} />;
}