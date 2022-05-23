let name_input = document.getElementById("Users")
let password_input = document.getElementById("senha")
let nomeUsuario = []
let senhaUsuario = []
let posicao = -1
let addNome
let addSenha


function Confirmar(){

    nomeUsuario = JSON.parse(localStorage.getItem("Users"))
    senhaUsuario = JSON.parse(localStorage.getItem("senha"))

    if(nomeUsuario == null && senhaUsuario == null){

        alert("Login failed")

    }else{

        for(i = 0; i < nomeUsuario.length;i++){

            if(name_input.value == nomeUsuario[i]){

                posicao = i

                if(password_input.value == senhaUsuario[posicao]){
    
                    alert("Logado!")

                }else{

                    alert("Senha inválida")

                }
            }
        }

        if(i == nomeUsuario.length && posicao == -1){
        alert("Usuário não encontrado")
        }

    }
}