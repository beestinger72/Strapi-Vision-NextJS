"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Head from "next/head"
import { createContext } from "react"
import Seo from "@/components/Seo/Seo";
import "node_modules/react-modal-video/css/modal-video.css";
import { NextSeo } from 'next-seo';
import "../styles/fontawesome.min.css";
import "../styles/duotone.min.css";
import "../styles/custom-icons.min.css";
import "../styles/index.css";
// Store Strapi Global object in context

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export const GlobalContext = createContext({})

const RootLayout =  ({ children }) => {
  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded', 
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate'
    });
  }, [])

  return (
        <>
   <html suppressHydrationWarning lang="en">
          <head>
        {/* Used to be added by default, now we need to add manually */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css"/>
        
        
      </head>
          <body className="bg-white text-black dark:bg-black dark:text-white">
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
               {/* <script
            async
            src="https://kit.fontawesome.com/f838063332.js"
            crossOrigin="anonymous"
          ></script> */}
 

      </body>
      
    </html>
    </>
  );



}
export default RootLayout

import { Providers } from "./providers";


