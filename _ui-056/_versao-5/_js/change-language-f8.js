// procurar no documento o elemento
const itensLanguage = document.querySelector('#change-language')
const langaguePT = document.querySelector('[language=portugues]')
const langagueEN = document.querySelector('[language=english]')
const iconCheck = document.querySelector('#icon-check-language')


langaguePT.onclick = event => {
    langaguePT.children[1].style.display = 'initial'
    langagueEN.children[1].style.display = 'none'
   }  

langagueEN.onclick = event => {
    langagueEN.children[1].style.display = 'initial'
    langaguePT.children[1].style.display = 'none'
   } 