// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

const heart = document.querySelectorAll(".fa.fa-heart-o");
console.log(heart);

heart.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("clicked");
    if (item.className === "fa fa-heart-o") {
      item.className = "fa fa-heart";
    } else {
      item.className = "fa fa-heart-o";
    }
  });
});
