var animal = {
    perro: "Ladra",
    gato: "Maulla",
    vaca: "Mujido"
}


var animalingresado = prompt("Ingrese un nombre de un animal:");


switch (animalingresado) {

    case "perro":
        document.write(animal.perro);
        break;

    case "gato":
        document.write(animal.gato);
        break;

    case "vaca":
        document.write(animal.vaca);
        break;

    default:
        document.write("Caso no reconocido");
        break;
}