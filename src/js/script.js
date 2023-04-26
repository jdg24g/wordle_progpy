const BOTON = document.getElementById('guess-button')
let intentos = 6
let palabra = ['APPLE','MANGO','GREEN','BEACH','RIVER']
var aleatorio = palabra[Math.floor(Math.random()*palabra.length)];
console.log(aleatorio)

BOTON.addEventListener('click', intentar)


function intentar() {
    let intento = document.getElementById('guess-input').value
    if(intento != 0){
        console.log('funciona')
        const INTENTO = intento.toUpperCase()
        if(INTENTO === aleatorio){
            final('<h2 class="error">Ganaste</h2>')
            return
        }

        const GRID = document.getElementById('cuadro')
        const ROW = document.createElement('div')
        ROW.className = 'row'
        for (let i in aleatorio){
            const SPAN = document.createElement('span')
            SPAN.className = 'letter'
            SPAN.innerHTML = INTENTO[i]
            if(INTENTO[i] == aleatorio[i]){
                SPAN.style.backgroundColor = "#79b851"
            }else if(aleatorio.includes(INTENTO[i])){
                SPAN.style.backgroundColor = "yellow"
            }else{
                SPAN.style.backgroundColor = "gray"
            }
            GRID.appendChild(SPAN)
        }
        GRID.appendChild(ROW)

        intentos--
        if(intentos == 0){
            final('<h2 class="error">PERDISTE</h2>')
        }

    }else{
        console.log('no funciona')
    }
    
}

function final(mensaje){
    const INPUT = document.getElementById('guess-input')
    INPUT.disabled = true
    BOTON.disabled = true
    let contenedor = document.getElementById('guesses')
    contenedor.innerHTML = mensaje
}