// "use client";
import React from "react";
import Head from "next/head";
import { Metadata } from "next";
import axios from "axios";
import { IGetItinerary } from "@/interfaces/IGetItinerary";

// Fetch experience and itinerary based on dynamic route
const fetchItinerary = async (
  id: string,
  itineraryID: string
): Promise<IGetItinerary> => {
  const res = await axios.get(
    `https://api.dev.yoliday.in/api/itineraries/${itineraryID}?populate[0]=experience&populate[1]=experience.medias`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}`,
      },
    }
  );
  return res.data;
};

// let experience;
// // const imageUrl = `https://media.dev.yoliday.in/${experience.medias[0].uid}`;
// const imageUrl = "";

// // Define the metadata
// const metadata: Metadata = {
//   title: experience.title,
//   openGraph: {
//     title: experience.title,
//     description: experience.description,
//     url: `https://app.yoliday.in/experience/${id}/${itineraryId}`,
//     images: [
//       {
//         url: imageUrl,
//         width: 800,
//         height: 600,
//         alt: "Experience Image",
//       },
//     ],
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: experience.title,
//     description: experience.description,
//     images: [
//       {
//         url: imageUrl,
//       },
//     ],
//   },
// };

// Optional: You may also want to define the metadata separately
export async function generateMetadata({
  params,
}: {
  params: { id: string; itineraryId: string };
}): Promise<Metadata> {
  const { id, itineraryId } = params;
  const itinerary: IGetItinerary = await fetchItinerary(id, itineraryId);
  const experience = itinerary.data.experience;

  return {
    title: experience.title,
    openGraph: {
      title: experience.title,
      description: experience.description,
      url: `https://app.yoliday.in/experience/${id}/${itineraryId}`,
      images: [
        {
          url: experience.medias[0]?.uid
            ? `https://media.dev.yoliday.in/${experience.medias[0].uid}`
            : "",
          width: 800,
          height: 600,
          alt: "Experience Image",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: experience.title,
      description: experience.description,
      images: [
        {
          url: experience.medias[0]?.uid
            ? `https://media.dev.yoliday.in/${experience.medias[0].uid}`
            : "",
        },
      ],
    },
  };
}

const ExperiencePage = async ({
  params,
}: {
  params: { id: string; itineraryId: string };
}) => {
  const { id, itineraryId } = params;
  const itinerary: IGetItinerary = await fetchItinerary(id, itineraryId);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <Head>
        <meta property="og:title" content={itinerary.data.experience.title} />
        <meta
          property="og:description"
          content={itinerary.data.experience.description}
        />
        <meta
          property="og:image"
          content={`https://media.dev.yoliday.in/${itinerary.data.experience.medias[0].uid}`}
        />
        <meta
          property="og:url"
          content={`https://app.yoliday.in/experience/${id}/${itineraryId}`}
        />
        <meta property="og:type" content="website" />
        <meta
          name="twitter:card"
          content={`https://media.dev.yoliday.in/${itinerary.data.experience.medias[0].uid}`}
        />
        <meta name="twitter:title" content={itinerary.data.experience.title} />
        <meta
          name="twitter:description"
          content={itinerary.data.experience.description}
        />
        <meta
          name="twitter:image"
          content={`https://media.dev.yoliday.in/${itinerary.data.experience.medias[0].uid}`}
        />
        <title> Itinerary</title>
      </Head>
      <div>hello</div>
    </main>
  );
};

export default ExperiencePage;
