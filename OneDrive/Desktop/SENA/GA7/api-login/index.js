// Importar express
const express = require("express");

// Crear aplicación
const app = express();

// Permitir recibir datos en formato JSON
app.use(express.json());

// Usuario guardado (simulado)
let usuarioGuardado = {
  usuario: "admin",
  password: "1234"
};

// Ruta de registro
app.post("/registro", (req, res) => {
  const { usuario, password } = req.body;

  // Guardar usuario
  usuarioGuardado = { usuario, password };

  res.json({
    mensaje: "Usuario registrado correctamente"
  });
});

// Ruta de login
app.post("/login", (req, res) => {
  const { usuario, password } = req.body;

  // Validar datos
  if (
    usuario === usuarioGuardado.usuario &&
    password === usuarioGuardado.password
  ) {
    res.json({
      mensaje: "Autenticación satisfactoria"
    });
  } else {
    res.status(401).json({
      mensaje: "Error en la autenticación"
    });
  }
});

// Levantar servidor
app.listen(3001, () => {
  console.log("Servidor corriendo en http://localhost:3001");
});