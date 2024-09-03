import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';


import {db} from "./config/db"
import {router as user } from "./routes/user";
import {router} from "./routes/user";

dotenv.config();

const app: Express = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port = process.env.PORT || 3000;

//Cuando llegue un slash, por el metodo get
//Haga, ejectue esta funcion
app.get('/', (req: Request, res: Response) =>{
    res.send('Hello World');
}); 

app.use('/api/posts', router);
app.use('/api/users', user);

//Escuche por este puerto, y apenas termine, imprima
// Si la db se conecta, entonces crea la app, escucha
db.then(()=> {
    app.listen(port, () =>{
        console.log(`Server is running on port ${port}`);
    })
})
    