# Funcion validacion de formulario para registro de nuevos usuarios.

*¿Cómo funciona la función?*
La funcion tiene varios pasos a validar con diferentes alerts dependiendo si se completaron los campos solicitados o no.

1.Verifica que todos los campos estén completos:
Si alguno de los valores está vacío (""), devuelve un mensaje de advertencia.

2.Valida el formato del email:
Usa .includes("@") y .includes(".") para comprobar que el correo tenga el formato básico correcto.

3.Controla que la contraseña tenga al menos 6 caracteres:
Esto ayuda a mejorar la seguridad.

4.Compara la contraseña con su confirmación:
Si no coinciden, devuelve un mensaje de error.

5.Si todo está bien:
Retorna un mensaje de éxito personalizado con el nombre de usuario.


*¿Por qué es útil o necesaria para su proyecto?*
Es una funcion importante para validad que los datos que el usuario ingrese son correctos y validos. En el caso de nuestro proyecto grupal, tenemos la opcion de "iniciar sesion" donde en caso de no tener una sesion, te podes registrar. Esta funcion la pensamos para el area de registro.


*¿Cómo la pensaron y cómo la implementaron?*
Se identificaron los campos clave de un registro: nombre de usuario, email y contraseñas para luego pensar en que validaciones básicas son necesarias para que los datos fueran aceptables y guiar al usuario.
