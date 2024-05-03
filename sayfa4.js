// TEMEL GEREKLİ DEĞİŞKENLER OLUŞTURULUYOR
const API_URL = "http://api.open-notify.org/astros.json"
const gridElemani = document.querySelector(".kutu")
const azSiralaButonu = document.querySelector("#az-sirala")
const zaSiralaButonu = document.querySelector("#za-sirala")
const yukleniyorKutusu = document.querySelector("#yukleniyor-kutusu")
const uzaydakiKisiler = []


// API KAYNAĞINDAN GEREKLİ VERİLER ÇEKİLİP, İLGİLİ DEĞİŞKENE AKTARILIYOR
fetch(API_URL)
    .then(yanit=>yanit.json()) //JSON objesini JS objesine çevirdik
    .then(veri=>{
        uzaydakiKisiler.push(...veri.people)
        kisileriGoster()
        yukleniyorKutusu.remove()
    })
    .catch(hata=>{
        yukleniyorKutusu.innerHTML = `<span class="alert alert-danger">
            Veriler yüklenirken hata oluştu. Lütfen daha sonra tekrar deneyin.
        </span>`

        console.log(hata.message);
    })


// sıralama fonksiyonu
function sirala(tip="A-Z") {
    if ( tip === "A-Z" ) {
        uzaydakiKisiler.sort( (ilkObje, ikinciObje) => ilkObje.name.localeCompare(ikinciObje.name, "tr-TR") )
    }

    if ( tip === "Z-A" ) {
        uzaydakiKisiler.sort( (ilkObje, ikinciObje) => ikinciObje.name.localeCompare(ilkObje.name, "tr-TR") )
    }
}

// kişiler arrayini UI'da gösteren ana fonksiyon
function kisileriGoster() {
    // ÖNCELİKLE, kutu içinde HTML varsa, temizle
    gridElemani.innerHTML = ""

    uzaydakiKisiler.forEach(eleman => {
        renderPerson(eleman)
    });
}

// her bir kişiyi UI'a ekleyen alt fonksiyon. DOM işlemleri yapılıyor..
function renderPerson(kisi) {
    const HTML = `
        <div class="col-sm-4">
            <div class="card">
                <div class="card-body">
                    ${kisi.name}
                </div>
            </div>
        </div>
    `
    gridElemani.insertAdjacentHTML("beforeend", HTML) //grid etiketin sonuna ekle

}

azSiralaButonu.addEventListener("click", olay => {
    if( olay.currentTarget.classList.contains("active") ) //eğer daha önce tıklanmışsa kes
        return

    zaSiralaButonu.classList.remove("active") // diğer butonu pasif yap

    sirala("A-Z")
    kisileriGoster()
    olay.currentTarget.classList.toggle("active") //olay.currentTarget = tıklanan buton
})

zaSiralaButonu.addEventListener("click", olay => {
    if( olay.currentTarget.classList.contains("active") ) //eğer daha önce  tıklanmışsa kes
        return

    azSiralaButonu.classList.remove("active") // diğer butonu pasif yap
        
    sirala("Z-A")
    kisileriGoster()
    olay.currentTarget.classList.toggle("active") //olay.currentTarget = tıklanan buton
})

