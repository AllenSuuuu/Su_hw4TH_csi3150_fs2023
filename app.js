document.getElementById("filter-button").addEventListener("click", function () {
  // Set default values for filters
  let minYearFilter = 0;
  let maxYearFilter = Infinity;
  let makeFilter = "";
  let maxMileageFilter = Infinity;
  let minPriceFilter = 0;
  let maxPriceFilter = Infinity;
  let colorFilter = "";

  // Get user's input
  const minYearInput = document.getElementById("minYear").value;
  const maxYearInput = document.getElementById("maxYear").value;
  makeFilter = document.getElementById("make-filter").value;
  const maxMileageInput = document.getElementById("maxMileage").value;
  const minPriceInput = document.getElementById("minPrice").value;
  const maxPriceInput = document.getElementById("maxPrice").value;
  colorFilter = document.getElementById("color-filter").value;

  // Update filter values based on user input
  if (minYearInput) {
    minYearFilter = minYearInput;
  }
  if (maxYearInput) {
    maxYearFilter = maxYearInput;
  }
  if (maxMileageInput) {
    maxMileageFilter = maxMileageInput;
  }
  if (minPriceInput) {
    minPriceFilter = minPriceInput;
  }
  if (maxPriceInput) {
    maxPriceFilter = maxPriceInput;
  }

  // Filter the car cards
  const carCards = document.querySelectorAll(".car-card");

  // Use forEach to loop through the cars
  carCards.forEach((card) => {
    const year = parseInt(card.getAttribute("data-year"));
    const make = card.getAttribute("data-make");
    const mileage = parseInt(card.getAttribute("data-mileage"));
    const price = parseInt(card.getAttribute("data-price"));
    const color = card.getAttribute("data-color");

    // Use logical and to write the logic
    if (
      year >= minYearFilter &&
      year <= maxYearFilter &&
      (!makeFilter || make.toLowerCase() === makeFilter.toLowerCase()) &&
      mileage <= maxMileageFilter &&
      price >= minPriceFilter &&
      price <= maxPriceFilter &&
      (!colorFilter || color.toLowerCase() === colorFilter.toLowerCase())
    ) {
      // If one of the criteria matches, display in blocks
      card.style.display = "block";
    } else {
      // Otherwirse hide them
      card.style.display = "none";
    }
  });
});
