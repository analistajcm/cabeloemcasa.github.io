$(document).ready(function () {
    $('.submit').click(function (event){
        
        
        var name = $("#nome").val()
        var telefone = $("#telefone").val()
        var email = $("#email").val()
        var msg = $("#msg").val()
        var erro
        
        
        if(telefone.length < 9){
            erro += " telefone inválido,"
        }
        if(email.length < 6 && !email.includes('@') && !email.includes('.')){
            erro += " email inválido,"
        }
        if(msg.length < 5){
            erro += " mensagem curta."
            console.log(erro)
        }
        if( erro.length ){
            event.preventDefault()
            document.getElementById("erro").innerHTML =
               '<div class="alert alert-danger">Erro no preenchimento do formulário. Erro:'+erro+'</div> '
        }
            
    })
})

