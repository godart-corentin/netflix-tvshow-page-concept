export type Show = {
  name: string;
  slug: string;
  trailer: string;
  logo: string;
  date: string;
  description: string;
  tags: string[];
  seasons: Season[];
  isNetflixShow: boolean;
  ageRating?: number;
};

export type Season = {
  videos: Video[];
};

export type Video = {
  name: string;
  thumbnail: string;
};
