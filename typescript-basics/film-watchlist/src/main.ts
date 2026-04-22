import { formatFilm, getUnwatched } from "./types.js";
import type { Watchable, Film, Playlist } from "./types.js";

const MadeMeCryMovie: Film = {
  id: 555555,
  title: "Okja",
  year: 2017,
  watched: false,
  rating: 4,
};

const delicateImperfectMovie: Film = {
  id: 637352,
  title: "Me and You and Everyone We Know",
  year: 2005,
  watched: true,
  rating: 4,
};

const getHypedMovie: Film = {
  id: 878324,
  title: "Challengers",
  year: 2024,
  watched: false,
  rating: 4,
};

const connectedDenseCityMovie: Film = {
  id: 8264529,
  title: "Fallen Angels",
  year: 1995,
  watched: true,
};

const myWatchList: Playlist = {
  name: "My Watchlist",
  films: [
    MadeMeCryMovie,
    delicateImperfectMovie,
    getHypedMovie,
    connectedDenseCityMovie,
  ],
};

console.log(formatFilm(MadeMeCryMovie));
console.log(formatFilm(delicateImperfectMovie));
console.log(formatFilm(getHypedMovie));
console.log(formatFilm(connectedDenseCityMovie));
console.log(getUnwatched(myWatchList));
