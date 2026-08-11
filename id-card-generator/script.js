let form = document.querySelector("form");
let btn = document.querySelector("#btn");
let name = document.querySelector("#name");
let age = document.querySelector("#age");
let mail = document.querySelector("#mail");
let image = document.querySelector("#image");
let iname = document.querySelector("#iname");
let iage = document.querySelector("#iage");
let imail = document.querySelector("#imail");
let iimage = document.querySelector("#iimage");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

btn.addEventListener("click", submit);

function submit() {
  console.log("button");
  iname.textContent = `Name: ${name.value}`;
  iage.textContent = `Age: ${age.value}`;
  imail.textContent = `Mail id: ${mail.value}`;
  name.value = "";
  age.value = "";
  mail.value = "";

  let file = image.files[0];

  if (file) {
    let imgURL = URL.createObjectURL(file);
    iimage.src = imgURL;
  }
}
