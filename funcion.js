function validarRegistro(usuario, email, password, confirmPassword) {
    if (usuario === "" || email === "" || password === "" || confirmPassword === "") {
     return "⚠️ Todos los campos son obligatorios.";
    }

    if (!email.includes("@") || !email.includes(".")) {
     return "⚠️ El correo electrónico no es válido.";
    }

    if (password.length < 6) {
     return "⚠️ La contraseña debe tener al menos 6 caracteres.";
    }

    if (password !== confirmPassword) {
     return "⚠️ Las contraseñas no coinciden.";
    }

    return "✅ Registro exitoso. ¡Bienvenido/a, " + usuario + "!";
}