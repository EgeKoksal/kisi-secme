const bodyEleman = document.querySelector("body");
const kokEleman = document.querySelector("#root");
const ogrenciler = [
  "ABDULLAH BİLİR",
  "AHMET YILMAZ",
  "ATANAS SAMARCİ",
  "BİRKAN YÜKSEL",
  "BURHAN ARSLAN",
  "BÜLENT GÜLER",
  "BÜŞRA TUĞUL",
  "CEREN ACAR",
  "EGE KÖKSAL",
  "ELİF HAZAL BÜBER",
  "ENES GÜLTEKİN",
  "ENİSE USTA",
  "ERDOĞAN FIRAT",
  "ESMA ALCI",
  "HAMZA SAMUR",
  "HÜSEYİN AKGÜN",
  "İBRAHİM DORUK AKGÜN",
  "İLKER EGELİ",
  "KAAN GÜLEÇ",
  "KAAN SEVİNÇ",
  "KIRILL GOSHIN",
  "KÜBRA ÇAKIR GÖKTEPE",
  "NİL ECE ALTUĞ",
  "OĞUZHAN GARİP",
  "SUDE ERDAĞI",
  "ŞAFAK GÖKTEPE",
  "ŞEVAL ÖZAKÇA",
  "TARKAN İSKENDER",
  "ZAFER MERT YILMAZ",
  "ZEYNEP DAĞDEVİREN",
];

function renderAnaEkran() {
  kokEleman.innerHTML = "";

  const baslikElemani = document.createElement("h1");
  baslikElemani.textContent = "İsim Listesi";
  kokEleman.append(baslikElemani);

  const ulElemani = document.createElement("ul");
  kokEleman.append(ulElemani);

  //öğrenci sayısı kadar li etiketi üretilecek
  //üretilen her li etiketi ulElemani içine eklenecek
  ogrenciler.forEach((eleman) => {
    const liElemani = document.createElement("li");
    liElemani.textContent = eleman;
    ulElemani.append(liElemani);
  });

  const ekleButonu = document.createElement("button");
  ekleButonu.id = "ekle-butonu";
  ekleButonu.textContent = "Yeni Öğrenci Ekle";
  kokEleman.append(ekleButonu);

  ekleButonu.addEventListener("click", (olay) => {
    const yeniAdSoyad = prompt("Yeni öğrencinin ad ve soyadını giriniz:");
    ogrenciler.push(yeniAdSoyad);

    renderAnaEkran();
    renderBilgi();
  });
}

function renderBilgi() {
  const div = document.querySelector("#ogrenci-bilgi");
  div?.remove(); // if(div) div.remove()

  const ogrenciSayisi = ogrenciler.length;

  const ogrenciBilgiHTML = `   
        <div id="ogrenci-bilgi">
           Toplam Öğrenci: ${ogrenciSayisi}
        </div>
    `;
  bodyEleman.insertAdjacentHTML("beforeend", ogrenciBilgiHTML);
}

function renderMenu() {
  const menuHTML = `
        <div id="menu">
            <button id="ayarlar-buton">
                Ayarlar
            </button>
            <button id="ogrenci-liste-buton">
                Öğrenciler
            </button>
            <button id="ogrenci-sec">Öğrenci Seç</button>
        </div>
    `;
  bodyEleman.insertAdjacentHTML("beforeend", menuHTML);

  const ayarlarButon = document.querySelector("#ayarlar-buton");
  ayarlarButon.addEventListener("click", (olay) => {
    renderAyarEkrani();
  });

  const ogrenciListeButon = document.querySelector("#ogrenci-liste-buton");
  ogrenciListeButon.addEventListener("click", (olay) => {
    renderAnaEkran();
  });

  const ogrenciSecButon = document.querySelector("#ogrenci-sec");
  ogrenciSecButon.addEventListener("click", (olay) => {

    const sayiSec = randomNumber(0, (ogrenciler.length - 1))
    alert(ogrenciler[sayiSec])
  });
}

function renderAyarEkrani() {
  kokEleman.innerHTML = "";

  const baslikElemani = document.createElement("h1");
  baslikElemani.textContent = "🛠 Ayarlar";
  kokEleman.append(baslikElemani);
}

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

renderAnaEkran();
renderBilgi();
renderMenu();
