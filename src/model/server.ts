import express from 'express';
import { allRouter, authRouter, panelRouter, homeRouter } from '../routes/index.routes';
import { dbConnection } from '../database/config.db';
import hbs from 'hbs';
import path from 'path';
import cookieParser from 'cookie-parser'

export class Server{
    private readonly app = express();
    private readonly port:number;
    private pathsWeb = {
        auth: '/auth',
        panel: '/panel'
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
        this.app.set('views', [
            path.resolve(__dirname, '../views'),
            path.resolve(__dirname, '../views/auth')
        ]);
    
        

        // Ruta para las vistas principales
        const filePaths = [path.resolve(__dirname, '../views/partials'),
                           path.resolve(__dirname, '../views/partials/error'),
                           path.resolve(__dirname, '../views/partials/alerts') ];


        // Ruta para las vistas partials
        filePaths.forEach( path =>{
            hbs.registerPartials( path );
        });

    }

    public start(){

    //Middleware
    this.app.use(express.json());
    this.app.use(cookieParser());

    this.app.use(express.static('public'));

    this.app.use('/vendor/css', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/css')));
    this.app.use('/vendor/js', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist/js')));


    // Usar las rutas definidas    
    this.app.use( this.pathsWeb.auth, authRouter);
    this.app.use( this.pathsWeb.panel, panelRouter);
    this.app.use( this.pathsWeb.panel, homeRouter);
    this.app.use( allRouter );
    
    this.app.listen(this.port,()=>{
        console.log(`Servidor levantado en puerto: ${this.port}`)
    });
   }
}