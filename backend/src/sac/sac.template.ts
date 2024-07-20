// Template de e-mail para Organização
// Este template é usado para informar a equipe interna sobre um novo contato recebido através da landing page.

export const textoEmail = (nome: string,email: string,mensagem: string) =>{
     return `
     <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Novo Contato Recebido</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            line-height: 1.6;
        }
        .container {
            width: 80%;
            margin: 0 auto;
        }
        .header {
            background-color: black;
            padding: 10px 20px;
            text-align: center;
            color: white;
        }
        .content {
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ddd;
        }
        .footer {
            text-align: center;
            padding: 10px 20px;
            background-color: #e53939;
            color: white;
            font-size: 0.8em;
        }
    </style>
</head>
<body>
    <div class="container">
    	<h4> 🚀 Equipe de Desenvolvimento | Codigo Certo Coders [06]</h4> 
        <div class="header">        	
            <img src="https://github.com/codigocerto/equipe06/assets/106245486/302a4c81-1343-47e4-8ddf-b11c502f51ba" width="100%" alt="Codigo Certo Coders" title="Codigo Certo Coders" />
            <h3>Novo Contato Recebido</h3>
        </div>
        <div class="content">
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mensagem:</strong> ${mensagem}</p>
        </div>
        <div class="footer">
            <p>Este é um e-mail automático. Por favor, não responda.</p>
        </div>
    </div>
</body>
</html>
`;
    
    };

export const textoEmailObrigado = (nome: string) =>{
     return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Novo Contato Recebido</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            line-height: 1.6;
        }
        .container {
            width: 80%;
            margin: 0 auto;
        }
        .header {
            background-color: black;
            padding: 10px 20px;
            text-align: center;
            color: white;
        }
        .content {
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ddd;
        }
        .footer {
            text-align: center;
            padding: 10px 20px;
            background-color: #e53939;
            color: white;
            font-size: 0.8em;
        }
    </style>
</head>
<body>  
    	<h4> 🚀 Equipe de Desenvolvimento | Codigo Certo Coders [06]</h4> 
        <div class="header">        	
            <img src="https://github.com/codigocerto/equipe06/assets/106245486/302a4c81-1343-47e4-8ddf-b11c502f51ba" width="100%" alt="Codigo Certo Coders" title="Codigo Certo Coders" />
            <h1>Obrigado pelo Contato!</h1>
        </div>
        <div class="content">
            <p>Olá ${nome},</p>
            <p>Agradecemos por entrar em contato conosco. Recebemos sua mensagem e nossa equipe retornará o mais breve possível.</p>
            <p>Atenciosamente,</p>
            <p>Equipe Código Certo Coders</p>
        </div>
        <div class="footer">
            <p>Este é um e-mail automático. Por favor, não responda.</p>
        </div>
</body>
</html>
     
     `;
};