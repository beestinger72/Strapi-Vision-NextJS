import Image from "next/image";

const InfoBlock = () => {
  return (
<section className="text-gray-600 body-font border-b-[1px] border-gray-200 border-opacity-80 dark:border-opacity-10">
  <div className="container  mx-auto mb-11  ">
    {/* <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div> */}
    
    <div className="flex flex-wrap">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 text-center">

        <i className="fa-duotone fa-group-arrows-rotate text-4xl mb-3 icon-theme-blue  rounded bg-opacity-50 text-white border-1 p-2" ></i>
      
    
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-3 font-semibold dark:text-white">Centralize Management</h2>
        <p className="leading-relaxed text-base mb-4 text-body-color">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <a className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-40 text-center">
      <i className="fa-duotone fa-timeline-arrow text-4xl mb-3 icon-theme-blue  rounded bg-opacity-50 text-white border-1 p-2"></i>
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-3 font-semibold dark:text-white">Increase Efficiency</h2>
        <p className="leading-relaxed text-base mb-4 text-body-color">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <a className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-40 text-center">
      <i className="fa-duotone fa-users-viewfinder text-4xl mb-3  icon-theme-blue  rounded bg-opacity-50 text-white border-1 p-2"></i>
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-3 font-semibold dark:text-white">Empower Collaboration</h2>
        <p className="leading-relaxed text-base text-body-color mb-4 ">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <a className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-40 text-center">
      <i class="fa-duotone fa-rabbit-running text-4xl mb-3 icon-theme-blue  rounded bg-opacity-50 text-white border-1 p-2"></i>
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-3 font-semibold dark:text-white">Deliver faster</h2>
        <p className="leading-relaxed text-base mb-4 text-body-color">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <a className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>

  </div>

</section>
  );
};

export default InfoBlock;
