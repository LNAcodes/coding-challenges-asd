export function formatFilm(film) {
    return `${film.title}, ${film.year} , ${film.watched ? "watched" : "unwatched"}, ${film.rating ? film.rating : ""}`;
}
export function getUnwatched(playlist) {
    return playlist.films.filter((film) => film.watched === false);
}
//# sourceMappingURL=types.js.map