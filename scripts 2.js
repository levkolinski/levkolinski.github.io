document.addEventListener("DOMContentLoaded", function() {
  // Create overlay container
  const overlay = document.createElement("div");
  overlay.id = "imageOverlay";
  overlay.style.display = "none";
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0,0,0,0.8)";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.cursor = "zoom-out";
  overlay.style.zIndex = "9999";

  const img = document.createElement("img");
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";
  img.style.borderRadius = "10px";
  img.style.boxShadow = "0 0 20px rgba(255,255,255,0.3)";
  overlay.appendChild(img);

  document.body.appendChild(overlay);

  // Handle image clicks
  document.querySelectorAll("img.zoomable").forEach(image => {
    image.style.cursor = "zoom-in";
    image.addEventListener("click", () => {
      img.src = image.src;
      overlay.style.display = "flex";
    });
  });

  // Close overlay when clicked
  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
  });
});