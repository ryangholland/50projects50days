const panels = document.querySelectorAll(".panel");

function handleClick(e) {
  if (!e.target.classList.contains("active")) {
    panels.forEach((panel) => panel.classList.remove("active"));

    e.target.classList.add("active");
  }
}

panels.forEach((panel) => {
  panel.addEventListener("click", handleClick);
});
