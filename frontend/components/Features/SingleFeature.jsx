const SingleFeature = ({ feature }) => {
  const { icon, title, paragraph } = feature;

  console.log(paragraph, "im the paragraph");
  return (


  
    <div className="w-full rounded-xl overflow-hidden shadow-lg text-center bg-white p-10 dark:bg-opacity-20">
      <div className="wow fadeInUp" data-wow-delay=".15s">
      <div class="w-20 h-20 inline-flex items-center justify-center rounded-md bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
  <i class={`${icon} fa-duotone icon-theme-blue fa-2x`}></i>
      </div>
        
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
