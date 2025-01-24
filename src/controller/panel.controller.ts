import { Request, Response } from 'express';
export class PanelController{
    static panelRender( req:Request, res:Response){
        res.render('panel',{
            title:'panel'
        });
    }
}