Model a film watchlist in TypeScript. The requirements are:

A Watchable base interface with a readonly id, a title, and a year
A Film interface extending Watchable with watched: boolean and an optional rating between 1 and 5
A Playlist interface with a name and an array of films
A function formatFilm(film: Film): string that returns a one-line description — include the rating only if one is set
A function getUnwatched(playlist: Playlist): Film[] that returns only films where watched is false
Organise the code across two files: one that defines and exports the interfaces and functions, one that imports them and runs the program. The entry point should define a playlist with at least three films and log the output of both functions.

Use import type where appropriate. Set up a tsconfig.json with strict mode enabled.
