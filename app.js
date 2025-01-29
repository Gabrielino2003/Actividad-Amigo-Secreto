const amigos = document.getElementById('listaAmigos');
const listaAmigos = [];

const agregarAmigo = () => {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    
    if (!nombre) {
        alert('Ingrese un nombre válido');
        return;
    }

    listaAmigos.push(nombre);
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombre;
    amigos.appendChild(nuevoAmigo);
    
    inputAmigo.value = '';
};

const sortearAmigo = () => {
    if (listaAmigos.length < 2) {
        alert('Ingrese al menos dos amigos');
        return;
    }

    const amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    document.getElementById('resultado').textContent = `El amigo secreto es: ${amigoSecreto}`;
};
