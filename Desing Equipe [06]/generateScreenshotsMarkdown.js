const fs = require('fs');
const path = require('path');

const imageDir = 'Prints das telas/';
const imageDirGitHub = 'https://github.com/codigocerto/equipe06/blob/develop/Desing%20Equipe%20[06]/Prints%20das%20telas/';
const outputFile = 'screenshots.md';

fs.readdir(imageDir, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  let markdownContent = '# Capturas de Tela do Projeto\n\n';
  markdownContent += 'Aqui estão todas as capturas de tela do projeto, exibidas em sequência para fácil visualização.\n\n';

  files
    .filter(file => file.endsWith('.png') || file.endsWith('.jpg'))
    .sort()
    .forEach((file, index) => {
      markdownContent += `## Captura de Tela ${index + 1}\n`;
      markdownContent += `![Captura de Tela ${index + 1}](${path.join(imageDirGitHub, file).replaceAll(" ","%20")})\n\n`;
    });

  fs.writeFile(outputFile, markdownContent, (err) => {
    if (err) {
      console.error('Could not write the file.', err);
      process.exit(1);
    }
    console.log(`File ${outputFile} has been saved.`);
  });
});
