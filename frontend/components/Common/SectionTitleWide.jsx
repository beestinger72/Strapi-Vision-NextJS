const SectionTitleWide = ({
  titleBadge,
  title,
  paragraph,
  videobutton,
  videobuttonurl,
  width = "900px",
  center,
  mb = "100px",
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
       data-aos="fade-up"
                data-aos-delay="5"
                data-aos-easing="ease-in"
                data-aos-once="true"
        style={{ maxWidth: width, marginBottom: mb }}
      >
      {/* <div className="p-2 px-4 bg-indigo-100 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex mb-4 aos-init aos-animate"> */}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500 font-semibold text-xl border-b-2 border-blue-100 "> {titleBadge}</span>
        {/* </div> */}
        <h2 className="mb-4 mt-3 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
    
      </div>
    </>
  );
};

export default SectionTitleWide;
