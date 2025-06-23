// Mensaje de bienvenida en consola
console.log("✨ InstaFeed cargado por geekgirl & Patsy 🐾");

// Seguimiento
const followBtn = document.createElement("button");
followBtn.innerText = "Seguir";
followBtn.className = "follow-btn";
document.querySelector("header").appendChild(followBtn);

let isFollowing = false;

followBtn.addEventListener("click", () => {
  isFollowing = !isFollowing;
  followBtn.innerText = isFollowing ? "Siguiendo 💖" : "Seguir";
  followBtn.style.backgroundColor = isFollowing ? "#d62976" : "#4f5bd5";
});

// Agregar ❤️ al hacer clic en las imágenes
const posts = document.querySelectorAll(".post img");

posts.forEach((img) => {
  img.addEventListener("dblclick", () => {
    const heart = document.createElement("span");
    heart.innerText = "❤️";
    heart.className = "like-heart";
    img.parentNode.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1000);
  });
});
