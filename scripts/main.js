var h1 = document.querySelector('.container-info > h1')
var p = document.querySelector('.container-info > p')
var buttonProjects = document.getElementsByTagName('button')[0]
var buttonENG = document.querySelectorAll('.languages-links a')[0]
var buttonBR = document.querySelectorAll('.languages-links a')[1]
var oldH1Text = h1.innerText
var oldPText = p.innerText
var oldButtonProjectsText = buttonProjects.innerText



buttonBR.addEventListener('click', function updateLanguage(e){
    e.preventDefault()

    h1.innerText = 'E aí! Meu nome é Lucas Henrique.'
    p.innerText = 'Eu sou um estudante de Matemática e um desenvolvedor de software iniciante.'
    buttonProjects.innerText = 'Veja meus projetos'
})

buttonENG.addEventListener('click', function updateLanguage(e){
    e.preventDefault()

    h1.innerText = oldH1Text
    p.innerText = oldPText
    buttonProjects.innerText = oldButtonProjectsText
})