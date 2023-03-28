import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import SectionTitleWide from "../Common/SectionTitleWide";
import { use } from "react";
import { getStrapiURL } from "@/lib/api";

const baseURL = getStrapiURL();

const Features2 = ( { feat }) => {


const { title, Content,ContentBlocks, Features, Cover, Seo} = feat;

 console.log(Features , "Features") 
  return (
    <>

      <section
        id="featurer"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-18 pt-[100px]"
      >
      
        <div className="container">
    
          <SectionTitleWide title="Connect your team accross muiltple areas of compliance."
            paragraph="separate the signal from the noise and focus on the improvements that matter."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 ">
              {Features?.map((feature) => (
              <div key={feature.id} className="w-full">
            <SingleFeature feature={feature} />
            </div>
             
            ))}   
          </div>
        </div>
      </section>
    </>
  );
};

export default Features2;
