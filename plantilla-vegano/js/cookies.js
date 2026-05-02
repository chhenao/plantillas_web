 
function acceptCookies() {
  localStorage.setItem("cookies", "accepted");
  document.getElementById("cookie-banner").style.display = "none";
}

function rejectCookies() {
  localStorage.setItem("cookies", "rejected");
  document.getElementById("cookie-banner").style.display = "none";
}

// ocultar si ya eligió
window.onload = function() {
  const cookies = localStorage.getItem("cookies");
  if (cookies) {
    document.getElementById("cookie-banner").style.display = "none";
  }
};
 