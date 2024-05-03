fetch("./oyuncu.json")
.then(yanit=>yanit.json())
.then(jsObjesi=>{
    console.log(jsObjesi);
})

