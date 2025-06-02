function validarRegistro() {
  const nombre = prompt("Ingresa tu nombre:");
  const email = prompt("Ingresa tu email:");
  const mensaje = prompt("Ahora ingresa tu mensaje:");

  console.log("Nombre:", nombre);
  console.log("Email:", email);
  console.log("Mensaje:", mensaje);

  if (nombre === "") {
    alert("⚠️ Por favor ingresa tu nombre");
  } else if (email === "") {
    alert("⚠️ Por favor ingresa tu correo electrónico");
  } else if (!email.includes("@") || !email.includes(".")) {
    alert("⚠️ Por favor ingresa un correo válido");
  } else if (password === "") {
    alert("⚠️ Por favor ingresa una contraseña");  
  } else if (password.length < 6) {
    alert("⚠️ La contraseña debe tener al menos 6 caracteres.");
  } else if (password !== confirmPassword) {
    alert("⚠️ Las contraseñas no coinciden.");
  } else {
    alert("✅ Registro exitoso. ¡Bienvenido/a, " + usuario + "!");
  }
}
