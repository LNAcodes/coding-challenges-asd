"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describeTrack(track) {
    return `${track.title} by ${track.artist}`;
}
const tracks = [
    { id: 1, title: "Blue Light", artist: "Jorja Smith", liked: true },
    { id: 2, title: "Nights", artist: "Frank Ocean", liked: false },
];
console.log(describeTrack(tracks[0]));
const pick = {
    id: 3,
    title: "Golden",
    artist: "Jill Scott",
    liked: true,
    curatedBy: "editorial",
    addedDate: "2024-01-05",
};
console.log(`${pick.title} — featured since ${pick.addedDate}`);
pick.addedDate = "2025-01-01";
const label = "My Library";
const trackCount = tracks.length;
function formatId(id) {
    return `TRK-${id}`;
}
const ids = tracks.map((t) => formatId(t.id));
console.log(ids, label, trackCount);
//# sourceMappingURL=index.js.map