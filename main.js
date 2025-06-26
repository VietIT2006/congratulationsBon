const items = document.querySelectorAll(".carousel-item");
const angle = 360 / items.length;

items.forEach((item, i) => {
  item.style.transform = `rotateY(${angle * i}deg) translateZ(200px)`;

  item.addEventListener("click", function () {
    const displayImg = document.getElementById("display-image");
    const video = document.getElementById("display-video");
    const card = document.getElementById("greeting-card");

    // Ẩn tất cả
    displayImg.style.display = "none";
    video.style.display = "none";
    card.style.display = "none";

    // Hiển thị theo từng ảnh
    if (this.src.includes("avt1.jpg")) {
      displayImg.src = this.src;
      displayImg.style.display = "block";
    } else if (this.src.includes("avt2.jpg")) {
      video.src = "vid.mp4";
      video.style.display = "block";
    } else if (this.src.includes("avt3.jpg")) {
      video.src = "vid2.mp4";
      video.style.display = "block";
      card.style.display = "block";
    } else if (this.src.includes("avt4.jpg")) {
      video.src = "vid3.mp4";
      video.style.display = "block";
      card.style.display = "block";
    }
  });
});
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});
