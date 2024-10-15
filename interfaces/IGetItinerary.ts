export interface IGetItinerary {
  data: Data;
  meta: Meta;
}

export interface Data {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  budget: number;
  groupId: string;
  groupName: string;
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
  experience: Experience;
}

export interface Experience {
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
  drop_location: any;
  medias: Media[];
}

export interface Media {
  id: number;
  uid: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Meta {}
