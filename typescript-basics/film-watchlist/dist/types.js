function formatFilm(film) {
    return `${film.title}, ${film.year} , $ watched {film.watched}, ${film.rating ? film.rating : ""}`;
}
console.log(formatFilm);
export {};
//# sourceMappingURL=types.js.map