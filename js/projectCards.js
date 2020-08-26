const projectInfo = [
  {
    name: "Nasa Photo of the Day",
    img: "/imgs/Npotd.png",
    languages: "React, JS, SCSS",
    info:
      "Small CRA project made with the Nasa API. Pick a date (today's or any previous date) and a new photo with info will be rendered.",
    siteLink: "https://vibrant-bartik-37d5dc.netlify.com/",
    codeLink:
      "https://github.com/pj-wise/nasa-photo-of-the-day/blob/master/src/App.js"
  },
  {
    name: "GitHub Finder",
    img: "/imgs/gitFinder.png",
    languages: "React, JS, CSS",
    info:
      "Practice project using React.js. Site incorporates the use of GitHub's API and allows you to search their user database",
    siteLink: "https://jolly-easley-3598bf.netlify.com/",
    codeLink: "https://github.com/pj-wise/github-finder/blob/master/src/App.js"
  },
  {
    name: "Cohen Restoration",
    img: "/imgs/cohen.png",
    languages: "React, Material Ui, Reactstrap",
    info: `A recent freelance project for a growing and local mold remediation company. The site is a React SPA (code private per clients request)`,
    siteLink: "https://cohenrestoration.com",
    codeLink: "#projects"
  },
  {
    name: "Use My Tech Stuff",
    img: "/imgs/umts-screen.jpeg",
    languages: "HTML, CSS, JS",
    info:
      "One of my first team projects. Use My Tech Stuff is a tech rental site comparable to how Turo works for cars.",
    siteLink: "https://naughty-feynman-cff292.netlify.com",
    codeLink:
      "https://github.com/use-my-tech-6-24/useMyTech-UI-General/blob/master/index.html"
  }
];

const cardSection = document.querySelector(".cardContainer");
console.log(document.querySelector(".cardContainer"));

projectInfo.forEach(data => {
  cardSection.appendChild(projectComp(data));
});

function projectComp (data) {
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
  visitBtn.target = "_blank";

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
