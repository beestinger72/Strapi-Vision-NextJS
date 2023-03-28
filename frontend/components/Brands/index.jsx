import Image from "next/image";

const brandsData = [
  {
    id: 1,
    name: "whsmith",
    href: "https://whsmith.com",
    image: "/images/brands/WHSmith_logo.svg",
  },
  {
    id: 2,
    name: "Sky",
    href: "https://www.sky.com",
    image: "/images/brands/sky.svg",
  },
  {
    id: 3,
    name: "British-Steel",
    href: "https://british-steel.com",
    image: "/images/brands/british-steel.svg",
  },
  {
    id: 4,
    name: "UK Atomic Energy Authority",
    href: "https://UKAEA.com",
    image: "/images/brands/UK_Atomic_Energy_Authority.svg",
  },
  {
    id: 5,
    name: "m-four",
    href: "https://www.m-four.org",
    image: "/images/brands/m-four.svg",
  },
   {
    id: 6,
    name: "New Look",
    href: "https://newlook.com",
    image: "/images/brands/new-look.svg",
  },
     {
    id: 7,
    name: "Faithful Gould",
    href: "https://www.fgould.com",
    image: "/images/brands/Faithful_Gould_logo.svg",
  },
       {
    id: 8,
    name: "Faithful Gould",
    href: "https://www.nu.com",
    image: "/images/brands/Logo_Nottingham_Trent_University.svg",
  },
        {
    id: 9,
    name: "Faithful Gould",
    href: "https://www.cranfield-university.com",
    image: "/images/brands/cranfield-university.svg",
  },
  
];

const Brands = () => {
  return (
    <section className="">
      <div className="container-fluid m-0 p-0">
        <div className="flex flex-wrap">
          <div className="w-full">

            <div
            
              className=" flex flex-wrap items-center justify-center bg-dark py-8 px-8 dark:bg-primary dark:bg-opacity-5 sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
              data-wow-delay=".1s
              "
            >
            
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-2 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[100px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-20 w-full filter-white transition hover:opacity-40 hover:grayscale-0 dark:opacity-90 dark:hover:opacity-80"
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};
