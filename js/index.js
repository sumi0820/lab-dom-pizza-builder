// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 },
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll(".pep").forEach((onePep) => {
    console.log(state.pepperoni);
    if (state.pepperoni) {
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  const mushroomsBtn = document.querySelector(".btn-mushrooms");

  document.querySelectorAll(".mushroom").forEach((oneMash) => {
    console.log(state.mushrooms);
    if (state.mushrooms) {
      oneMash.style.visibility = "visible";
    } else {
      oneMash.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`

  document.querySelectorAll(".green-pepper").forEach((oneGreenPepper) => {
    console.log(state.greenPeppers);

    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = "visible";
    } else {
      oneGreenPepper.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(".sauce").forEach((oneSauce) => {
    console.log(state.whiteSauce);

    if (state.whiteSauce) {
      oneSauce.style.visibility = "visible";
    } else {
      oneSauce.style.visibility = "hidden";
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll(".crust").forEach((oneCrust) => {
    console.log(state.glutenFreeCrust);

    if (state.glutenFreeCrust) {
      oneCrust.style.visibility = "visible";
    } else {
      oneCrust.style.visibility = "hidden";
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const activeClasses = document.querySelectorAll(".active");
  activeClasses.forEach((elem) => {
    elem.classList.remove("active");
  });
  console.log(activeClasses);
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let total = 10;
  let totalHtml = document.querySelector("strong");

  if (state.pepperoni) {
    total = total + 1;
  }
  if (state.mushrooms) {
    total = total + 1;
  }
  if (state.greenPeppers) {
    total = total + 1;
  }
  if (state.whiteSauce) {
    total = total + 3;
  }
  if (state.glutenFreeCrust) {
    total = total + 5;
  }

  console.log(total, totalHtml.innerHTML);

  totalHtml.innerHTML = `<span>$${total}</span>`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
  state.pepperoni = !state.pepperoni;

  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector(".btn.btn-green-peppers")
  .addEventListener("click", () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
