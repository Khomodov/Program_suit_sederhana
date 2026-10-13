const data = {
  gajah: ["Gajah", "Orang", "Semut"],
  jari: ["Telunjuk", "Jempol", "Kelingking"],
  batu: ["Batu", "Gunting", "Kertas"]
};

const menang = {
  gajah: ["Orang", "Semut", "Gajah"],
  jari: ["Jempol", "Kelingking", "Telunjuk"],
  batu: ["Gunting", "Kertas", "Batu"]
};

const h1 = document.getElementById("halaman1");
const h2 = document.getElementById("halaman2");
const area = document.getElementById("pilihan");

let mode;

function mulai(pilihan) {
  mode = pilihan;
  h1.hidden = true;
  h2.hidden = false;
  area.innerHTML = "";

  data[mode].forEach(p => {
    const b = document.createElement("button");
    b.textContent = p;
    b.onclick = () => main(p);
    area.appendChild(b);
  });
}

function kembali() {
  h2.hidden = true;
  h1.hidden = false;
}

function main(user) {
  const opsi = data[mode];
  const bot = opsi[Math.floor(Math.random() * opsi.length)];

  const hasil = user === bot ? "seri" :
    menang[mode][opsi.indexOf(user)] === bot ? "menang" : "kalah";

  alert(`Kamu: ${user}\nBot: ${bot}\n\n` +
    (hasil === "menang" ? "Mantap, Gas adu lagi!" :
     hasil === "seri" ? "Masih imbang, teruskan!" :
     "Aduh sayang sekali bot menang"));
}
