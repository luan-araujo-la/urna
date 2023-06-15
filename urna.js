function inserir(num) {
    var num1 = document.getElementById("campo1").value;
    var num2 = document.getElementById("campo2").value;

    if (num1 == "") {
        document.getElementById("campo1").value = num;
    } else if (num2 == "") {
        document.getElementById("campo2").value = num;
    }
        
}

function corrige() {
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
}

function confirma() {
    var num1 = parseInt(document.getElementById("campo1").value);
    var num2 = parseInt(document.getElementById("campo2").value);
    var candidado = (num1 * 10) + num2;
    if (sessionStorage.getItem(candidado) !== null) {
        votos = parseInt(sessionStorage.getItem(candidado)) + 1;
        sessionStorage.setItem(candidado, votos);
    } else {
        sessionStorage.setItem(candidado, 1);
        
    }
    alert("Confirmado voto no candidato "+candidado)
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
}

function resultado() {
    document.getElementById("resultado").innerHTML = ""
    for(i=0;i<100;i++){
        if (sessionStorage.getItem(i) !== null) {
            switch (i) {
                case 00:
                    document.getElementById("resultado").innerHTML += "Candidato <b>Bruno Silva</b> tem "+sessionStorage.getItem(i)+" votos<br/>";
                break;
                case 01:
                    document.getElementById("resultado").innerHTML += "Candidato <b>Dudinha</b> tem "+sessionStorage.getItem(i)+" votos<br/>";
                break;
                case 02:
                    document.getElementById("resultado").innerHTML += "Candidato <b>Geovana</b> tem "+sessionStorage.getItem(i)+" votos<br/>";
                break;
                case 03:
                    document.getElementById("resultado").innerHTML += "Candidato <b>Ingrid</b> tem "+sessionStorage.getItem(i)+" votos<br/>";
                break;
                case 04:
                    document.getElementById("resultado").innerHTML += "Candidato <b>Isabela</b> tem "+sessionStorage.getItem(i)+" votos<br/>";
                break;
                case 05:
                    document.getElementById("resultado").innerHTML += "Candidato <b>Jennifer</b> tem "+sessionStorage.getItem(i)+" votos<br/>";
                break;
                case 06:
                    document.getElementById("resultado").innerHTML += "Candidato <b>João Paulo</b> tem "+sessionStorage.getItem(i)+" votos<br/>";
                break;
                case 07:
                    document.getElementById("resultado").innerHTML += "Candidato <b>Joyce</b> tem "+sessionStorage.getItem(i)+" votos<br/>";
                break;
                case 08:
                    document.getElementById("resultado").innerHTML += "Candidato <b>Maria Eduarda</b> tem "+sessionStorage.getItem(i)+" votos<br/>";
                break;
                case 09:
                    document.getElementById("resultado").innerHTML += "Candidato <b>Matheus Araujo</b> tem "+sessionStorage.getItem(i)+" votos<br/>";
                break;
                case 10:
                    document.getElementById("resultado").innerHTML += "Candidato <b>Matheus Barbosa</b> tem "+sessionStorage.getItem(i)+" votos<br/>";
                break;
                case 11:
                    document.getElementById("resultado").innerHTML += "Candidato <b>Melissa</b> tem "+sessionStorage.getItem(i)+" votos<br/>";
                break;
                case 12:
                    document.getElementById("resultado").innerHTML += "Candidato <b>Priscila</b> tem "+sessionStorage.getItem(i)+" votos<br/>";
                break;
            
                default:
                    document.getElementById("resultado").innerHTML += "VOTOS <b>EM BRANCO</b> <br/>";
                break;
            }
        }
    }
}