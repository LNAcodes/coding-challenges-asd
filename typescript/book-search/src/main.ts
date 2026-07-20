console.log("ready");
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

const helloButton = document.getElementById("helloBtn") as HTMLButtonElement;
const outputParagraph = document.getElementById(
  "output",
) as HTMLParagraphElement;

helloButton.addEventListener("click", () => {
  outputParagraph.textContent = "Hello from TypeScript!";
});

const formElement = document.getElementById("search-form") as HTMLFormElement;

const ulElement = document.getElementById("book-list") as HTMLUListElement;

formElement.addEventListener("submit", async (event: SubmitEvent) => {
  event.preventDefault();
  console.log("book submitted!");

  const formData = new FormData(event.target as HTMLFormElement);

  const searchedBook = formData.get("query");
  console.log(searchedBook);

  const searchUrl = `https://www.dbooks.org/api/search/${searchedBook}`;
  const books = await fetchAllBooks(searchUrl);
  // console.log(books);

  books.forEach((book: Book) => {
    const listItem = document.createElement("li");
    /*listItem.textContent = `${book.title} - ${book.authors}`;*/
    const link = document.createElement("a");
    link.textContent = book.title;
    link.href = book.url;

    listItem.appendChild(link);
    ulElement.appendChild(listItem);
  });
});

const nameInput = document.getElementById("nameInput") as HTMLInputElement;

const submitButton = document.getElementById(
  "submitButton",
) as HTMLButtonElement;

const displayName = document.getElementById(
  "displayName",
) as HTMLParagraphElement;

submitButton.addEventListener("click", () => {
  displayName.textContent = nameInput.value;
});

const toggleButton = document.getElementById(
  "toggleButton",
) as HTMLButtonElement;

const hiddenText = document.getElementById(
  "hiddenText",
) as HTMLParagraphElement;

toggleButton.addEventListener("click", () => {
  if (hiddenText.style.display === "none") {
    hiddenText.style.display = "block";
  } else {
    hiddenText.style.display = "none";
  }
});

const itemInput = document.getElementById("itemInput") as HTMLInputElement;

const addButton = document.getElementById("addButton") as HTMLButtonElement;

const itemList = document.getElementById("itemList") as HTMLUListElement;

addButton.addEventListener("click", () => {
  const listItem = document.createElement("li");
  listItem.textContent = itemInput.value;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    listItem.remove();
  });

  listItem.appendChild(deleteButton);
  itemList.appendChild(listItem);
});

const decreaseButton = document.getElementById(
  "decreaseButton",
) as HTMLButtonElement;

const counterSpan = document.getElementById("counter") as HTMLSpanElement;

const increaseButton = document.getElementById(
  "increaseButton",
) as HTMLButtonElement;

let currentCount = 0;

decreaseButton.addEventListener("click", () => {
  currentCount--;
  counterSpan.textContent = `${currentCount}`;
});

increaseButton.addEventListener("click", () => {
  currentCount++;
  counterSpan.textContent = `${currentCount}`;
});

const colorSelect = document.getElementById("colorSelect") as HTMLSelectElement;

const colorBox = document.getElementById("colorBox") as HTMLDivElement;

colorSelect.addEventListener("change", () => {
  colorBox.style.backgroundColor = colorSelect.value;
});

async function fetchAllBooks(url: string): Promise<Book[]> {
  const response = await fetch(url);
  const data = await response.json();
  return data.books;
}

const textInput = document.getElementById("textInput") as HTMLTextAreaElement;

const charCount = document.getElementById("charCount") as HTMLParagraphElement;

textInput.addEventListener("input", () => {
  charCount.textContent = `${textInput.value.length} characters`;
});
