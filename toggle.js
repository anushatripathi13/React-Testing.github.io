const selected = document.querySelector(".selected");
const optionscontainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click",() => {
    optionscontainer.classList.toggle("active-2");
});