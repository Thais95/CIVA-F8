 // BOTAO TOGGLE ATIVAR DESATIVAR USUARIO
 const btnToggle = document.querySelector('.toggle-btn')
 const toggleName = document.querySelector('.toggle-name')

 btnToggle.onclick = event => {


 btnToggle.classList.toggle('active-toggle')

 if(btnToggle.classList == 'toggle-btn'){

     toggleName.textContent = 'Ativado' 

 }  else { 

 toggleName.textContent = 'Desativado'

}
}