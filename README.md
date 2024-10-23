# Landing Page Call of Duty Warzone

Este repositório contém uma landing page dedicada ao jogo *Call of Duty Warzone*. O projeto foi desenvolvido para fins educativos e não está afiliado oficialmente à Activision.

## Como visualizar o projeto localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/Kauansct/landing-page-deploy.git

2. Navegue até o diretório do projeto:
   ```bash
   cd landing-page-deploy/Landing\ page

3. Abra o arquivo index.html no seu navegador preferido.

## APIs Utilizadas

* EmailJS: Utilizada para integrar a funcionalidade de envio de emails na seção de contato da página. O código está localizado no arquivo ```contato.html```:
  ```javascript
  emailjs.init({
   publicKey: "-egfZ4g3xRpUQ_bwd",
  });
  
* YouTube Embed API: Utilizada para exibir vídeos do YouTube relacionados ao jogo em ```index.html```.

* Random User Generator API: Utilizada na página de opiniões para gerar avatares e informações aleatórias dos usuários, proporcionando variedade na exibição de comentários:
  
  ```javascript
  fetch('https://randomuser.me/api/?nat=BR&results=6')
    .then(response => response.json())
    .then(data => {
        const users = data.results;
        // Atualiza os elementos da página com os dados dos usuários
    });  

## Bibliotecas Externas

* Google Fonts: A tipografia da página utiliza as fontes externas ```Anton``` e ```Anton SC```, importadas do Google Fonts.
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Anton+SC&display=swap" rel="stylesheet">
  
* Slick Carousel: Utilizada para a funcionalidade de carrosel na exibição de vídeos no arquivo index.html e sobre.html.
  ```html
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css"/>
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css"/>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>

* AOS (Animate on Scroll): Para animações quando os elementos da página entram em visualização.
  ```html
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

* jQuery: Facilita a manipulação de elementos DOM e interações no projeto, como a inicialização de plugins e efeitos de animação.
  ```html
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

## Estrutura do Site

* ```index.html```(home): Página inicial da landing page.
* ```sobre.html```: Página de informações sobre o jogo e as empresas desenvolvedoras utilizando Slick.
* ```servico.html```:  Apresenta informações detalhadas sobre os requisitos para rodar o jogo pelo PC
* ```opinioes.html```: Página de opiniões com animações usando AOS.
* ```contato.html```: Página de contato com formulário para envio de emails.
