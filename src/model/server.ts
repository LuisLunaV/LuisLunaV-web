import express from 'express';
import { allRouter, authRouter } from '../routes/index.routes';
import { dbConnection } from '../database/config.db';
import hbs from 'hbs';
import path from 'path';

export class Server{
    private readonly app = express();
    private readonly port:number;
    private pathsWeb = {
        auth: '/auth',
        home: '/home'
    }

    constructor( port:number ){
        this.port = port;
        this.connectDB();
        this.handlebars();
    }

     private async connectDB(){
        await dbConnection();
    } 

    private handlebars(){
        
        this.app.set('view engine', 'hbs');
        this.app.set('views', path.resolve(__dirname, '../views'));
        this.app.set('views', path.resolve(__dirname, '../views/auth'));

        // Ruta para las vistas principales
        const filePaths = path.resolve(__dirname, '../views/partials');

        // Ruta para las vistas partials
             hbs.registerPartials( filePaths );
    }

    public start(){

    //Middleware
    this.app.use(express.json());
    this.app.use(express.static('public'));
    
    // Usar las rutas definidas    
    this.app.use( this.pathsWeb.auth, authRouter);
    this.app.use( allRouter );
    
    this.app.listen(this.port,()=>{
        console.log(`Servidor levantado en puerto: ${this.port}`)
    });
   }
}