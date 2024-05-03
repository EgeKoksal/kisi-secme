const ogrenciler = [
  "Hasan Tokatlı",
  "Ahmet Yılmaz",
  "Büşra Tuğul",
  "Çağrı Akgün",
]

const ogrencilerDetayli = [
  {ad: "Hasan Tokatlı", kurs: "JS", devamsizlik: 0}, 
  {ad: "Ahmet Yılmaz", kurs: "HTML", devamsizlik: 2}, 
  {ad: "Büşra Tuğul", kurs: "JS", devamsizlik: 1},
  {ad: "Çağrı Akgün", kurs: "JS", devamsizlik: 3}
]

// ELEMAN ÇEKME - VERİ OKUMA
// 1- tek eleman
//console.log( ogrenciler[2]  )
//console.log( ogrencilerDetayli[2].ad )
//console.log( ogrencilerDetayli[2].kurs )

// 2- çok eleman
/*
ogrenciler.forEach( (eleman, index)=>{
  console.log( eleman, index  )
})
*/

/*
ogrencilerDetayli.forEach( (eleman, index)=>{
  console.log( eleman.ad, eleman.kurs, index  )
})*/


// ELEMAN EKLEME - VERİ EKLEME
// basit arraye sona eleman ekleme
/*
ogrenciler.push("Nil Ece Altuğ")
console.log(ogrenciler)
*/

// obje elemanlı arraye sona eleman ekleme
/*
ogrencilerDetayli.push({ad:"Tarkan", kurs:"JS", devamsizlik: 1})
console.log(ogrencilerDetayli)
*/

// ELEMAN SİLME - VERİ SİLME
// basit arrayden veri silme
/*
ogrenciler.pop() //sondan 1 eleman siler
console.log(ogrenciler)
*/
/*
ogrenciler.shift() //baştan 1 eleman siler
console.log(ogrenciler)
*/
/* 
ogrenciler.splice(1, 1)
console.log(ogrenciler)
*/

// obje elemanlı arrayden veri silme
/* 
ogrencilerDetayli.pop() //sondan 1 eleman siler
console.log(ogrencilerDetayli)
*/
/* 
ogrencilerDetayli.shift() //baştan 1 eleman siler
console.log(ogrencilerDetayli)
*/

/* 
ogrencilerDetayli.splice(1, 1)
console.log(ogrencilerDetayli)
*/

// basit arrayden koşullu tek veri silme
/* 
const silinecekIndex = ogrenciler.findIndex( eleman => eleman === "Hasan Tokatlı" )

if(silinecekIndex !== -1) //eğer bir değer eşleştiyse
  ogrenciler.splice(silinecekIndex, 1)

console.log(ogrenciler)
*/

// obje içeren arrayden koşullu tek veri silme
/*
const silinecekIndex = ogrencilerDetayli.findIndex( eleman => eleman.kurs === "HTML" )

if(silinecekIndex !== -1) //eğer bir değer eşleştiyse   
  ogrencilerDetayli.splice(silinecekIndex, 1)

console.log(ogrencilerDetayli)
*/

// ELEMAN GÜNCELLEME - VERİ GÜNCELLEME
// basit array verisini güncelleme
/* 
ogrenciler.splice(3, 1, "Tarkan")
console.log(ogrenciler) 
*/

// obje içeren array verisini güncelleme

/*
ogrencilerDetayli.splice(2, 1, {ad: "Tarkan", kurs:"HTML", devamsizlik:3}  )
ogrencilerDetayli.splice(2, 1, {...ogrencilerDetayli[2], ad: "Tarkan"}  )
console.log(ogrencilerDetayli)
*/

//ARRAY FİLTRELEME
//BASİT ARRAY FİLTRELEME
/*
const isimFiltreArray = ogrenciler.filter(  (eleman) =>eleman.includes("Hasan") )
console.log(isimFiltreArray)
*/

//obje içeren array filtreleme
/*
const devamsizlikOlmayanOgrenciler = ogrencilerDetayli.filter( (eleman) =>eleman.devamsizlik === 0 )
console.log(devamsizlikOlmayanOgrenciler);
*/

// ARRAY SIRALAMA 
//basit array sıaralama
/*ogrenciler.sort(( a, b ) => a.localeCompare(b,"tr-TR")) // TÜRKçede Ç Ş Ğ gibi harfler oldupu icin js unu normal harfleri bitirir sonra onlara gecer ondan ç h den sonra yazdırılabilir harf olarak ondan bu kodu giriyoruzxz ki ç yi normal sırada versin
console.log(ogrenciler);
*/

// obje içeren arraylerde sıralamaü
/*
ogrencilerDetayli.sort((ilkObje, ikinciObje ) => ilkObje.ad.localeCompare(ikinciObje.ad,"tr-TR"))
console.log(ogrencilerDetayli);
*/
/*
ogrencilerDetayli.sort((ilkObje, ikinciObje ) => ilkObje.devamsizlik - ikinciObje.devamsizlik)
console.log(ogrencilerDetayli);
*/


