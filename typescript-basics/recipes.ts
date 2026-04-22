/*
Create a single TypeScript file called recipes.ts. Using only what you have learned so far — type annotations, type aliases, and function signatures — implement the following:

A type alias Ingredient with a name (string) and amountGrams (number)
A type alias Recipe with a name, servings (number), vegetarian (boolean), and ingredients (an array of Ingredient)
Two variables annotated as Recipe, each holding a realistic recipe with at least two ingredients

*/

type Ingredient = {
  name: string;
  amountGrams: number;
};

type Recipe = {
  name: string;
  servings: number;
  vegetarian: boolean;
  ingredients: Ingredient[];
};

const yummyDessert: Recipe = {
  name: "Chocolate Avocado Mousse",
  servings: 2,
  vegetarian: true,
  ingredients: [
    { name: "dark chocolate", amountGrams: 250 },
    { name: "avocado", amountGrams: 200 },
  ],
};

const happyTummyLunch: Recipe = {
  name: "Shredded tofu peanut ramen",
  servings: 2,
  vegetarian: true,
  ingredients: [
    { name: "extra-firm tofu", amountGrams: 200 },
    { name: "ramen noodles", amountGrams: 125 },
  ],
};
/*
A function summarize(recipe: Recipe): string that returns a readable single-line description of the recipe
A call to summarize for each recipe, logged to the console
*/
function summarize(recipe: Recipe): string {
  return `${recipe.name}, ${recipe.servings} servings, ${recipe.vegetarian ? "vegetarian" : "not vegetarian"}`;
}

console.log(summarize(yummyDessert));
console.log(summarize(happyTummyLunch));
