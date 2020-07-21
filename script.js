let open = false;

function openNav() {
  if (!open) {
    $("#Nav-open").css("display", "none");
    $("#Nav-close").css("display", "unset");
    $("#Navigation-modal").css("display", "flex");
    open = !open;
  } else {
    $("#Nav-open").css("display", "unset");
    $("#Nav-close").css("display", "none");
    $("#Navigation-modal").css("display", "none");
    open = !open;
  }
}

window.onclick = function (event) {
  if (event.target != $("#Navigation-modal") && open == false) {
    $("#Navigation-modal").css("display", "none");
  }
};
