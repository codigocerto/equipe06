const submitForms = () => {
    console.log('submitForms function called'); // Log para verificar se a função está sendo chamada
  
    const form = document.getElementById('contactForms'); //Pega as informaçoes do formulario
  
    if (form) {
      form.addEventListener('submit', async function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário
        console.log('Form submission prevented'); // Log para verificar se o preventDefault está sendo chamado
  
        const name = document.getElementById('name').value; // Pega o valor do input com o id name
        const email = document.getElementById('email').value; // Pega o valor do input com o id email
        const message = document.getElementById('message').value; // Pega o valor do input com o id message
    
        try {
          const formData = { name, email, content: message }; // Cria um objeto com as informaçoes do formulario para que tenha um padrao
          const response = await fetch('https://codigo-certo-chi.vercel.app/sac', { // Faz a requisição da api
            method: 'POST',
            headers: {  // Modelo dos dados que sera enviado
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData) // Transforma os dados em tipo json
          })
  
          if (response.ok) {
              alert("Formulário enviado com sucesso");
          } else {
              alert("Erro ao enviar o formulário");
          }
        } catch (error) {
          console.log("Erro ao enviar o formulário", error);
          alert("Erro ao enviar o formulário");
        }
      });
    } else {
      console.log('Form not found');
    }
  }
  
  // Chama a função para adicionar o event listener ao formulário
  submitForms();
  