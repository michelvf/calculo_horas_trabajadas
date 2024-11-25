document.addEventListener('DOMContentLoaded', function() {

    // Calcular lo que tiene el formulario
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('hay que calcular')
    // fin de la funcion calcular
    })

    document.getElementById('add').addEventListener('click', function() {
        input = '<div id="fechas"> \
                    Fecha: <input id="fecha" type="date" name="fecha" value="" /> \
                    Hora inicial <input id="h1" type="time" step="2" name="h1" value="" /> \
                    Hora final <input id="h2" type="time" step="2" name="h2" value="" /> \
                    <button id="mas" onclick="mas()">+</button> \
                </div>'
        document.getElementById('add').remove();
        const additionalInputs = document.getElementById('mas');
        const newDiv = document.createElement('div');
        newDiv.innerHTML = input;
        additionalInputs.appendChild(newDiv);

        // const newInputDate = document.createElement('input');
        // newInputDate.type = 'date';
        // newInputDate.name = 'fecha';
        // const newInputTime1 = document.createElement('input')
        // newInputTime1.type = 'time'
        // newInputTime1.name = 'h1'
        // newInputTime1.step = '2'
        // const newInputTime2 = document.createElement('input')
        // newInputTime2.type = 'time'
        // newInputTime2.name = 'h1'
        // newInputTime2.step = '2'
        // const newButton = document.createElement('button')
        // newButton.textContent = '+'
        // newButton.id = 'mas'
        // newButton.onclick = 'mas()'
        // textFecha = document.createTextNode('Fecha: ')
        // hora1 = document.createTextNode('Hora inicial: ')
        // hora2 = document.createTextNode('Hora final: ')
        // espacio = document.createTextNode(' ')
        // espacio2 = document.createTextNode(' ')
        // espacio3 = document.createTextNode(' ')
        // newDiv.appendChild(textFecha)
        // newDiv.appendChild(newInputDate);
        // newDiv.appendChild(espacio)
        // newDiv.appendChild(hora1)
        // newDiv.appendChild(newInputTime1)
        // newDiv.appendChild(espacio2)
        // newDiv.appendChild(hora2)
        // newDiv.appendChild(newInputTime2)
        // //newDiv.appendChild(espacio3)
        // newDiv.appendChild(newButton)
        // additionalInputs.appendChild(newDiv);
        console.log('le di click al +')
    // fin de la funcion mas
    })

// Fin del Linstener global
})
