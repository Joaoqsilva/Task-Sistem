
let maxDiv = 8;
let minDiv = 0;
let input = document.querySelector('#inp');
let inputValue = input.value;
let listaDeAfazeres = document.querySelector('.lista-afazeres'); //  <div class="lista-afazeres"> 

let btn = document.querySelector('.btn').addEventListener('click', () => {
  
  if (input.value === '') {
    alert('Escreva Algo')
    return;
  }else if(minDiv < maxDiv) {
  var lista = document.createElement('div'); // aqui foi criado os input de lista  
  lista.className = 'list'; // aqui esta dando uma classe para o input de lista
  listaDeAfazeres.appendChild(lista); // aqui o input de lista esta sendo inserido na lista de afazeres
 
  var p = document.createElement('p'); // aqui foi criado um paragrafo para o texto ser inserido
  lista.appendChild(p); // o texto esta sendo inserido no input de lista
  p.textContent = input.value;  // aqui esta fazendo o texto (valor) inserido no input texto

  var divIcon = document.createElement('div'); // aqui esta criando a div onde fica os icones
  divIcon.classList = 'icons'; //aqui esta dando uma classe para a div de icones para ele ficar estilizado
  lista.appendChild(divIcon)
  var btnDeleteIcon = document.createElement('button') // aqui esta criando um button
  var deleteIcon = document.createElement('i'); // aqui esta criando um icon
  deleteIcon.className = 'fa-solid fa-trash'; // aqui esta dando o icone direto do font awesome
  divIcon.appendChild(btnDeleteIcon); // o botao de dele esta sendo inserido na div icons
  btnDeleteIcon.appendChild(deleteIcon); // o icone esta sendo inserido no botao de delete
 // aqui o botao esta sendo inserido na lista 
  btnDeleteIcon.className = 'econ'; // aqui esta dando stylo ao botao delete




  var btnEditiIcon = document.createElement('button') //aqui esta criando o botao
  var EditiIcon = document.createElement('i'); // esta sendo criado o icone
  EditiIcon.className = 'fa-solid fa-pen';// aqui esta dando o icone direto do font awesome

  divIcon.appendChild(btnEditiIcon); // aqui o botao de edit esta sendo inserido na div de icones
  btnEditiIcon.appendChild(EditiIcon);// aqui o icone esta sendo inserido no bottao
 // aqui o botao esta sendo inserido na div de lista
  btnEditiIcon.className = 'econ';// aqui esta dando stylo ao botao edit


  function editar() {
input.value = input.textContent = "";
}btnEditiIcon.addEventListener('click', editar)




function excluir() {
const lista = this.parentElement.parentElement;
lista.remove();
minDiv--;
}btnDeleteIcon.addEventListener('click', excluir) 


minDiv++;
};
});

