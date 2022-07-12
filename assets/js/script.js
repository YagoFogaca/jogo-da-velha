const btnX = document.querySelectorAll(".x");

const btnO = document.querySelectorAll(".o");

const marcacao = document.querySelectorAll(".marcacao");

const divs = document.querySelectorAll(".campos");

const divisao = document.querySelectorAll(".divisao");

for (let i = 0; i < btnX.length; i++) {
    btnX[i].addEventListener("click", function () {
        btnX[i].style.display = "none";
        btnO[i].style.display = "none";
        divisao[i].style.display = "none";

        const x = (document.createTextNode = "X");

        marcacao[i].innerText = x;

        marcacao[i].style.color = "#f15412";

        marcacao[i].style.display = "block";

        if (marcacao[0].innerText === "X" && marcacao[1].innerText === "X" && marcacao[2].innerText === "X") {
            divs[0].style.backgroundColor = "#00ff00";
            divs[1].style.backgroundColor = "#00ff00";
            divs[2].style.backgroundColor = "#00ff00";
            for (let i = 0; i < btnO.length; i++) {
                btnX[i].style.display = "none";
                btnO[i].style.display = "none";
                divisao[i].style.display = "none";
            }
        } else if (marcacao[0].innerText === "X" && marcacao[4].innerText === "X" && marcacao[8].innerText === "X") {
            divs[0].style.backgroundColor = "#00ff00";
            divs[4].style.backgroundColor = "#00ff00";
            divs[8].style.backgroundColor = "#00ff00";
            for (let i = 0; i < btnO.length; i++) {
                btnX[i].style.display = "none";
                btnO[i].style.display = "none";
                divisao[i].style.display = "none";
            }
        } else if (marcacao[0].innerText === "X" && marcacao[3].innerText === "X" && marcacao[6].innerText === "X") {
            divs[0].style.backgroundColor = "#00ff00";
            divs[3].style.backgroundColor = "#00ff00";
            divs[6].style.backgroundColor = "#00ff00";
            for (let i = 0; i < btnO.length; i++) {
                btnX[i].style.display = "none";
                btnO[i].style.display = "none";
                divisao[i].style.display = "none";
            }
        } else if (marcacao[1].innerText === "X" && marcacao[4].innerText === "X" && marcacao[7].innerText === "X") {
            divs[1].style.backgroundColor = "#00ff00";
            divs[4].style.backgroundColor = "#00ff00";
            divs[7].style.backgroundColor = "#00ff00";
            for (let i = 0; i < btnO.length; i++) {
                btnX[i].style.display = "none";
                btnO[i].style.display = "none";
                divisao[i].style.display = "none";
            }
        } else if (marcacao[2].innerText === "X" && marcacao[5].innerText === "X" && marcacao[8].innerText === "X") {
            divs[2].style.backgroundColor = "#00ff00";
            divs[5].style.backgroundColor = "#00ff00";
            divs[8].style.backgroundColor = "#00ff00";
            for (let i = 0; i < btnO.length; i++) {
                btnX[i].style.display = "none";
                btnO[i].style.display = "none";
                divisao[i].style.display = "none";
            }
        } else if (marcacao[3].innerText === "X" && marcacao[4].innerText === "X" && marcacao[5].innerText === "X") {
            divs[3].style.backgroundColor = "#00ff00";
            divs[4].style.backgroundColor = "#00ff00";
            divs[5].style.backgroundColor = "#00ff00";
            for (let i = 0; i < btnO.length; i++) {
                btnX[i].style.display = "none";
                btnO[i].style.display = "none";
                divisao[i].style.display = "none";
            }
        } else if (marcacao[6].innerText === "X" && marcacao[7].innerText === "X" && marcacao[8].innerText === "X") {
            divs[6].style.backgroundColor = "#00ff00";
            divs[7].style.backgroundColor = "#00ff00";
            divs[8].style.backgroundColor = "#00ff00";
            for (let i = 0; i < btnO.length; i++) {
                btnX[i].style.display = "none";
                btnO[i].style.display = "none";
                divisao[i].style.display = "none";
            }
        } else if (marcacao[6].innerText === "X" && marcacao[4].innerText === "X" && marcacao[2].innerText === "X") {
            divs[6].style.backgroundColor = "#00ff00";
            divs[4].style.backgroundColor = "#00ff00";
            divs[2].style.backgroundColor = "#00ff00";
            for (let i = 0; i < btnO.length; i++) {
                btnX[i].style.display = "none";
                btnO[i].style.display = "none";
                divisao[i].style.display = "none";
            }
        }
    });
}

for (let i = 0; i < btnO.length; i++) {
    btnO[i].addEventListener("click", function () {
        btnX[i].style.display = "none";
        btnO[i].style.display = "none";
        divisao[i].style.display = "none";

        const o = (document.createTextNode = "O");

        marcacao[i].innerText = o;

        marcacao[i].style.color = "#34b3f1";

        marcacao[i].style.display = "block";

        if (marcacao[0].innerText === "O" && marcacao[1].innerText === "O" && marcacao[2].innerText === "O") {
            divs[0].style.backgroundColor = "#00ff00";
            divs[1].style.backgroundColor = "#00ff00";
            divs[2].style.backgroundColor = "#00ff00";
            for (let i = 0; i < btnO.length; i++) {
                btnX[i].style.display = "none";
                btnO[i].style.display = "none";
                divisao[i].style.display = "none";
            }
        } else if (marcacao[0].innerText === "O" && marcacao[4].innerText === "O" && marcacao[8].innerText === "O") {
            divs[0].style.backgroundColor = "#00ff00";
            divs[4].style.backgroundColor = "#00ff00";
            divs[8].style.backgroundColor = "#00ff00";
            for (let i = 0; i < btnO.length; i++) {
                btnX[i].style.display = "none";
                btnO[i].style.display = "none";
                divisao[i].style.display = "none";
            }
        } else if (marcacao[0].innerText === "O" && marcacao[3].innerText === "O" && marcacao[6].innerText === "O") {
            divs[0].style.backgroundColor = "#00ff00";
            divs[3].style.backgroundColor = "#00ff00";
            divs[6].style.backgroundColor = "#00ff00";
            for (let i = 0; i < btnO.length; i++) {
                btnX[i].style.display = "none";
                btnO[i].style.display = "none";
                divisao[i].style.display = "none";
            }
        } else if (marcacao[1].innerText === "O" && marcacao[4].innerText === "O" && marcacao[7].innerText === "O") {
            divs[1].style.backgroundColor = "#00ff00";
            divs[4].style.backgroundColor = "#00ff00";
            divs[7].style.backgroundColor = "#00ff00";
            for (let i = 0; i < btnO.length; i++) {
                btnX[i].style.display = "none";
                btnO[i].style.display = "none";
                divisao[i].style.display = "none";
            }
        } else if (marcacao[2].innerText === "O" && marcacao[5].innerText === "O" && marcacao[8].innerText === "O") {
            divs[2].style.backgroundColor = "#00ff00";
            divs[5].style.backgroundColor = "#00ff00";
            divs[8].style.backgroundColor = "#00ff00";
            for (let i = 0; i < btnO.length; i++) {
                btnX[i].style.display = "none";
                btnO[i].style.display = "none";
                divisao[i].style.display = "none";
            }
        } else if (marcacao[3].innerText === "O" && marcacao[4].innerText === "O" && marcacao[5].innerText === "O") {
            divs[3].style.backgroundColor = "#00ff00";
            divs[4].style.backgroundColor = "#00ff00";
            divs[5].style.backgroundColor = "#00ff00";
            for (let i = 0; i < btnO.length; i++) {
                btnX[i].style.display = "none";
                btnO[i].style.display = "none";
                divisao[i].style.display = "none";
            }
        } else if (marcacao[6].innerText === "O" && marcacao[7].innerText === "O" && marcacao[8].innerText === "O") {
            divs[6].style.backgroundColor = "#00ff00";
            divs[7].style.backgroundColor = "#00ff00";
            divs[8].style.backgroundColor = "#00ff00";
            for (let i = 0; i < btnO.length; i++) {
                btnX[i].style.display = "none";
                btnO[i].style.display = "none";
                divisao[i].style.display = "none";
            }
        } else if (marcacao[6].innerText === "O" && marcacao[4].innerText === "O" && marcacao[2].innerText === "O") {
            divs[6].style.backgroundColor = "#00ff00";
            divs[4].style.backgroundColor = "#00ff00";
            divs[2].style.backgroundColor = "#00ff00";
            for (let i = 0; i < btnO.length; i++) {
                btnX[i].style.display = "none";
                btnO[i].style.display = "none";
                divisao[i].style.display = "none";
            }
        }
    });
}
