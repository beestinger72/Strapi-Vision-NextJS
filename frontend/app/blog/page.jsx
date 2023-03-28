
import SingleBlogStrap from "@/components/Blog/SingleBlogStrap";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { use } from "react";
import { getStrapiURL } from "@/lib/api";

const baseURL = getStrapiURL();

async function getCharacters(){
     return await (await fetch(baseURL + "/articles/?populate[0]=image&populate[3]=category&populate[2]=author.picture")).json()
 
}

export default function Blog()  {
  const allChar = use(getCharacters())
  
  return (
    <>
      <Breadcrumb
        pageName="Learn How Vision Pro Helps "
        description="How we Impact & Automate All Businesses Types in the complicance sector  "
      />


     {


     }

      <section className="pt-[50px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">

  {/* {allChar?.data.map(strapiart =>
   <ul key={strapiart.id}>
      <li>{strapiart.attributes.title}</li>


   </ul>
  
  
  )} */}
  
    {/* {allChar?.data.map(strapiart =>(
              <div
                key={strapiart.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                  {strapiart.attributes.title}
                  {strapiart.attributes.description}
                  {/* {strapiart.attributes.image.data.attributes.formats.thumbnail.url} */}
               {/* {console.log(baseURL + strapiart.attributes.image.data.attributes.formats.medium.url)}
                     <div className="relative block h-[220px] w-full">
       
          <Image
              src={baseURL + strapiart.attributes.image.data.attributes.formats.medium.url}
              quality={70}
              alt={`Cover image for ${strapiart.attributes.title}`}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={`${strapiart.attributes.image.data.attributes.formats.medium.url}?auto=format,compress&q=1&blur=500&w=2`}
              priority
/>
        </div>
     
              </div>
            ))} */} 
       {/* {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))} */}
   {/* <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div> */}

   <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {allChar?.data.map((posts) => (
            <div key={posts.id} className="w-full">
              <SingleBlogStrap blogs={posts.attributes} />
            </div>
          ))}
        </div>

          </div>

          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <a className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                    ...
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>

    
  );
};


