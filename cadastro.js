let name_input = document.getElementById("Username")
let password_input = document.getElementById("senha")
let nomeUsuario = []
let senhaUsuario = []
let addNome
let addSenha

function Cadastrar(){
    
    nomeUsuario = JSON.parse(localStorage.getItem("Users"))
    senhaUsuario = JSON.parse(localStorage.getItem("senha"))

        if(nomeUsuario == null){

            nomeUsuario = []
            senhaUsuario = []
            nomeUsuario.push(name_input.value)
            senhaUsuario.push(password_input.value)
            localStorage.setItem("Users" , JSON.stringify(nomeUsuario)) 
            localStorage.setItem("senha" , JSON.stringify(senhaUsuario))               

        }else{

            nomeUsuario.push(name_input.value)
            senhaUsuario.push(password_input.value)
            localStorage.setItem("Users" , JSON.stringify(nomeUsuario)) 
            localStorage.setItem("senha" , JSON.stringify(senhaUsuario)) 
                
        }

    alert("Cadastro realizado!")

}

