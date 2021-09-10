// declaração dos objetos html
const itemQuestion = document.querySelectorAll('.details-faq') 

for(let x = 0; x < itemQuestion.length; x++){
itemQuestion[x].addEventListener('click', alternIcon)

function alternIcon(){
    if(itemQuestion[x].open == true){
    itemQuestion[x].children[0].children[1].innerText= "expand_more"
    } else {
    itemQuestion[x].children[0].children[1].innerText= "expand_less"
    }
}  
}