const projectInfo = [
  {
    img: "../imgs/umts-screen.png",
    name: "Use My Tech Stuff",
    languages: "HTML, CSS, JS",
    info: ""
  }
];

const projectSection = document.querySelector(".projects");
console.log(document.querySelector(".projects"));

projectInfo.forEach(data => {
  projectSection.appendChild(projectComp(data));
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
  cardTitle.textContent = data.name;

  const cardInfo = document.createElement("p");
  cardInfo.classList.add("card-text");
  cardInfo.textContent = data.info;

  projectCard.appendChild(cardImg);
  projectCard.appendChild(cardBody);
  cardBody.appendChild(cardTitle);

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
