const projectInfo = [
  {
    name: "DryMaster Restoration"
  }
];

const projectSection = document.querySelector(".projects");

projectInfo.forEach(data => {
  projectSection.appendChild(projectComp(projectCard));
});

function projectComp(data) {
  //elements and classList
  const projectCard = document.createElement("div");
  projectCard.classList.add("projectCard");

  const proName = document.createElement("h5");
  proName.textContent = data.name;

  projectCard.appendChild(proName);

  return projectCard;
}
