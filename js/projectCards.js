const projectInfo = [
  {
    name: "Use My Tech Stuff",
    img: "../imgs/umts-screen.png",
    languages: "HTML, CSS, JS",
    info:
      "One of my first team projects. Use My Tech Stuff is a tech rental site comparable to how Turo works for cars.",
    siteLink:
      "https://naughty-feynman-cff292.netlify.com/index.html#scrollPoint",
    codeLink:
      "https://github.com/use-my-tech-6-24/useMyTech-UI-General/blob/master/index.html"
  },
  {
    name: "DryMasterFL",
    img: "../imgs/dmresto.png",
    languages: "HTML, CSS, JS, Bootstrap",
    info: `A recent freelance website made for a local business, client wanted to incorporate the use of a Bootstrap template. (code private per clients request)`,
    siteLink: "https://drymasterfl.com",
    codeLink: "#"
  },
  {
    name: "My Portfolio",
    img: "../imgs/myPort.png",
    languages: "HTML, CSS, PHP, JS",
    info:
      "This is the site you're currently viewing! Aside from the contact form, everything on this page is made from scratch. Hope you're emjoying it and thank you for visiting!",
    siteLink: "#projects",
    codeLink:
      "https://github.com/use-my-tech-6-24/useMyTech-UI-General/blob/master/index.html"
  }
];

const cardSection = document.querySelector(".cardContainer");
console.log(document.querySelector(".cardContainer"));

projectInfo.forEach(data => {
  cardSection.appendChild(projectComp(data));
});

function projectComp(data) {
  //elements and classList
  const projectCard = document.createElement("div");
  projectCard.classList.add("card");

  const cardImg = document.createElement("img");
  cardImg.classList.add("card-img-top");
  cardImg.src = data.img;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = data.name;

  const cardLang = document.createElement("p");
  cardLang.classList.add("card-text", "card-lang");
  cardLang.textContent = data.languages;

  const cardInfo = document.createElement("p");
  cardInfo.classList.add("card-text");
  cardInfo.textContent = data.info;

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-container");

  const visitBtn = document.createElement("a");
  visitBtn.classList.add("btn", "btn-light");
  visitBtn.textContent = "Visit Site";
  visitBtn.href = data.siteLink;

  const codeBtn = document.createElement("a");
  codeBtn.classList.add("btn", "btn-light");
  codeBtn.textContent = "See Code";
  codeBtn.href = data.codeLink;

  projectCard.appendChild(cardImg);
  projectCard.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardLang);
  cardBody.appendChild(cardInfo);
  cardBody.appendChild(btnContainer);
  btnContainer.appendChild(visitBtn);
  btnContainer.appendChild(codeBtn);

  return projectCard;
}

{
  /* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
}
