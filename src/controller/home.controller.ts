import { Request, Response } from 'express';
export class HomeController{
    static homeRender( req:Request, res:Response){
        res.render('home',{
            title:'home'
        });
    }
}