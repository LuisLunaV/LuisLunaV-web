import { Request, Response } from 'express';
import { IHomeService } from '../services/home/IHomeServices';

export class HomeController{
    
    constructor( private readonly homeService: IHomeService ){}
   
    public allMessages = async( req:Request, res: Response ):Promise<any>=>{

        const allHomeInfo = await this.homeService.getHome();

        return res.status(200).json({
            allHomeInfo
        });
    }
    
   public addMessages = async( req:Request, res: Response ):Promise<void>=>{
    
    try {
    
        const body = req.body;
        await this.homeService.updateStatusHome()
    
        const home = await this.homeService.createHome( body );
    
        res.status( 201 ).json({
            home
           })
    
        } catch (error) {
             res.status(500).json({
                'Erro':`Internal server error. ${ error }`
            })
        }
    }

}