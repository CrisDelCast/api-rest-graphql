import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// Importar la configuración de la base de datos
import db from './config/db';
// Importar los enrutadores de las rutas
import { router as userRouter } from './routes/userRoutes';
import { router as postRouter } from './routes/postRoutes';
import { router as commentRouter } from './routes/commentRoutes';
import { router as reactionRouter } from './routes/reactionRoutes';


// Configurar dotenv
dotenv.config();

const app: Express = express();

// Middleware para procesar JSON y URL encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', postRouter); 


const port = process.env.PORT || 3000;

// Ruta de prueba
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
});

// Configuración de rutas
app.use('/api/posts', postRouter);
app.use('/api/users', userRouter);
app.use('/api/comments', commentRouter);
app.use('/api/reactions', reactionRouter);


// Conexión a la base de datos y arranque del servidor
db
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error('Failed to connect to the database:', err);
    });
