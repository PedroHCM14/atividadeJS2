// Classificando terremotos de acordo com a tabela abaixo:


// Magnitude 	    Categoria

// Menor que 2.0 	Micro
// Entre 2.0 e 2.9 	Muito pequeno
// Entre 3.0 e 3.9 	Pequeno
// Entre 4.0 e 4.9 	Ligeiro
// Entre 5.0 e 5.9 	Moderado
// Entre 6.0 e 6.9 	Forte
// Entre 7.0 e 7.9 	Grande
// Entre 8.0 e 8.9 	Importante
// Entre 9.0 e 9.9 	Excepcional
// Maior que 10.0 	Extremo


function mag() {
    var magInfo = parseFloat(prompt("Informe o valor da magnitude:"));

    if (magInfo < 2) {
        alert("Um sismo de magnitude " + magInfo + " é considerado um microterremoto.");
    }
    else if (magInfo >= 2 && magInfo <= 2.9) {
        alert("Um sismo de magnitude " + magInfo + " é considerado um terremoto muito pequeno.");
    }
    else if (magInfo >= 3 && magInfo <= 3.9) {
        alert("Um sismo de magnitude " + magInfo + " é considerado um terremoto pequeno.");
    }
    else if (magInfo >= 4 && magInfo <= 4.9) {
        alert("Um sismo de magnitude " + magInfo + " é considerado um ligeiro terremoto.");
    }
    else if (magInfo >= 5 && magInfo <= 5.9) {
        alert("Um sismo de magnitude " + magInfo + " é considerado um terremoto moderado.");
    }
    else if (magInfo >= 6 && magInfo <= 6.9) {
        alert("Um sismo de magnitude " + magInfo + " é considerado um terremoto forte.");
    }
    else if (magInfo >= 7 && magInfo <= 7.9) {
        alert("Um sismo de magnitude " + magInfo + " é considerado um terremoto grande.");
    }
    else if (magInfo >= 8 && magInfo <= 8.9) {
        alert("Um sismo de magnitude " + magInfo + " é considerado um terremoto importante.");
    }
    else if (magInfo >= 9 && magInfo <= 9.9) {
        alert("Um sismo de magnitude " + magInfo + " é considerado um terremoto excepcional.");
    }
    else if (magInfo >= 10) {
        alert("Um sismo de magnitude " + magInfo + " é considerado um terremoto extremo.");
    }
    else {
        alert("Valor inválido.")
    }
}

mag();