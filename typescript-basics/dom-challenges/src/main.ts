// Challenge 1: Update Text on Button
const helloButton = document.getElementById("helloBtn") as HTMLButtonElement;
const outputParagraph = document.getElementById(
  "output",
) as HTMLParagraphElement;

helloButton.addEventListener("click", () => {
  outputParagraph.textContent = "Hello from TypeScript!";
});

// Challenge 2: Input and Display
const nameInput = document.getElementById("nameInput") as HTMLInputElement;
const submitButton = document.getElementById("submitBtn") as HTMLButtonElement;

const displayName = document.getElementById(
  "displayName",
) as HTMLParagraphElement;

submitButton.addEventListener("click", () => {
  displayName.textContent = nameInput.value;
});

// Challenge 3: Toggle Visibility

const toggleButton = document.getElementById("toggleBtn") as HTMLButtonElement;

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

// Challenge 4+5: Add + Delete Items to List
const itemInput = document.getElementById("itemInput") as HTMLInputElement;
const addButton = document.getElementById("addBtn") as HTMLButtonElement;
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

  //console.log("click:", listItem);
});

// Challenge 6: Counter with Increment and Decrement
const decreaseButton = document.getElementById(
  "decreaseBtn",
) as HTMLButtonElement;

const counterSpan = document.getElementById("counter") as HTMLSpanElement;

let currentCount = 0;

const increaseButton = document.getElementById(
  "increaseBtn",
) as HTMLButtonElement;

decreaseButton.addEventListener("click", () => {
  currentCount--;
  counterSpan.textContent = `${currentCount}`;
});

increaseButton.addEventListener("click", () => {
  currentCount++;
  counterSpan.textContent = `${currentCount}`;
});

// Challenge 8: Character Count

const textInput = document.getElementById("textInput") as HTMLInputElement;

const charCount = document.getElementById("charCount") as HTMLParagraphElement;

textInput.addEventListener("input", () => {
  charCount.textContent = `${textInput.value.length} characters`;
});

// Challenge 7: Change Background Color

const colorSelect = document.getElementById("colorSelect") as HTMLSelectElement;

const colorBox = document.getElementById("colorBox") as HTMLDivElement;

colorSelect.addEventListener("change", () => {
  colorBox.style.backgroundColor = colorSelect.value;
});
