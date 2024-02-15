"use client";
import phone from "../../public/images/phone.svg";
import Image from "next/image";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import c1 from "../../public/images/Booking.svg";
import c2 from "../../public/images/Sharing.svg";
import c3 from "../../public/images/Traveller.png";
import c4 from "../../public/images/Wagon.png";
import c5 from "../../public/images/Hiking.png";
import c6 from "../../public/images/Plane.png";
import { Inter, Josefin_Sans, Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "600", "800"], // Example with multiple weights
  style: "normal",
  subsets: ["latin"],
});
const josefinSans = Josefin_Sans({
  subsets: ["latin"], // Adjust as needed
});
const inter = Inter({
  subsets: ["latin"],
});
export default function Features() {
  const data = [
    {
      imageUrl: c1,
      heading: "Share Your Experience with all",
      paragraph:
        "Sharing is caring. So, jump in and share your crazy travel experiences with the world.",
    },
    {
      imageUrl: c2,
      heading: "Discover and Join Experiences",
      paragraph:
        "Your next adventure awaits you. Let's get set go & make the best memories!",
    },
    {
      imageUrl: c3,
      heading: "Connect with Like-Minded Travelers",
      paragraph:
        "Join forces with like-minded adventurers and unlock a world of shared experiences1",
    },
    {
      imageUrl: c4,
      heading: "Easy Experience Sharing",
      paragraph:
        "It's as easy as a bee, hop in and read some of the finest trip tips and tricks.",
    },
    {
      imageUrl: c5,
      heading: "Join Yoliday-Curated Experiences",
      paragraph:
        "Ditch the boring itinerary and join in unique travel experiences.",
    },
    {
      imageUrl: c6,
      heading: "Event Notifications for you",
      paragraph:
        "Miss on nothing with our customized event notifications for you.",
    },
  ];
  return (
    <>
      <div className="text-center flex flex-col items-center justify-center w-4/5  p-5 lg:p-20 mx-auto">
        <div className={poppins.className}>
          <h2 className="text-xl lg:text-3xl 2xl:text-3xl font-extrabold tracking-widest text-orange-500 mb-4 font-poppins">
            KEY FEATURES
          </h2>
        </div>
        <div className={josefinSans.className}>
          <h1 className="text-2xl 2xl:text-4xl  lg:text-4xl font-bold tracking-wide text-black mb-4">
            DISCOVER, SHARE, AND JOURNEY TOGETHER IN THE ULTIMATE TRAVEL
            COMMUNITY
          </h1>
        </div>
        <h3 className="text-xl lg:text-2xl xl:w-3/5 mx-auto font-normal  text-slate-500 mb-2">
          Ladies and Gentlemen! Fasten your seatbelt because as we embark on a
          new trip with Yoliday.
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row md:flex-row w-screen items-center">
        <div className="lg:pl-12 xl:w-1/3 md:w-2/5">
          <Image
            src={phone}
            alt="Home Background"
            className="lg:pl-10 xl:w-[70vh]"
          />
        </div>
        <Carousel
          className="md-3/5 sm:w-1/2 xl:w-2/3 max-w-full "
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="xl:p-20">
            {data.map((item, index) => (
              <CarouselItem
                key={index}
                className=" md:basis-2/3 xl:basis-2/5 align-middle my-auto py-3 card rounded-3xl transition duration-300 transform hover:shadow-[0_50px_70px_-15px_rgba(0,0,0,0.2)]"
              >
                <Card
                  className="xl:h-[75vh] rounded-3xl align-middle my-auto"
                  style={{ border: "none" }}
                >
                  <CardContent className="rounded-3xl grid justify-items-center align-middle my-auto text-center px-9">
                    <Image
                      src={item.imageUrl}
                      alt={`Item ${index + 1}`}
                      className="2xl:w-32 xl:w-21 2xl:my-12 xl:my-6 object-cover"
                    />
                    <div className={inter.className}>
                      <h3 className="	  my-4 xl:my-2 text-xl xl:text-2xl 2xl:text-4xl font-extrabold m-3 font-poppins">
                        {item.heading}
                      </h3>
                    </div>
                    <p className="text-gray-600 my-5">{item.paragraph}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
