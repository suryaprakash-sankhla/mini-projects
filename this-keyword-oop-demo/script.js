const form = document.querySelector("form");
const userName = document.querySelector("#name");
const role = document.querySelector("#role");
const bio = document.querySelector("#bio");
const photo = document.querySelector("#photo");
const cards = document.querySelector(".cards");

const userManager = {
  users: [],
  uid: 0,

  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
    cards.addEventListener("click", this.removeUser.bind(this));
  },

  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
    this.renderUi();
    form.reset();
  },

  addUser: function () {
    this.users.push({
      id: this.uid++,
      userName: userName.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });
  },

  renderUi: function () {
    cards.innerHTML = "";

    this.users.forEach(function (user) {
      const card = document.createElement("div");
      card.className = "card";
      card.dataset.id = user.id;

      card.innerHTML = `
        <div class="avatar">
          <img src="${user.photo}" />
        </div>
        <h3>${user.userName}</h3>
        <div class="role">${user.role}</div>
        <p class="bio">${user.bio}</p>
      `;

      cards.appendChild(card);
    });
  },

  removeUser: function (e) {
    const card = e.target.closest(".card");
    if (!card) return;

    const id = Number(card.dataset.id);
    this.users = this.users.filter((user) => user.id !== id);
    this.renderUi();
  },
};

userManager.init();
