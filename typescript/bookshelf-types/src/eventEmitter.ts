import type { Book, EntityId } from "../types/book";

/* Create a generic EventEmitter<Events> class where Events is a Record mapping event names to their payload types:

Implement two methods:

on<K extends keyof Events>(event: K, handler: (payload: Events[K]) => void): void
emit<K extends keyof Events>(event: K, payload: Events[K]): void
The compiler should enforce that emit("bookAdded", payload) only accepts a Book as the payload, and that on("searchPerformed", handler) passes { query: string; resultCount: number } to the handler function.*/

class EventEmitter<Events extends Record<string, any>>
on<K extends keyof Events>(event: K, handler: (payload: Events[K]) => void): void

// In einfach:
// - event: welches Ereignis willst du hören? z.B. "bookAdded"
// - handler: was soll passieren wenn es passiert? z.B. (book) => console.log(book)
// - K extends keyof Events: event darf nur ein gültiger Event-Name sein
// - Events[K]: der Payload hat den Typ der zu diesem Event gehört

emit<K extends keyof Events>(event: K, payload: Events[K]): void

// In einfach:
// - event: welches Ereignis ist passiert? z.B. "bookAdded"
// - payload: was sind die Daten dazu? z.B. ein Book-Objekt
// - K extends keyof Events: event darf nur ein gültiger Event-Name sein
// - Events[K]: payload muss den Typ haben der zu diesem Event gehört

type BookEvents = {
  bookAdded: Book;
  bookRemoved: { id: EntityId };
  searchPerformed: { query: string; resultCount: number };
};

const emitter = new EventEmitter<BookEvents>();
