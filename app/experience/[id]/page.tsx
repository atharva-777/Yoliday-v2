import React from "react";
import Head from "next/head";
import axios from "axios";
import { Metadata } from "next";

export const metadata: Metadata = {
  openGraph: {
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export interface IGetExperience {
  data: Data;
  meta: Meta;
}

export interface Data {
  id: number;
  title: string;
  minAge: number;
  maxAge: number;
  isByYoliday: boolean;
  description: string;
  duration: number;
  start_location: string;
  state: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  creator: string;
  rating: any;
  drop_location: string;
  itineraries: Itinerary[];
  medias: Media[];
}

export interface Itinerary {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  budget: number;
  groupId: any;
  groupName: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  availableSlots: number;
  crewSize: number;
  cancellationPolicy: string;
  state: string;
  minCrewSize: number;
  inclusion_and_exclusion: string;
  changeLog: string;
}

export interface Media {
  id: number;
  uid: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Meta {}

const fetchExperience = async (id: string): Promise<IGetExperience> => {
  const res = await axios.get(
    `https://api.dev.yoliday.in/api/experiences/${id}?populate[0]=itineraries&populate[1]=medias`,
    {
      headers: {
        Authorization: `Bearer cae546c9f9c6393e0679e1ca7c3e3e8875ac2d73df65c41cca1a42dad9a486b85b285eec091458cfd9971c50495ebe182d4cae497577cad6159f454279e3daf730e36a41dc5819facefcd8204e90f93c75de2f177c8f128434e3b971c020d728596b7d09dcca7f367a1d860ee577e2e3e3209896b8d2c15b172da7d1d8a7dd3a`,
      },
    }
  );
  console.log(res.data);
  return res.data;
};

const Page = async ({ params }: { params: { id: string } }) => {
  const experience: IGetExperience = await fetchExperience(params.id);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <Head>
        {/* Open Graph Metadata */}
        <meta property="og:title" content={experience.data.title} />
        <meta property="og:description" content={experience.data.description} />
        <meta
          property="og:image"
          content="https://yourwebsite.com/preview-image.jpg"
        />
        <meta
          property="og:url"
          content={`https://yourwebsite.com/experience/${experience.data.id}`}
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={experience.data.title} />
        <meta
          name="twitter:description"
          content={experience.data.description}
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/preview-image.jpg"
        />

        <title>{experience.data.title} | Yoliday</title>
      </Head>

      {/* Experience Details Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {experience.data.title}
        </h1>

        <p className="text-gray-700 mb-6">{experience.data.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Experience Meta Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Details</h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>
                <strong>Creator:</strong> {experience.data.creator}
              </li>
              <li>
                <strong>State:</strong> {experience.data.state}
              </li>
              <li>
                <strong>Duration:</strong> {experience.data.duration} hours
              </li>
              <li>
                <strong>Age Group:</strong> {experience.data.minAge} -{" "}
                {experience.data.maxAge} years
              </li>
              <li>
                <strong>Start Location:</strong>{" "}
                {experience.data.start_location}
              </li>
              <li>
                <strong>Drop Location:</strong> {experience.data.drop_location}
              </li>
            </ul>
          </div>

          {/* Additional Meta */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Additional Info
            </h2>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>
                <strong>Published:</strong>{" "}
                {new Date(experience.data.publishedAt).toLocaleDateString()}
              </li>
              <li>
                <strong>Created:</strong>{" "}
                {new Date(experience.data.createdAt).toLocaleDateString()}
              </li>
              <li>
                <strong>Updated:</strong>{" "}
                {new Date(experience.data.updatedAt).toLocaleDateString()}
              </li>
              <li>
                <strong>By Yoliday:</strong>{" "}
                {experience.data.isByYoliday ? "Yes" : "No"}
              </li>
            </ul>
          </div>
        </div>

        {/* Rating Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Rating</h2>
          <div className="mt-2 text-yellow-500">
            {experience.data.rating ? (
              Array.from({ length: experience.data.rating }).map((_, idx) => (
                <span key={idx}>&#9733;</span>
              ))
            ) : (
              <span>No ratings available</span>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
