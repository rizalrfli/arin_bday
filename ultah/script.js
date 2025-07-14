
const wishes = [
  "Semoga semua impianmu segera tercapai jadi apoteker!",
  "Semoga kamu selalu dikelilingi teman-teman yang baik dan positif kaya aku",
  "Tetap jadi pribadi yang cerewet dan ceria yaaaaaaaaaaaaaaaaaaa ✨",
  "Kalo ada apa-apa, jangan sungkan buat cerita ke aku soalnya aku 24/7 ada buat kamu asekk",
  "Jangan lupa senyum di setiap langkahmu, because you are so gorgeous in every smile of yours",
  "TERAKHIRRR JANGAN TIBA TIBA BERUBAH HUHUHU"
];
let i = 0;

function changeWish() {
  i = (i + 1) % wishes.length;
  document.getElementById("wish").innerText = wishes[i];
}
