let amigos = [];

function agregarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let amigoNombre = amigoInput.value.trim();

    if (amigoNombre === '') {
        alert('Por favor, ingresa un nombre.');
        return;
    }

    if (amigos.includes(amigoNombre)) {
        alert('Este nombre ya ha sido agregado.');
        amigoInput.value = '';
        return;
    }

    amigos.push(amigoNombre);

    let lista = document.getElementById('listaAmigos');
    let li = document.createElement('li');
    li.textContent = amigoNombre;
    li.classList.add('name-list-item');
    lista.appendChild(li);

    amigoInput.value = '';
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Se necesitan al menos dos amigos para el sorteo.');
        return;
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    let amigosSorteados = [...amigos];
    shuffleArray(amigosSorteados);

    for (let i = 0; i < amigos.length; i++) {
        let sorteadoPara = amigosSorteados[i];
        let sorteadoPor = amigos[i];

        if (sorteadoPara === sorteadoPor) {
            alert('¡Ocurrió un error! La misma persona se sorteó a sí misma. Reintentando el sorteo...');
            sortearAmigo();
            return;
        }

        let p = document.createElement('p');
        p.textContent = `${sorteadoPor} --> ${sorteadoPara}`;
        p.classList.add('result-list-item');
        resultado.appendChild(p);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}