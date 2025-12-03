const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");


console.log("closeBtn :", closeBtn);
// Ouvrir la modal
openBtn.onclick = () => {
  modal.style.display = "flex";
  console.log("image ouverte");
}

// Fermer la modal
closeBtn.onclick = () => {
  modal.style.display = "none";
  console.log("image fermée avec le bouton");
}

// Fermer si clic à l’extérieur du contenu
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    console.log("image fermée avec le fond de page");
  }
}