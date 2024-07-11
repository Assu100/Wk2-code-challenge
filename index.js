document.addEventListener("DOMContentLoaded", function () {
  const itemInput = document.getElementById("addItems");
  const addItemBtn = document.getElementById("addItemBtn");
  const markPurchasedBtn = document.getElementById("markPurchasedBtn");
  const clearListBtn = document.getElementById("clearListBtn");
  const itemList = document.getElementById("container");

  // Array to store items
  let items = [];

  // Function to render items in the list
  function renderItems() {
    // Clear current list
    itemList.innerHTML = "";

    // Render each item in the array
    items.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = item.name;
      if (item.purchased) {
        li.classList.add("purchased");
      }
      // Toggle purchased status on click
      li.addEventListener("click", () => {
        item.purchased = !item.purchased;
        renderItems();
      });

      itemList.appendChild(li);
    });
  }

  // Add item to the list
  addItemBtn.addEventListener("click", () => {
    const itemName = itemInput.value.trim();
    if (itemName !== "") {
      items.push({ name: itemName, purchased: false });
      itemInput.value = "";
      renderItems();
    }
  });

  // Mark all items as purchased
  markPurchasedBtn.addEventListener("click", () => {
    items.forEach((item) => {
      item.purchased = true;
    });
    renderItems();
  });

  // Clear the list
  clearListBtn.addEventListener("click", () => {
    items = [];
    renderItems();
  });
});
// Edit list
const edit = document.createElement("button");
edit.textContent = "edit";
edit.addEventListener("click", () => {
  const newDescription = prompt("Edit item:", item.description);
});
item.appendChild(edit);
