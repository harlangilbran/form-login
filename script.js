document.addEventListener("DOMContentLoaded", function () {
  var inputs = document.querySelectorAll(".input-container input");
  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      var parent = this.parentNode;
      var icon = parent.querySelector(".icon");
      if (this.value.trim() !== "") {
        icon.style.display = "none";
      } else {
        icon.style.display = "block";
      }
    });
  });
});
