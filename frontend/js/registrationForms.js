// toastNotifications.js

let toastInstance;

function showToast(message, type = 'success') {
  if (toastInstance) {
    toastInstance.hideToast(); // Esconde a notificação atual antes de mostrar a nova
  }

  toastInstance = Toastify({
    text: message,
    duration: 3000, // Duração em milissegundos
    gravity: 'top', // 'top' ou 'bottom'
    position: 'right', // 'left' ou 'right'
    style: {
      background: type === 'sucess' ? 'linear-gradient(to right, #00b09b, #96c93d)' : 'linear-gradient(to right, #FF5F6D, #FFC371)',
    },
    stopOnFocus: true, // Se deve parar quando focado
  }).showToast();
}

function clearForm() {
  document.getElementById('registrationForms').reset(); // Reseta o formulário
  // Limpa os checkboxes manualmente, se necessário
  document.querySelectorAll('input[name="habilidades"]').forEach((checkbox) => {
    checkbox.checked = false;
  });
}

//FUNÇÃO PARA MOSTRAR O CARREGAMENTO
//MOSTRA O LOADING
const showLoading = () =>{
    document.getElementById('loading-overlay').style.display = 'flex';
}
//ESCONDE O LOADING
const hideLoading = () =>{
  document.getElementById('loading-overlay').style.display = 'none';
}

const registrationForms = () => {
  const forms = document.getElementById('registrationForms');

  if (forms) {
    forms.addEventListener('submit', async function(event) {
      event.preventDefault(); // Evita o envio padrão do formulário

      console.log('Form submission prevented'); // Log para verificar se o preventDefault está sendo chamado
      const checkbox = document.querySelectorAll('input[name="habilidades"]:checked');
      
      var checkBoxSelected = [];
      checkbox.forEach((type) => {
        checkBoxSelected.push(type.value);
      });

      console.log(checkBoxSelected);

      try {
        if (checkBoxSelected.length !== 1) {
          showToast("Insira apenas uma habilidade", 'error');
          throw new Error("Insira apenas uma habilidade");
        }
        const formData = { 
            name:document.getElementById('name').value, 
            email:document.getElementById('email').value, 
            phone:document.getElementById('phone').value, 
            hability: checkBoxSelected

         };
        console.log(formData);

        showLoading();
        
        const response = await fetch('https://codigo-certo-chi.vercel.app/enrollment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {

          setTimeout(function() {
            hideLoading();
            clearForm();
        }, 3000); // Simulando uma requisição de 3 segundos
          showToast("Formulário enviado com sucesso!" , 'sucess');
        } else {
          throw new Error("Erro ao enviar formulário");
        }
      } catch (error) {
        console.log(error.message);
        showToast(error.message, 'error');
      }
    });
  } else {
    console.log('Form not found');
  }
};

registrationForms();
