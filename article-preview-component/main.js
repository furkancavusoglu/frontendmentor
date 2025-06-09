function toggleSharePopup() {
  const sharePopup = document.querySelector(".share-popup");
  const shareButton = document.querySelector(".share-button");
  shareButton.classList.toggle("active");
  sharePopup.classList.toggle("active");
}

function closeSharePopup() {
  const sharePopup = document.querySelector(".share-popup");
  const shareButton = document.querySelector(".share-button");

  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".share-popup") &&
      !event.target.closest(".share-button")
    ) {
      sharePopup.classList.remove("active");
      shareButton.classList.remove("active");
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      sharePopup.classList.remove("active");
      shareButton.classList.remove("active");
    }
  });
}
