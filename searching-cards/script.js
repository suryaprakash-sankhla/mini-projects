const users = [
  {
    name: "Aarav Sharma",
    pic: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    bio: "Frontend developer who loves clean UI and animations.",
  },
  {
    name: "Neha Verma",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    bio: "Creative designer with a passion for minimal layouts.",
  },
  {
    name: "Rohan Singh",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    bio: "JavaScript enthusiast and problem solver.",
  },
  {
    name: "Priya Patel",
    pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    bio: "UI/UX learner focused on user-friendly experiences.",
  },
  {
    name: "Karan Mehta",
    pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    bio: "Full stack developer exploring modern web tools.",
  },
  {
    name: "Ananya Gupta",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    bio: "Design-minded developer who loves Tailwind CSS.",
  },
  {
    name: "Vikram Rao",
    pic: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    bio: "Tech enthusiast learning React and backend APIs.",
  },
  {
    name: "Sneha Iyer",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    bio: "Creative thinker with interest in web animations.",
  },
  {
    name: "Aditya Kulkarni",
    pic: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    bio: "Self-taught programmer building cool side projects.",
  },
  {
    name: "Pooja Nair",
    pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    bio: "Frontend learner focused on performance and design.",
  },
];

let cards = document.querySelector(".cards");
let input = document.querySelector("input");

function showUsers(arr) {
  arr.forEach(function (user) {
    const card = document.createElement("div");
    card.className = "card";

    // image
    const img = document.createElement("img");
    img.src = user.pic;
    img.className = "bg-img";

    // blurred layer
    const blurredLayer = document.createElement("div");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    blurredLayer.className = "blurred-layer";

    // content wrapper
    const content = document.createElement("div");
    content.className = "content";

    // heading
    const heading = document.createElement("h3");
    heading.textContent = user.name;

    // paragraph
    const para = document.createElement("p");
    para.textContent = user.bio;

    // append content
    content.appendChild(heading);
    content.appendChild(para);

    // assemble card
    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    // finally add to page
    cards.appendChild(card);
  });
}
showUsers(users);

input.addEventListener("input", function () {
  let newUsers = users.filter((user) => {
    return user.name.startsWith(input.value);
  });

  cards.innerHTML = "";
  if (newUsers.length === 0) {
    const h = document.createElement("h1");
    h.textContent = "User Not Found!!";
    h.className = "notf";
    cards.appendChild(h);
  }
  showUsers(newUsers);
});
