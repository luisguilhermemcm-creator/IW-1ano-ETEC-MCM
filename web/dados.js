function dados() {
    const db = [
                {id:1, login:"Luis", senha:"1234", nome:"Luis Guilherme", email:"luis123@gmail.com"},
                {id:2, login:"Miguel", senha:"5678", nome:"Miguel Santos", email:"Mig123@gmail.com"},
                {id:3, login:"Pedro", senha:"9999", nome:"Pedro Henrique", email:"PedroH67@gmail.com"}
                ]
let json = JSON.stringify(db)

localStorage.setItem("banco", json)


}