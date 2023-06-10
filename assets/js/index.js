 // Manipulador de evento para clique
 const button = document.querySelector('.button');
 button.addEventListener('click', function() {
     // Ação a ser executada quando o botão for clicado
     alert('Você clicou no botão!');
 });

 // Manipulador de evento para mouseover
 const banner = document.querySelector('.banner');
 banner.addEventListener('mouseover', function() {
     // Ação a ser executada quando o mouse estiver sobre o banner
     banner.style.opacity = '0.7'; // Exemplo de alteração visual
 });

 banner.addEventListener('mouseout', function() {
     // Ação a ser executada quando o mouse sair do banner
     banner.style.opacity = '1'; // Exemplo de alteração visual
 });

 // Manipulador de evento para scroll
 window.addEventListener('scroll', function() {
     // Ação a ser executada quando ocorrer scroll
     document.body.style.backgroundColor = 'lightgray'; // Exemplo de alteração visual
 });

 // Manipulador de evento para teclas pressionadas
 document.addEventListener('keydown', function(event) {
     // Verificar qual tecla foi pressionada
     if (event.key === 'Enter') {
         // Ação a ser executada quando a tecla Enter for pressionada
         document.body.style.backgroundColor = 'white'; // Exemplo de alteração visual
     }
 });