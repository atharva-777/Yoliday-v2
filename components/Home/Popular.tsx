"use client";
import Autoplay from "embla-carousel-autoplay";

import p1 from "../../public/images/Places1.png";
import p2 from "../../public/images/Places2.png";
import p3 from "../../public/images/Places3.png";
import p4 from "../../public/images/Places4.png";
import p5 from "../../public/images/Places5.png";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Image from "next/image";
import groupimg from "../../public/images/group.svg";
import explore from "../../public/images/exploret.png";
import hills from "../../public/images/mountainbg.svg";
import phone2 from "../../public/images/phone2.png";
import Play from "../../public/images/googleplay.png";
import { Inter, Josefin_Sans, Poppins } from "next/font/google";
import s1 from "../../public/images/Set-0.png";

import s2 from "../../public/images/Set-1.png";
import s3 from "../../public/images/Set-2.png";
const josefinSans = Josefin_Sans({
  subsets: ["latin"], // Adjust as needed
});
const inter = Inter({
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["300", "400", "600", "800"], // Example with multiple weights
  style: "normal",
  subsets: ["latin"],
});

export default function Popular() {
  const data = [p1, p2, p3, p4, p5];

  return (
    <>
      <div className="text-center flex flex-col items-center justify-center  mx-auto">
        <div className={poppins.className}>
          <h2 className="text-xl lg:text-3xl 2xl:text-3xl font-extrabold tracking-widest text-orange-500 mb-4 font-poppins">
            POPULAR EXPERIENCES
          </h2>
        </div>
        <div className={josefinSans.className}></div>
        <h1 className="text-2xl 2xl:text-4xl  lg:text-4xl lg:px-10 font-bold tracking-wide text-black mb-4">
          EMBARK ON THRILLING HORIZONS WITH ADVENTURES!
        </h1>
      </div>

      <h3 className="text-xl text-center xl:text-2xl xl:w-3/5 mx-auto font-normal  text-slate-500 mb-2">
        Explore, Connect, and Embark on Adventures Together with Yoliday
      </h3>
      <div>
        <div className="flex-row justify-center items-center text-center ">
          <Carousel
            opts={{
              align: "start",
            }}
            className="p-10"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              {data.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basics-1/2 sm:basis-1/3  md:basis-1/3  xl:basis-1/5 "
                >
                  <Card
                    className="card transition duration-300 transform hover:drop-shadow-2xl"
                    style={{ border: "none" }}
                  >
                    <CardContent
                      className="flex justify-center h-[30vh] xl:h-[50vh] md:h-[30vh]   pt-[10vh] pb-[10vh] "
                      style={{
                        backgroundImage: `url(${item.src})`,
                        backgroundSize: "contain", // Use 'cover' to ensure the image covers the entire container
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center", // Center the background image both horizontally and vertically
                      }}
                    ></CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <button className="mx-auto hidden xl:block m-5 bg-orange-500 text-white py-4 px-6 rounded-md">
            Explore More
          </button>
          <div className="text-center flex flex-col items-center justify-center md:p-20 mx-auto w-4/5 md:w-3/5">
            <div className={poppins.className}>
              <h2 className="text-xl lg:text-3xl 2xl:text-3xl font-extrabold tracking-widest text-orange-500 mb-4 font-poppins">
                HOW IT WORKS
              </h2>
            </div>
            <div className={josefinSans.className}>
              <h1 className="text-2xl 2xl:text-4xl  lg:text-4xl font-bold tracking-wide text-black mb-4">
                YOLIDAY: WHERE YOUR JOURNEY FINDS ITS TRIBE
              </h1>
            </div>

            <h3 className="text-xl lg:text-2xl  mx-auto font-normal  text-slate-500 mb-2">
              Explore, Connect, and Embark on Adventures Together with Yoliday
            </h3>
          </div>

          <div className=" flex w-screen justify-center p-10">
            <div className="hidden xl:block w-4/5">
              <Image src={explore} alt="Explore" className=" w-full h-auto" />
            </div>
            <div className="flex flex-wrap xl:hidden">
              <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0 p-5">
                <Image src={s1} alt="Set 0" className="w-50" />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 mb-4 md:mb-0  p-5">
                <Image src={s2} alt="Set 1" className="w-50" />
              </div>
              <div className="w-full flex justify-center lg:w-1/3  p-5">
                <Image src={s3} alt="Set 2" className="w-50" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFF3F2] flex flex-col-reverse xl:flex-row  w-screen lg:p-12 items-center ">
          <div className="xl:w-1/2 sm:s-full">
            <Image
              src={groupimg}
              className="p-12 w-full"
              alt="Home Background"
            />
            <button className="xl:hidden block bg-orange-500 text-white py-4 px-6 rounded-md mx-auto my-5">
              Explore More
            </button>
          </div>
          <div className=" xl:w-1/2   xl:p-20 p-10  text-center xl:text-left">
            <div className={poppins.className}>
              <h2 className="my-10 text-2xl xl:text-3xl font-extrabold tracking-widest text-orange-500 mb-2 font-poppins">
                JOIN YOLIDAY EXPERIENCES
              </h2>
            </div>
            <div className={josefinSans.className}>
              <h1 className="!leading-10 xl:my-5 text-2xl xl:text-4xl  font-bold tracking-wider flex flex-col  text-slate-600 xl:mb-2">
                WHERE MEMORIES BLOOM
              </h1>{" "}
              <h1 className="!leading-10 xl:my-5 text-2xl xl:text-4xl  font-bold tracking-wider flex flex-col  text-slate-600 xl:mb-2">
                LED BY YOUR TRIBE
              </h1>
              <h3 className="text-xl xl:text-2xl font-light text-black mb-2 my-7">
                Yoliday curates adventures crafted by fellow explorers, not
                travel bots. These ‘people’ know every hidden gem, every winding
                street, and every must-try dish – and they&apos;re ready to
                share their insider knowledge with you. With Yoliday
                Experiences, you&apos;re not just ticking destinations off a
                list – you&apos;re diving into authentic experiences, building
                friendships..{" "}
              </h3>
              <button className="hidden xl:block bg-orange-500 text-white py-4 px-6 rounded-md">
                Explore More
              </button>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col lg:flex-row md:flex-row  w-screen relative xl:min-h-[100vh] md:min-h-[50vh]"
          style={{
            backgroundImage: `url(${hills.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <div className="lg:w-1/3 md:w-1/3 w-screen flex justify-center items-center">
            <Image
              src={phone2}
              className="pt-10 lg:pl-[20vh] xl:w-[70vh] lg:w-[25vh] md:pl-[2vh] absolute bottom-0 "
              alt="Home Background"
            />
          </div>
          <div className="mb-[70vh] sm:mb-0 lg:w-2/3 md:w-2/3 p-10 lg:pt-[15vh] ">
            <div className={poppins.className}>
              <h1 className="text-[24px] xl:text-4xl 2xl:text-5xl font-semibold tracking-wide text-white mb-5">
                Embark on unforgettable Journey with Yoliday Experiences.
              </h1>
            </div>
            <h3 className="text-lg xl:text-xl 2xl:text-2xl font-light text-white mb-2  p-2">
              Escape the ordinary with hidden waterfalls, late-night bar crawls
              turned karaoke stardom, and glacier conquests fueled by
              high-fives. Say goodbye to FOMO, and hello to Yoliday! Download
              the app - your next adventure awaits!
            </h3>
            <Image src={Play} alt="google play" className="my-5" />
            <form className="my-5">
              <div className="relative flex items-stretch lg:w-3/4 ">
                <label htmlFor="email" className="sr-only">
                  Enter Your Mail
                </label>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="orange"
                  className="xl:w-[7vh] w-[4vh]  absolute mt-4  ml-5 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>

                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full pl-[9vh] lg:pl-[15vh] px-4 py-1 xl:h-[12vh] h-[7vh] rounded-full border border-gray-300  focus:outline-none focus:border-blue-500"
                  placeholder="Enter Your Mail"
                />
                <button className="bg-orange-500 text-white px-5 py-2 m-2 2xl:m-3 absolute right-0 top-0 bottom-0 flex items-center rounded-full	">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
