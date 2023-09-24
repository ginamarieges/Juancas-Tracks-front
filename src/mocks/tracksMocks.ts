import { TrackStructure } from "../store/tracks/types";

export const tracksMock: TrackStructure[] = [
  {
    album: "Abbey Road",
    image:
      "https://static.fnac-static.com/multimedia/Images/ES/NR/5b/ba/12/1227355/1540-1.jpg",
    musicType: "Rock",
    singer: "The Beatles",
    repeat: true,
    notes: "Uno de los álbumes más icónicos de The Beatles.",
    user: "64de57fc213a48254c8734e6",
    songs: [
      "Come Together",
      "Something",
      "Here Comes the Sun",
      "Octopus's Garden",
    ],
    id: "64ff3e13b19f9d15016ec314",
  },
  {
    album: "The Dark Side of the Moon",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61hw9WloObL._AC_SL1500_.jpg",
    musicType: "Rock",
    singer: "Pink Floyd",
    repeat: false,
    notes: "Un clásico del rock progresivo.",
    user: "64de57fc213a48254c8734e6",
    songs: ["Speak to Me", "Breathe", "Time", "Money"],
    id: "64ff3e13b19f9d15016ec314",
  },
];
