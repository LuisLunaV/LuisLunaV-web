import { Request, Response } from 'express';
import { User } from '../../model/auth/users';

export class AuthController{

     static async register( req:Request, res:Response):Promise<void>{
        try {
            const body = req.body;
            console.log(body);
            const user = await User.create( body );

            res.status(201).json({
               'msg':'Register_controller'
           });

        } catch (error) {
            res.status(500).json({
                'Erro':'Internal Server Error'
            });
        }
    }

    static async  login( req:Request, res:Response ):Promise<void>{
      try {
        const body = req.body;
        
       res.status(200).json({
           'msg':'Login_controller'
       });
       
      } catch (error) {
        res.status(500).json({
            'Erro':'Internal Server Error'
        });
      }
    }
}