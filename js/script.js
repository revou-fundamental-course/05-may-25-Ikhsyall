// Menampilkan pesan di konsol bahwa JavaScript berhasil dijalankan
console.log("javascript berhasil dijalankan");

// Mengambil elemen DOM yang diperlukan untuk slider
const slider = document.querySelector(".slider");
const list = document.querySelector(".list");
const thumnail = document.querySelector(".tumbnail");

// Mengambil tombol next dan previous
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

// Auto play slider setiap 8 detik
let runAutoPlay = setInterval(() => {
  next.click(); // Klik otomatis tombol next
}, 8000);

// Event saat tombol next diklik
next.addEventListener("click", () => {
  initSlider("next");
});

// Event saat tombol previous diklik
prev.addEventListener("click", () => {
  initSlider("prev");
});

// Fungsi untuk inisialisasi slider saat tombol diklik
const initSlider = (type) => {
  const SliderItems = list.querySelectorAll(".item");
  const thumnailItems = thumnail.querySelectorAll(".item");

  if (type === "next") {
    // Pindahkan item pertama ke akhir (next)
    list.appendChild(SliderItems[0]);
    thumnail.appendChild(thumnailItems[0]);
    slider.classList.add("next");
  } else {
    // Pindahkan item terakhir ke awal (prev)
    const lasItePosition = SliderItems.length - 1;
    list.prepend(SliderItems[lasItePosition]);
    thumnail.prepend(thumnailItems[lasItePosition]);
    slider.classList.add("prev");
  }

  // Hapus class animasi setelah 2 detik
  setTimeout(() => {
    slider.classList.remove("next");
    slider.classList.remove("prev");
  }, 2000);
};

// Toggle menu responsive
// Mengambil elemen menu navbar
const navbarMenu = document.querySelector(".menu");

// Saat ikon menu (#mnu) diklik, toggle class 'active'
document.querySelector("#mnu").onclick = () => {
  navbarMenu.classList.toggle("active");
};

// Fungsi Validasi Form
function validasiForm() {
  // Ambil input dari form
  const namaeinput = document.getElementById("nama");
  const inputemail = document.getElementById("email");
  const inputtext = document.getElementById("pesan");

  // Cetak nilai input ke konsol untuk debugging
  console.log(namaeinput.value);
  console.log(inputemail.value);
  console.log(inputtext.value);

  // Cek apakah semua input kosong
  if (
    namaeinput.value === "" ||
    inputemail.value === "" ||
    inputtext.value === ""
  ) {
    alert("Harus isi Semua Form"); // Tampilkan peringatan jika ada yang kosong
  } else {
    alert("Berhasil dikirim"); // Tampilkan sukses jika semua terisi
  }
}
