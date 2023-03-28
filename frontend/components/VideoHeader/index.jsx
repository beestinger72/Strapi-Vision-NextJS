"use client";
import Image from "next/image";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const VideoHeader = () => {
    const [isOpen, setOpen] = useState(false);
  return (
    <>
<section className="relative h-[700px] flex flex-col  text-white py-0 px-3 ">
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden ">
        <video className="min-w-full min-h-full absolute object-cover " src="https://www.auditboard.com/videos/customer-success/lennar.mp4" autoPlay={true} type="video/mp4" muted loop></video>
    </div>
 <div className="container video-content">
    <div className=" max-w-[570px] float-left mt-[230px]">
      
        <h1 className="text-leftfont-light text-5xl">“ real-time version control tracking saves us a whole lot of time and stress.”</h1>
        <h3 className="text-left font-light text-3xl">
          some logo 
        </h3>
    <a id="play-video" className="video-play-button" href="#">
        <span></span>
      </a>
         </div>
      </div>
</section>
      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="vsWfWVJZgOs"
        onClose={() => setOpen(false)}
      />
</>
  );
};

export default VideoHeader ;


