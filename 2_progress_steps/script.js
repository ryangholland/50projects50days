const progressSections = document.querySelectorAll(".progress-section");
const prevButton = document.querySelector("#btn-prev");
const nextButton = document.querySelector("#btn-next");
let completedSections = 0;

prevButton.addEventListener("click", () => {
  if (completedSections > 0) completedSections--; 
  if (completedSections === 0) prevButton.classList.remove("btn-active")

  nextButton.classList.add("btn-active")
  progressSections[completedSections + 1].classList.remove("progress-active")
})

nextButton.addEventListener("click", () => {
  if (completedSections < progressSections.length - 1) completedSections++; 
  if (completedSections === 3) nextButton.classList.remove("btn-active")

  prevButton.classList.add("btn-active")
  progressSections[completedSections].classList.add("progress-active")
})

