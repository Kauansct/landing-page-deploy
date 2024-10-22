let submitBtn = document.getElementById('submit-btn')
let userName = document.getElementById('name')
let userEmail = document.getElementById('email')
let userNumPhone = document.getElementById('phone')
let userComment = document.getElementById('comment')

function limpar_formulario(){
    document.getElementById('name').value = ('')    
    document.getElementById('email').value = ('')
    document.getElementById('phone').value = ('')
    document.getElementById('comment').value = ('')    
}

submitBtn.addEventListener('click', (event) =>{
    event.preventDefault()

    let validaNome = /^[a-zA-Z\s]+$/
    userNumPhone.value = userNumPhone.value.replace(/\D/g, '')
    let validaTelefone = /^[0-9]{11}$/;

    if((userName.value).trim() === ""){
        document.getElementById('name').value = ('')
        userName.placeholder = "Nome com falta de caracteres"
    }
    else if(validaNome.test(userName.value) === false){
        document.getElementById('name').value = ('')
        userName.placeholder = "Caracteres numéricos e especiais não são permitidos no nome"
    }
    if((userEmail.value).trim() === ''){
        document.getElementById('email').value = ('')
        userEmail.placeholder = "Email com falta de caracteres"
    }
    if((userNumPhone.value).trim() === ''){
        document.getElementById('phone').value = ('')
        userNumPhone.placeholder = "Telefone com falta de caracteres"
        return
    }
    else if(validaTelefone.test(userNumPhone.value) === false){
        document.getElementById('phone').value = ('')
        userNumPhone.placeholder = "Está fora dos limites de caracteres permitidos."
        return
    }
    
    function sendEmail(){
        let parms = {
            name : userName.value,
            email : userEmail.value,
            phone : userNumPhone.value,
            message : userComment.value
        }
        emailjs.send('service_nvgs9ik','template_m9rhkhq',parms).then(() => {
            alert("Email enviado!!")
            limpar_formulario()
        })
    }

    sendEmail()
})



