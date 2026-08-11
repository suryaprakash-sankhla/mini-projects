const addNote = document.querySelector("#add-note");
const formContainer = document.querySelector(".form-container");
const overlay = document.querySelector(".overlay");
// form
const form = document.querySelector("form");

// text inputs
const imageInput = document.querySelector(
  'input[placeholder="https://example.com/photo.jpg"]'
);

const nameInput = document.querySelector(
  'input[placeholder="Enter full name"]'
);
const townInput = document.querySelector(
  'input[placeholder="Enter home town"]'
);
const purposeInput = document.querySelector('input[placeholder^="e.g."]');

// category radios
const categoryRadios = document.querySelectorAll('input[name="category"]');
const selectedCategory = document.querySelector(
  'input[name="category"]:checked'
);

// buttons
const submitBtn = document.querySelector(".primary-btn");
const closeForm = document.querySelector(".closeForm");

//stack
const stack = document.querySelector(".stack");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");

function saveToLocalStorage(obj) {
  if (localStorage.getItem("tasks") === null) {
    let oldTasks = [];
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  } else {
    let oldTasks = localStorage.getItem("tasks");
    oldTasks = JSON.parse(oldTasks);
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  }
}

addNote.addEventListener("click", function () {
  formContainer.style.display = "initial";
  overlay.style.display = "initial";
});

closeForm.addEventListener("click", function () {
  formContainer.style.display = "none";
  overlay.style.display = "none";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let selected = false;
  categoryRadios.forEach(function (cat) {
    if (cat.checked) {
      selected = cat.value;
    }
  });

  const image = imageInput.value.trim();
  const name = nameInput.value.trim();
  const town = townInput.value.trim();
  const purpose = purposeInput.value.trim();
  if (
    image !== "" &&
    name !== "" &&
    town !== "" &&
    purpose !== "" &&
    selected
  ) {
    console.log("Form is valid ✅");
    console.log("Category:", selected);
    saveToLocalStorage({
      image,
      name,
      town,
      purpose,
      selected,
    });

    
  } else {
    alert("Please fill all fields and select a category");
  }

  form.reset();
  formContainer.style.display = "none";
  overlay.style.display = "none";
  showCards();
});

function showCards() {
  let allTasks = JSON.parse(localStorage.getItem("tasks"));
  allTasks.forEach(function (task) {
    // CARD
    const card = document.createElement("div");
    card.classList.add("card");

    // PROFILE
    const profile = document.createElement("div");
    profile.classList.add("profile");

    const img = document.createElement("img");
    img.src = task.image;

    const name = document.createElement("h2");
    name.textContent = task.name;

    profile.append(img, name);

    // INFO
    const info = document.createElement("div");
    info.classList.add("info");

    // LEFT INFO
    const leftInfo = document.createElement("div");
    leftInfo.classList.add("left-info");

    const townLabel = document.createElement("p");
    townLabel.classList.add("muted");
    townLabel.textContent = "Home town";

    const townValue = document.createElement("strong");
    townValue.textContent = task.town;

    leftInfo.append(townLabel, townValue);

    // RIGHT INFO
    const rightInfo = document.createElement("div");
    rightInfo.classList.add("right-info");

    const bookingLabel = document.createElement("p");
    bookingLabel.classList.add("muted");
    bookingLabel.textContent = "Purpose";

    const bookingValue = document.createElement("strong");
    bookingValue.textContent = task.purpose;

    rightInfo.append(bookingLabel, bookingValue);

    // INFO APPEND
    info.append(leftInfo, rightInfo);

    // CTA BUTTONS
    const cta = document.createElement("div");
    cta.classList.add("cta-btns");

    // CALL BUTTON
    const callBtn = document.createElement("button");
    callBtn.classList.add("call-btn");
    callBtn.innerHTML = `<i class="fa-solid fa-phone"></i> Call`;

    // MESSAGE BUTTON
    const msgBtn = document.createElement("button");
    msgBtn.classList.add("msg-btn");
    msgBtn.textContent = "Message";

    cta.append(callBtn, msgBtn);

    // FINAL CARD APPEND
    card.append(profile, info, cta);

    // 👉 Append card to stack/container
    document.querySelector(".stack").appendChild(card);
  });
}
showCards();

function update() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(function (card, index) {
    card.style.zIndex = 3 - index;
    card.style.transform = `translate(${1 - index * 10}px) scale${
      1 - index * 0.05
    }`;
    card.style.opacity = `${1 - index * 0.2}`;
  });
}

upBtn.addEventListener("click", function () {
  let lastChild = stack.lastElementChild;
  if (lastChild) {
    stack.insertBefore(lastChild, stack.firstElementChild);
    update();
  }
});

downBtn.addEventListener("click", function () {
  let firstChild = stack.firstElementChild;
  if (firstChild) {
    stack.appendChild(firstChild);
    update();
  }
});
