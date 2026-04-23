import { formatFilm, getUnwatched } from "./types.js";
const MadeMeCryMovie = {
    id: 555555,
    title: "Okja",
    year: 2017,
    watched: false,
    rating: 4,
};
const delicateImperfectMovie = {
    id: 637352,
    title: "Me and You and Everyone We Know",
    year: 2005,
    watched: true,
    rating: 4,
};
const getHypedMovie = {
    id: 878324,
    title: "Challengers",
    year: 2024,
    watched: false,
    rating: 4,
};
const connectedDenseCityMovie = {
    id: 8264529,
    title: "Fallen Angels",
    year: 1995,
    watched: true,
};
const myWatchList = {
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
//# sourceMappingURL=main.js.map