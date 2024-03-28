function calcularPerimetro(cantLados, largoLado, radio){
    if(cantLados === 0){
        let perimetro = 2 * 3.14159 * largoLado
        prompt("El perimetro del circulo es: " + perimetro)
    }else if (cantLados === 3){
            let perimetro = cantLados * largoLado
            prompt("Usted ingreso 3, lo que corresponde con un triangulo." + "\n" + "El perimetro del triangulo es: " + perimetro)
    }else if (cantLados === 4){
            let perimetro = cantLados * largoLado
            prompt("Usted ingreso 4, lo que corresponde con un cuadrado." + "\n" + "El perimetro del cuadrado es: " + perimetro)
    }else if (cantLados === 5){
            let perimetro = cantLados * largoLado
            prompt("Usted ingreso 5, lo que corresponde con un pentagono." + "\n" + "El perimetro del pentagono es: " + perimetro)
    }else if (cantLados === 6){
            let perimetro = cantLados * largoLado
            prompt("Usted ingreso 6, lo que corresponde con un hexagono." + "\n" + "El perimetro del hexagono es: " + perimetro)
    }else if (cantLados > 6){
            let perimetro = cantLados * largoLado
            prompt("Usted ingreso un numero mayor a 6, lo que corresponde con un pologono." + "\n" + "El perimetro del poligono es: " + perimetro)
    }
}

function ejecutarApp(){
    let cantLados = prompt("Ingrese la cantidad de lados: ")
    let auxCantLados = Number(cantLados)
    let radio = 0
    let largo = 0
    if(auxCantLados < 0 || auxCantLados === 1 || auxCantLados === 2){
        prompt("Usted ingreso un valor incorrecto")
    }else if (auxCantLados === 0){
        let nuevoRadio = prompt("Ingrese el valor del radio: ")
        let auxNuevoRadio = Number(nuevoRadio)
        if(auxNuevoRadio < 0){
            prompt("Usted ingreso un valor incorrecto")
        }else{
            radio = auxNuevoRadio
        }
    }else {
        let nuevoLargo = prompt("Ingrese el largo: ")
        let auxLargo = Number(nuevoLargo)
        if (auxLargo < 0){
            prompt("Usted ingreso un valor incorrecto")
        }else{
            largo = auxLargo
        }
    }
    calcularPerimetro(auxCantLados, largo, radio)
}

ejecutarApp()
