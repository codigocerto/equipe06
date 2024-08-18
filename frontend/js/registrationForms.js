const registrationForms= () =>{
    const forms = document.getElementById('registrationForms')


    if(forms){
        
        forms.addEventListener('submit' , async function(event){
            event.preventDefault() // Evita o envio padrao do formulario

            console.log('Form submission prevented'); // Log para verificar se o preventDefault está sendo chamado

            const name = document.getElementById('name').value;

            const email = document.getElementById('email').value;

            const phone = document.getElementById('phone').value;

            const checkbox = document.querySelectorAll('input[name="habilidades"]:checked')
            
            var checkBoxSelected = []
            checkbox.forEach((type)=>{
                checkBoxSelected.push(type.value)
            })

            
            console.log(checkBoxSelected)

        try{
            if(checkBoxSelected.length > 1){
                throw new Error("Insira apenas uma habilidade")
            }
            const formData = {name , email, phone , hability:checkBoxSelected}
            console.log(formData)

            const response = await fetch('https://codigo-certo-chi.vercel.app/enrollment', { // Faz a requisição da api
                method: 'POST',
                headers: {  // Modelo dos dados que sera enviado
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData) // Transforma os dados em tipo json
              })

                if(response.ok){
                    alert("Formulario enviado com sucesso")
                }else{
                    throw new Error("Erro ao enviar o formulario")
                }
        } catch (error) {
                console.log(error.message);
                alert(error.message);
            }
        })
    }else {
        console.log('Form not found');
    }
}


registrationForms();