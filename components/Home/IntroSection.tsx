import Image from "next/image";
import Homebg from "../../public/images/homepagebg.png";
import exp from "../../public/images/exploreimages.png";

export default function IntroSection() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        {/* Use the Image component */}
        <Image
          src={Homebg}
          alt="Home Background"
          layout="fill"
          objectFit="cover"
          className="absolute mt-[13vh]"
        />

        <div className="z-10 text-white flex flex-col lg:flex-row w-screen p-6 ">
          <div className="lg:w-3/5 lg:pr-8   pt-12">
            <h1 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black">
              Find your Tribe, <span style={{ color: "#FFA500" }}>Explore</span>
            </h1>
            <p className="text-3xl  text-black  pt-5 lg:w-4/5	">
              Connect to like-minded travelers for shared adventures. Create a
              unique experience or join an experiences created by others.
            </p>
          </div>

          <div className="lg:w-2/5">
            <Image src={exp} alt="Explore Image" />
          </div>
        </div>
      </div>
    </>
  );
}
