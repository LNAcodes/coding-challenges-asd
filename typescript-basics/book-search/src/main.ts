console.log("ready");

const formElement = document.getElementById("search-form") as HTMLFormElement;

const ulElement = document.getElementById("book-list") as HTMLUListElement;

formElement.addEventListener("submit", async (event: SubmitEvent) => {
  event.preventDefault();
  //console.log("book submitted!");

  const formData = new FormData(event.target as HTMLFormElement);

  const searchedBook = formData.get("query");
  console.log(searchedBook);

  const searchUrl = `https://www.dbooks.org/api/search/${searchedBook}`;
  const books = await fetchAllBooks(searchUrl);
  console.log(books);

  books.forEach((book: Book) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${book.title} - ${book.authors}`;
    ulElement.appendChild(listItem);
  });
});

interface Book {
  id: string;
  title: string;
  subtitle: string;
  authors: string;
  image: string;
  url: string;
}

interface SearchResult {
  status: string;
  total: string;
  books: Book[];
}

async function fetchAllBooks(url: string): Promise<Book[]> {
  const response = await fetch(url);
  const data = await response.json();
  return data.books;
}
