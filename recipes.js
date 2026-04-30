function findRecipes() {
  const input = document.getElementById("ingredientsInput").value.toLowerCase();
  const results = document.getElementById("results");

  if (!input) {
    results.innerHTML = "<p>Please enter some ingredients.</p>";
    return;
  }

  const recipes = [
    {
      name: "Scrambled Eggs",
      ingredients: ["eggs", "butter"],
      desc: "Simple and warm."
    },
    {
      name: "Grilled Cheese",
      ingredients: ["bread", "cheese", "butter"],
      desc: "Comfort classic."
    },
    {
      name: "Pancakes",
      ingredients: ["flour", "milk", "eggs"],
      desc: "Soft and cozy."
    }
  ];

  const userIngredients = input.split(",").map(i => i.trim());

  const matches = recipes.filter(recipe =>
    recipe.ingredients.some(i => userIngredients.includes(i))
  );

  if (matches.length === 0) {
    results.innerHTML = "<p>No matches, but maybe tea? 🍵</p>";
    return;
  }

  results.innerHTML = matches.map(r => `
    <div class="recipe-card">
      <h3>${r.name}</h3>
      <p>${r.desc}</p>
    </div>
  `).join("");
}