function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.innerText = "❀"; // bạn có thể dùng "❀" "✿" hoặc "💮"

  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = 3 + Math.random() * 5 + "s";
  flower.style.opacity = Math.random();
  flower.style.fontSize = Math.random() * 10 + 16 + "px";

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 8000);
}

// Tạo hoa rơi liên tục
setInterval(createFlower, 500);
