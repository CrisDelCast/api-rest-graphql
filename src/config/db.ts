import mongoose from 'mongoose';
import dotenv  from 'dotenv';

dotenv.config

//El archivo de configuracion es el que voy a conectar a la variable. sino entonces que se conecte al localhost
const connectionString = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017'

export const db = mongoose.connect(connectionString)
                            .then(
                                () => console.log("Connected to MongoDB")
                            ).catch(
                                (err) => console.log("Database error: ", err)
                            )