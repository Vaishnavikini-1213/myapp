let lostItems = [];
let foundItems = [];

function reportLost() {
  let name = document.getElementById("lostName").value;
  let desc = document.getElementById("lostDesc").value;
  let contact = document.getElementById("lostContact").value;

  if(name && desc && contact) {
    lostItems.push({name, desc, contact});
    displayLost();
    clearInputs("lostName", "lostDesc", "lostContact");
  } else {
    alert("⚠️ Please fill all fields!");
  }
}

function reportFound() {
  let name = document.getElementById("foundName").value;
  let desc = document.getElementById("foundDesc").value;
  let contact = document.getElementById("foundContact").value;

  if(name && desc && contact) {
    foundItems.push({name, desc, contact});
    displayFound();
    clearInputs("foundName", "foundDesc", "foundContact");
  } else {
    alert("⚠️ Please fill all fields!");
  }
}

function clearInputs(...ids) {
  ids.forEach(id => document.getElementById(id).value = "");
}

function displayLost() {
  let list = document.getElementById("lostList");
  list.innerHTML = "";
  lostItems.forEach(item => {
    list.innerHTML += `
      <div class="item lost-item">
        <strong>${item.name}</strong><br>
        ${item.desc}<br>
        <em>📞 Contact: ${item.contact}</em>
      </div>`;
  });
}

function displayFound() {
  let list = document.getElementById("foundList");
  list.innerHTML = "";
  foundItems.forEach(item => {
    list.innerHTML += `
      <div class="item found-item">
        <strong>${item.name}</strong><br>
        ${item.desc}<br>
        <em>📞 Contact: ${item.contact}</em>
      </div>`;
  });
}

/* 🔍 Search Function */
function searchItems() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let allItems = document.querySelectorAll(".item");

  allItems.forEach(item => {
    let text = item.innerText.toLowerCase();
    if(text.includes(input)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

/* 🔽 Filter Function */
function filterItems() {
  let filter = document.getElementById("filterSelect").value;
  let lostCards = document.querySelectorAll(".lost-item");
  let foundCards = document.querySelectorAll(".found-item");

  if(filter === "all") {
    lostCards.forEach(item => item.style.display = "block");
    foundCards.forEach(item => item.style.display = "block");
  } else if(filter === "lost") {
    lostCards.forEach(item => item.style.display = "block");
    foundCards.forEach(item => item.style.display = "none");
  } else if(filter === "found") {
    lostCards.forEach(item => item.style.display = "none");
    foundCards.forEach(item => item.style.display = "block");
  }
}
function scrollToForms() {
  document.querySelector(".container").scrollIntoView({ behavior: "smooth" });
}
