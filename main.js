
let estadoAcademic = true;
let estadoWorkExperience = true;
let estadoLeisure = true;

// Function to change the content of t2
function modifyAcademic() {
    let elemento1 = document.querySelector(".containerAcademic");
    (estadoAcademic) ? elemento1.style.display = "none" : elemento1.style.display = "contents";
    estadoAcademic = !estadoAcademic;
}

function modifyWorkExperience() {
    let elemento1 = document.querySelector(".containerJobs");
    (estadoWorkExperience) ? elemento1.style.display = "none" : elemento1.style.display = "contents";
    estadoWorkExperience = !estadoWorkExperience;
}

function modifyLeisure() {
    let elemento1 = document.querySelector(".containerLeisure");
    (estadoLeisure) ? elemento1.style.display = "none" : elemento1.style.display = "contents";
    estadoLeisure = !estadoLeisure;
}

// Function to add event listener to t
function load() {
    var iconAcademic = document.getElementById("iconAcademic");
    iconAcademic.addEventListener("click", modifyAcademic, false);
    var iconWorkExperience = document.getElementById("iconWorkExperience");
    iconWorkExperience.addEventListener("click", modifyWorkExperience, false);
    var iconLeisure = document.getElementById("iconLeisure");
    iconLeisure.addEventListener("click", modifyLeisure, false);

}

document.addEventListener("DOMContentLoaded", load, false);
