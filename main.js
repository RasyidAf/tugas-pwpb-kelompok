let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".carousel-images img");

  // Pastikan index tetap dalam rentang yang valid
  if (index >= slides.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex = index;
  }

  // Sembunyikan semua gambar dan tampilkan hanya gambar yang aktif
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    slide.style.opacity = "0";
    slide.style.display = "none";
    if (i === currentIndex) {
      slide.classList.add("active");
      slide.style.display = "block";
      slide.style.opacity = "1";
    }
  });
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Tampilkan slide pertama saat halaman dimuat
showSlide(currentIndex);
