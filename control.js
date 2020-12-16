// CAPTURO LO QUE COMPLETAN EN USUARIO Y CONTRASEÑA
let user = document.querySelector('#user');
let pass = document.querySelector('#pass');

// PONGO UNA ESCUCHA EN EL BOTON DE INGRESAR
let submit = document.querySelector('#access').addEventListener('click', function() {

    // SI EL VALOR DE USUARIO Y CONTRASEÑA ES DISTINTO DE "" VACIO
    if (user.value != "" && pass.value != "") {
        const expression = /@/;

        // CHEQUEA QUE EL USUARIO TENGA ARROBA, SI TIENE...
        if (expression.test(user.value)) {
            alert("Formulario enviado");

        // SI NO TIENE MANDA ESTE MENSAJE
        } else {
            alert("El usuario debe contener @");
        }

    // SI LOS VALORES DE USARIO O CONTRASEÑA ESTAN VACIOS MANDA
    } else {
        alert("Debes completar los dos campos");
    }
}
)
