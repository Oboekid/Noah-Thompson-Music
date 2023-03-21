function searchFunction() {
  // Declare variables
  var input, filter, grid, items, item, i;
  input = document.getElementById("worksSearch");
  filter = input.value.toUpperCase();
  grid = document.getElementById("worksGrid");
  items = grid.getElementsByClassName("grid-item");

  // Loop through all grid items, and hide those that don't match the search query
  for (i = 0; i < items.length; i++) {
    item = items[i];
    if (item.getAttribute("data-title").toUpperCase().indexOf(filter) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  }
}
