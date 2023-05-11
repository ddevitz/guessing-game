// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener("keydown", keyEnter)

// funções 
function handleTryClick(event) {
    event.preventDefault()
    
    const inputNumber = document.querySelector("#inputNumber")
    
    if(Number(inputNumber.value) == randomNumber && xAttempts == 1){
        toggleScreen()
        screen2.querySelector("h2").innerText = `Uau, você acertou de primeira!`

    } else if(Number(inputNumber.value) == randomNumber){
        toggleScreen()
        screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas.`
    }

    if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10){
        alert("Os números vão de 0 a 10. Tente novamente com um número válido.")
    }

    inputNumber.value = ""
    xAttempts++
}

function handleResetClick(){
    toggleScreen()
    randomNumber = Math.round(Math.random() * 10)
    xAttempts = 1
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function keyEnter(e){
    if(e.key == "Enter" && screen1.classList.contains('hide')){
        handleResetClick()
    }
}