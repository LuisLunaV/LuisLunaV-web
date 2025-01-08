import { Request, Response } from 'express';
import { User } from '../../model/auth/users';
import { BcryptAdapter } from '../../config/bcrypt';



export class AuthController{


     static async register( req:Request, res:Response):Promise<void>{
        try {
            const { User_Name, User_Email, User_Password } = req.body;

            const hashPassword = BcryptAdapter.hash;

            const data = { 
                User_Name:User_Name.toUpperCase(), 
                User_Email:User_Email, 
                User_Password: hashPassword( User_Password )
            };
            
            const user = await User.create( data );

            res.status(201).json({
               'msg':'Usuario registrado',
               'status':200,
               user
           });

        } catch (error) {
            res.status(500).json({
                'Erro':`Internal server error. ${ error }`
            });
        }
    }

    static async login( req:Request, res:Response ):Promise<void>{
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