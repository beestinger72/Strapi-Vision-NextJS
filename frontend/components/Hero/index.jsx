import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] md:pt-[150px] md:pb-[0px] xl:pt-[180px] xl:pb-[0px] 2xl:pt-[210px] 2xl:pb-[0px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="30"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                className=" mx-auto max-w-[800px] text-center"
              >
         
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
             <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500 "> Compliance Software solutions</div> that protect your organisation.
                </h1>
                
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-sm md:text-sm">
                Deliver a complete, integrated Compliance lifecycle. It gives your internal audit team <br></br>everything they need to provide assurance.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <Link
                    href="/"
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                   Try our Demo
                  </Link>
                  <Link
                    href="/"
                    className="rounded-md bg-black/20 py-4 px-8 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                  >
                    Video Tour
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
 
           
        <div className="absolute top-9 right-0 z-[-1] opacity-30 lg:opacity-100">
    
             {/* <div style={{ background: "/images/hero/shape-02.svg"}} className="bg-[length:200px_100px] no-repeat bg-no-repeat" ></div> */}
             <div className="absolute top-5 right-0 z-[-1]">
              <svg width="238" height="531" viewBox="0 0 238 531" fill="none" xmlns="http://www.w3.org/2000/svg"><rect opacity="0.3" x="422.819" y="-70.8145" width="196" height="541.607" rx="2" transform="rotate(51.2997 422.819 -70.8145)" fill="url(#paint0_linear_83:2)"></rect><rect opacity="0.3" x="426.568" y="144.886" width="59.7544" height="541.607" rx="2" transform="rotate(51.2997 426.568 144.886)" fill="url(#paint1_linear_83:2)"></rect><defs><linearGradient id="paint0_linear_83:2" x1="517.152" y1="-251.373" x2="517.152" y2="459.865" gradientUnits="userSpaceOnUse"><stop stopColor="#4A6CF7"></stop><stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop></linearGradient><linearGradient id="paint1_linear_83:2" x1="455.327" y1="-35.673" x2="455.327" y2="675.565" gradientUnits="userSpaceOnUse"><stop stopColor="#4A6CF7"></stop><stop offset="1" stopColor="#4A6CF7" stopOpacity="0"></stop></linearGradient></defs></svg>
              
             </div>
           </div>
        <div className="absolute top-0 left-0 z-[-1] opacity-30 lg:opacity-100">
               <Image
                  src="/images/hero/shape-01.svg"
                  alt="about-image"
                  height={400}
                  width={900}
                  className="bg-no-repeat"
                /> 
  
        </div>
                    <div className="pt-6 mt-3 flex flex-wrap flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mx-auto max-h-[480px]">
                      <Image
                  src="/images/hero/Audit-software.JPG"
                  alt="about-image"
                  height={470}
                  width={900}
                  className="relative z-[-1] overflow-hidden rounded drop-shadow-2xl"
                />
                </div>       
      </section>

    </>
  );
};

export default Hero;
