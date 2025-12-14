
let count = 0;
const max = 10
let counter = document.querySelector("#counter");
const buttonUp = document.querySelector("#add");
const mode = document.querySelector("#mode");
const iconDay = document.querySelector("#sun")
const iconNight = document.querySelector("#night")
const containerCounter = document.querySelector(".containerCounter")
const resetButton = document.querySelector("#reset")

let isActiveMode = false
function incrementarContador() {
    if (count < max) {
         quitActiveButton()
        counter.textContent = ++count
        setTimeout(() => {
            removeClassTransition()
        }, 500)
        addClassTransition();

    } else {
      setDisableButton()
    }
}

function decrementarContador() {
    let newValue = count - 1
    if (newValue < 0) {
        counter.textContent = 0
    } else {
        count = newValue
        counter.textContent = count;
        quitActiveButton()
        setTimeout(() => {
            removeClassTransition()
        }, 500)
        addClassTransition();
    }
}

function resetContador() {
    counter.textContent = 0
    count = 0
}

function addClassTransition() {
    counter.classList.add("animate__bounceOut")
}

function removeClassTransition() {
    counter.classList.remove("animate__bounceOut");
}

function setDisableButton() {
    buttonUp.disabled = true
    buttonUp.style.opacity = 0.4
}

function quitActiveButton() {
    buttonUp.disabled = false
    buttonUp.style.opacity = 1
}

function modeScreen() {
    isActiveMode = !isActiveMode;
    if (isActiveMode) {
        mode.style.backgroundColor = "#0C090A";
        mode.style.color = "white";
        iconDay.style.display = "block";
        iconNight.style.display = "none"
        resetButton.style.color = "red"
    } else {
        mode.style.backgroundColor = "#FFFFFF";
        mode.style.color = "#0C090A";
        iconNight.style.display = "block";
        iconDay.style.display = "none";
    }

}

document.getElementById("add").addEventListener("click", incrementarContador)
document.getElementById("rest").addEventListener("click", decrementarContador)
document.getElementById("reset").addEventListener("click", resetContador)
document.getElementById("night").addEventListener("click", modeScreen)
document.getElementById("sun").addEventListener("click", modeScreen)
