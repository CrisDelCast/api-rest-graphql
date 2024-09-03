import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// El archivo de configuración es el que se conecta a la variable; si no está, se conecta al localhost
const connectionString = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017';

const db = mongoose.connect(connectionString, {
  // 'useNewUrlParser' y 'useUnifiedTopology' ya están habilitados por defecto en mongoose 6.x
  // Si necesitas habilitar otras opciones, agrégalas aquí
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log("Database error: ", err));

export default db;
