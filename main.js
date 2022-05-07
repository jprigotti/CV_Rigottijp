
let estadoAcademic=false;
let estadoWorkExperience=false;

// Function to change the content of t2
function modifyAcademic() {
let elemento1 = document.querySelector(".containerAcademic");
(estadoAcademic) ? elemento1.style.display="none" : elemento1.style.display="contents";
estadoAcademic=!estadoAcademic;
  }

function modifyWorkExperience() {
let elemento1 = document.querySelector(".containerJobs");
(estadoWorkExperience) ? elemento1.style.display="none" : elemento1.style.display="contents";
estadoWorkExperience=!estadoWorkExperience;
console.log(estado);
  }
  
  // Function to add event listener to t
  function load() {
    var iconAcademic = document.getElementById("iconAcademic");
    iconAcademic.addEventListener("click", modifyAcademic, false);
    var iconWorkExperience = document.getElementById("iconWorkExperience");
    iconWorkExperience.addEventListener("click", modifyWorkExperience, false);

  }
  
  document.addEventListener("DOMContentLoaded", load, false);
  