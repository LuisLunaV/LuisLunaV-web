import express from 'express';
import { authRouter } from '../routes/index.routes';
import { dbConnection } from '../database/config.db';
export class Server{
    private readonly app = express();
    private readonly port:number;
    private pathsWeb = {
        auth: '/auth'
    }

    constructor( port:number ){
        this.port = port;
        this.connectDB();
    }

     private async connectDB(){
        await dbConnection();
    } 

    public start(){

    //Middleware
    this.app.use(express.json());
    this.app.use(express.static('public'));
    
    // Usar las rutas definidas    
    this.app.use( this.pathsWeb.auth, authRouter);
    
    
    this.app.listen(this.port,()=>{
        console.log(`Servidor levantado en puerto: ${this.port}`)
    });
   }
}