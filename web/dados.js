function dados() {
    const db = [
                {id:1, login:"Luis", senha:"1234", nome:"Luis Guilherme", email:"luis123@gmail.com"}, //0
                {id:2, login:"Miguel", senha:"5678", nome:"Miguel Santos", email:"Mig123@gmail.com"}, //1
                {id:3, login:"Pedro", senha:"9999", nome:"Pedro Henrique", email:"PedroH67@gmail.com"} //2
                ]

let json = JSON.stringify(db)

localStorage.setItem("banco", json)


}

function logar() {
    const db = JSON.parse(localStorage.getItem("banco"))
    let lg = document.querySelector("#login").value 
    let sn = document.querySelector("#senha").value 

    // alert(lg + "\n" + sn)

    if (lg == db[0].login && sn == db[0].senha) {
        alert("Que aura")
    }

}