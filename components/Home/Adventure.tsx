import Image from "next/image";
import c1 from "../../public/images/video.png";
import { Inter, Josefin_Sans, Poppins } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"], // Adjust as needed
});
export default function Adventure() {
  return (
    <div className={josefinSans.className}>
      <div className="text-center  flex flex-col items-center justify-center md:p-10 p-3 mx-auto">
        <h1 className="text-2xl xl:w-4/5 xl:text-3xl 2xl:text-4xl   font-bold tracking-wide text-[#191825] mb-4">
          YOLIDAY ADVENTURES UNVEILED: A JOURNEY THROUGH SHARED EXPERIENCES
        </h1>
        <Image src={c1} className="lg:pl-10 w-screen" alt="Home Background" />
      </div>
    </div>
  );
}
