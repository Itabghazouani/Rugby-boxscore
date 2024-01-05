let countFr = 0
const countFrEl = document.getElementById("count-fr-el")
const fiveFrBtn = document.getElementById("five-fr-btn")
const threeFrBtn = document.getElementById("three-fr-btn")
const twoFrBtn = document.getElementById("two-fr-btn")

let countEn = 0
const countEnEl = document.getElementById("count-en-el")
const fiveEnBtn = document.getElementById("five-en-btn")
const threeEnBtn = document.getElementById("three-en-btn")
const twoEnBtn = document.getElementById("two-en-btn")

function frenchScore(score) {
    score.addEventListener("click", function() {
        if (score === fiveFrBtn) {
            countFr += 5
            return countFrEl.textContent = countFr
        } else if (score === threeFrBtn) {
            countFr += 3
            return countFrEl.textContent = countFr
        } else if (score === twoFrBtn) {
            countFr += 2
            return countFrEl.textContent = countFr
        }
    })
}

frenchScore(fiveFrBtn)
frenchScore(threeFrBtn)
frenchScore(twoFrBtn)

function englishScore(score) {
    score.addEventListener("click", function() {
        if (score === fiveEnBtn) {
            countEn += 5
            return countEnEl.textContent = countEn
        } else if (score === threeEnBtn) {
            countEn += 3
            return countEnEl.textContent = countEn
        } else if (score === twoEnBtn) {
            countEn += 2
            return countEnEl.textContent = countEn
        }
    })
}

englishScore(fiveEnBtn)
englishScore(threeEnBtn)
englishScore(twoEnBtn)
/*
"new-game-el"*/
const newGameEl = document.getElementById("new-game-el")
function resetFrance() {
    countFr = 0
    return  countFrEl.textContent = countFr
}

function resetEngland() {
    countEn = 0
    return  countEnEl.textContent = countEn
}
function newGame() {
    newGameEl.addEventListener("click", function() {
        resetEngland()
        resetFrance()
    })
}

newGame()
