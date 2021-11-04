import { Show } from "../types/Show";

export const shows: Show[] = [
  {
    name: "The Witcher",
    slug: "the-witcher",
    date: "2019 - Now",
    description:
      "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    logo: "the-witcher-logo.png",
    trailer:
      "https://res.cloudinary.com/avatarsmern/video/upload/v1635899658/Netflix%20Concept/Shows/the-witcher-trailer.mp4",
    tags: ["TV Shows Based on Books", "Fantasy", "Drama", "Action"],
    seasons: [
      {
        videos: [
          {
            name: "The End's Beginning",
            thumbnail: "thumbnail-episode-1.jpg",
          },
          {
            name: "Four Marks",
            thumbnail: "thumbnail-episode-2.jpg",
          },
          {
            name: "Betrayer Moon",
            thumbnail: "thumbnail-episode-3.jpg",
          },
          {
            name: "Of Banquets, Bastards and Burials",
            thumbnail: "thumbnail-episode-4.jpg",
          },
          {
            name: "Bottled Appetites",
            thumbnail: "thumbnail-episode-5.jpg",
          },
          {
            name: "Rare Species",
            thumbnail: "thumbnail-episode-6.jpg",
          },
          {
            name: "Before a Fall",
            thumbnail: "thumbnail-episode-7.jpg",
          },
          {
            name: "Much More",
            thumbnail: "thumbnail-episode-8.jpg",
          },
        ],
      },
    ],
    isNetflixShow: true,
    ageRating: 16,
  },
];
