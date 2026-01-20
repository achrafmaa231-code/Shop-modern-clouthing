function goToScreen2() {
  document.getElementById("screen1").classList.remove("active");
  document.getElementById("screen2").classList.add("active");
}

function goToScreen1() {
  document.getElementById("screen2").classList.remove("active");
  document.getElementById("screen1").classList.add("active");
}