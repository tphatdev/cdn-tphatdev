document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const slides = carousel.children;
  const totalSlides = slides.length;
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    const thumbnails = document.querySelectorAll("#thumbnails img");
    thumbnails.forEach((thumb, index) => {
      thumb.classList.toggle("active", index === currentIndex);
    });
    document.getElementById("imageCounter").textContent = currentIndex + 1;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : totalSlides - 1;
    updateCarousel();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < totalSlides - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  });

  document.querySelectorAll("#thumbnails img").forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  updateCarousel();
});
